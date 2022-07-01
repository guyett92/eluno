import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { AppContext } from "../contexts/ContextProvider";
import { WalletContext } from "../contexts/WalletContext";
import NewFooter from "./NewFooter";
import { render } from "react-dom";

const Checkout = ({ confirmedNft }) => {
  const [products, setProducts] = useState([]);
  const [displayPrice, setDisplayPrice] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [variants, setVariants] = useState([]);
  const [sizeDropDownOpen, setSizeDropDownOpen] = useState(false);
  const [colorDropDownOpen, setColorDropDownOpen] = useState(false);
  const [clothSizeVariant, setClothSizeVariant] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lineItemCount, setlineItemCount] = useState(0);
  const [clothSize, setClothSize] = useState("");
  const [sweaterColor, setSweaterColor] = useState("");
  const [buttonText, setButtonText] = useState("");
  const context = useContext(AppContext);
  const wallet = useContext(WalletContext);

  useEffect(() => {
    setProducts(context.store.products);
  }, [context, wallet]);

  useEffect(() => {
    if (products.length) {
      setDisplayPrice(products[0].variants[0].price);
      setDisplayName(products[0].title);
      setVariants(products[0].variants);
      setlineItemCount(context.store.checkout.lineItems.length);
    }
  }, [products, context.store]);

  useEffect(() => {
    getButtonText();
  }, [clothSize, sweaterColor])

  const onLoad = () => {
    setIsLoaded(true);
  };

  const handleClick = async () => {
    const cartNfts = {};
    const checkout = await context.actions.fetchCart(localStorage.getItem("checkoutId"));
    if (checkout.lineItems.length > 0) {
      checkout.lineItems.forEach((item) => {
        cartNfts[JSON.parse(item.customAttributes[0].value).contractAddr] = true;
      })
    }

    if (!cartNfts[confirmedNft.contract]) {
      const cart = await context.actions.addItemToCart(
        variants[clothSizeVariant].id,
        1,
        context.store.checkout.id
      );
      const lineItems = cart.lineItems;
      let lineItemId;
      for (let i = 0; i < lineItems.length; i++) {
        if (
          lineItems[i].variant.title.toLowerCase() === clothSize.toLowerCase()
        ) {
          lineItemId = lineItems[i].id;
        }
      }

      const data = {
        nftId: confirmedNft.id,
        contractAddr: confirmedNft.contract,
        shopifyId: variants[clothSizeVariant].id,
        lineItemId: lineItemId,
        wallet: wallet.store.connectedWallets.metamask,
        img: confirmedNft?.imageUrl,
        checkoutId: context.store.checkout.id,
        sweaterColor: sweaterColor,
      }

      await context.actions.addNftData(data);
      setlineItemCount(cart.lineItems.length);
    } else {
      alert("This NFT has been claimed already!");
    }
  };

  const getButtonText = () => {
    let text = "";
    if (!clothSize) {
      text = "Choose a Size";
    } else if (!sweaterColor) {
      text = "Choose a Color";
    } else {
      text = "Add to cart";
    }
    setButtonText(text);
  }

  return (
    <div style={{ minHeight: "80vh" }}>
      {products.length &&
        products.map((product, i) => {
          return (
            <div key={i} className=" checkout-container">
              <h2 className="price">{displayPrice}</h2>
              <Dropdown
                className="center"
                isOpen={sizeDropDownOpen}
                toggle={() => setSizeDropDownOpen(!sizeDropDownOpen)}
              >
                <DropdownToggle caret disabled={!confirmedNft}>
                  {clothSize.length > 0 ? clothSize : "Size"}
                </DropdownToggle>
                <DropdownMenu>
                  {variants &&
                    variants.map((variant, i) => {
                      return (
                        <DropdownItem
                          onClick={() => {
                            setClothSize(variant.title);
                            setClothSizeVariant(i);
                          }}
                          key={i}
                        >
                          {variant.title}
                        </DropdownItem>
                      );
                    })}
                </DropdownMenu>
              </Dropdown>

              <Dropdown
                className="center"
                isOpen={colorDropDownOpen}
                toggle={() => setColorDropDownOpen(!colorDropDownOpen)}
              >
                <DropdownToggle caret disabled={!confirmedNft}>
                  {sweaterColor.length > 0 ? sweaterColor : "Color"}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => {
                      setSweaterColor("Black");
                    }}
                  >
                    Black
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setSweaterColor("White");
                    }}
                  >
                    White
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <div className="center w-100">
                <button
                  className="order-button mt-3 btn btn-primary"
                  disabled={(!clothSize.length || !sweaterColor.length)}
                  onClick={handleClick}
                >
                  {buttonText}
                </button>
              </div>
              <p className="disclaimer mx-auto"><i>By ordering this NFT you are attesting to the fact that you own this NFT and are liable for any repercussive actions that come with using the artwork on an Eluno. Eluno, its team, and its partners hold no liability or responsibility for the artwork chosen to be used and can not be held liable for any actions that occur as a result of your purchase.</i></p>
              {context.store.checkout.webUrl && (
                <div className="center w-100">
                  <Link
                    href={
                      context.store.checkout.webUrl.length > 0
                        ? context.store.checkout.webUrl
                        : ""
                    }
                    passHref
                  >
                    <button
                      className="order-button my-4 btn btn-success"
                      disabled={!lineItemCount > 0}
                      style={{ display: lineItemCount > 0 ? "block" : "none" }}
                    >
                      Checkout
                    </button>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      <NewFooter orderPage={"fixed-bottom"} />
    </div>
  );
};

export default Checkout;
