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

const Checkout = ({ confirmedNft }) => {
  const [products, setProducts] = useState([]);
  const [displayPrice, setDisplayPrice] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [variants, setVariants] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [clothSize, setClothSize] = useState("");
  const [clothSizeVariant, setClothSizeVariant] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lineItemCount, setlineItemCount] = useState(0);
  // const [cartNfts, setCartNfts] = useState([]);
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

  const onLoad = () => {
    setIsLoaded(true);
  };

  const handleClick = async () => {
    const cartNfts = {};
    const checkout = await context.actions.fetchCart(localStorage.getItem("checkoutId"));
    if (checkout.lineItems.length > 0) {
      checkout.lineItems.forEach((item) => {
        cartNfts[JSON.parse(item.customAttributes[0].value)[0].contractId] = true;
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

      await context.actions.addNftData({
        nftId: confirmedNft.id,
        contractId: confirmedNft.contract,
        shopifyId: variants[clothSizeVariant].id,
        lineItemId: lineItemId,
        wallet: wallet.store.connectedWallets.metamask,
        img: confirmedNft?.imageUrl,
        checkoutId: context.store.checkout.id,
      });
      setlineItemCount(cart.lineItems.length);
    } else {
      alert("This NFT has been claimed already!");
    }
  };

  return (
    <div style={{ minHeight: "80vh" }}>
      {products.length &&
        products.map((product, i) => {
          return (
            <div key={i} className="center">
              <p
                className="text-center product-text"
                style={{ fontStyle: "italic", fontSize: "24px" }}
              >
                All models are wearing size L hoodie.
              </p>
              <h2 className="price">{displayPrice}</h2>
              <Dropdown
                className="center"
                isOpen={dropDownOpen}
                toggle={() => setDropDownOpen(!dropDownOpen)}
              >
                <DropdownToggle caret>
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
              <button
                className="order-button mt-3 btn btn-primary"
                disabled={!clothSize.length}
                onClick={handleClick}
              >
                {
                  dropDownOpen ? `Choose a Size` : `Add to cart`
                  // : `Add ${clothSize} ${displayName} to cart`
                }
              </button>
              {context.store.checkout.webUrl && (
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
              )}
            </div>
          );
        })}
      <NewFooter orderPage={"fixed-bottom"} />
    </div>
  );
};

export default Checkout;
