import React, { useState, useEffect, useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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

const ShopifyCarousel = ({ confirmedNft }) => {
  const [products, setProducts] = useState([]);
  const [displayPrice, setDisplayPrice] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [variants, setVariants] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [clothSize, setClothSize] = useState("");
  const [clothSizeVariant, setClothSizeVariant] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lineItemCount, setlineItemCount] = useState(0);
  const context = useContext(AppContext);

  useEffect(() => {
    setProducts(context.store.products);
  }, [context]);

  useEffect(() => {
    if (products.length) {
      setDisplayPrice(products[0].variants[0].price);
      setDisplayName(products[0].title);
      setVariants(products[0].variants);
      setlineItemCount(context.store.checkout.lineItems.length);
    }
  }, [products]);

  const onLoad = () => {
		setIsLoaded(true);
	};


  return (
    <>
      {products.length &&
        products.map((product, i) => {
          return (
            <div key={i} className="center">
              <h1 className="center">{product.title}</h1>
              <Carousel 
                className="product-carousel"
                activeIndex={0}
                showThumbs={false} 
                infiniteLoop={true}
                dynamicHeight={true}
              >
                {product.images.map((image, j) => {
                  return (
                    <Col key={j} className="product-image-container">
                      <img
                        style={{
                          display: isLoaded ? "block" : "none",
                        }}
                        onLoad={ onLoad }
                        src={ image.src }
                      />
                    </Col>
                  )
                })}
              </Carousel>
              <p 
                className="center product-text"
                style={{ fontStyle: "italic" }}
              >
                All models are wearing size L hoodie.
              </p>
              <h2 className="price">{ displayPrice }</h2>
              <Dropdown
                className="center"
                isOpen={dropDownOpen}
                toggle={() => setDropDownOpen(!dropDownOpen)}
              >
                <DropdownToggle caret>{ clothSize.length > 0 ? clothSize : "Size" }</DropdownToggle>
                <DropdownMenu>
                  {variants && variants.map((variant, i) => {
                    return(
                      <DropdownItem
                        onClick={() => {
                          setClothSize(variant.title);
                          setClothSizeVariant(i);
                        }}
                        key={i}
                      >
                        {variant.title}
                      </DropdownItem>
                    )
                  })}
                </DropdownMenu>
              </Dropdown>
              <Button
                className="end-button"
                disabled={!clothSize.length}
                onClick={async () => {
                  const cart = await context.actions.addItemToCart(
                    variants[clothSizeVariant].id,
                    1,
                    context.store.checkout.id,
                  )
                  const lineItems = cart.lineItems
                  let lineItemId;
                  for (let i = 0; i < lineItems.length; i++) {
                    if (lineItems[i].variant.title.toLowerCase() === clothSize.toLowerCase()) {
                      lineItemId = lineItems[i].id;
                    }
                  }
                  await context.actions.addNftData({
                    nftId: confirmedNft.id, 
                    shopifyId: variants[clothSizeVariant].id,
                    lineItemId: lineItemId,
                    wallet: localStorage.getItem("address"), 
                    img: confirmedNft?.imageUrl,
                    checkoutId: context.store.checkout.id,
                  });
                  setlineItemCount(cart.lineItems.length);
                }}
              >
                {
                  dropDownOpen
                  ? `Choose a Size`
                  : `Add ${clothSize} ${displayName} to cart`
                }
              </Button>
              {context.store.checkout.webUrl && (
                <Link href={context.store.checkout.webUrl.length > 0 ? context.store.checkout.webUrl : ""} passHref>
                  <Button
                    className="end-button"
                    disabled={!(lineItemCount > 0 && clothSize.length)}
                    style={{ display: clothSize.length ? "block" : "none" }}
                  >
                    Checkout
                  </Button>
                </Link>
              )}
            </div>
          )
        })
      }
    </>
  )
}

export default ShopifyCarousel;