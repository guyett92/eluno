import React, { useState, useEffect, useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ShopCard from "../components/ShopCard";
import { Carousel } from 'react-responsive-carousel';
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

const ShopifyCarousel = () => {
  const [products, setProducts] = useState([]);
  const [displayPrice, setDisplayPrice] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [variants, setVariants] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [clothSize, setClothSize] = useState("");
  const [clothSizeVariant, setClothSizeVariant] = useState(0);
  const context = useContext(AppContext);

  useEffect(() => {
    const nonCustomItems = [];
    context.store.products.map(product => {
      if (product.title !== 'Custom NFT Clothes') {
        nonCustomItems.push(product);
      }
    })
    setProducts(nonCustomItems);
  }, [context]);

  useEffect(() => {
    if (products.length) {
      setDisplayPrice(products[0].variants[0].price);
      setDisplayName(products[0].title);
      setVariants(products[0].variants);
    }
  }, [products])

  return (
    <>
      <Carousel 
        className="product-carousel"
        activeIndex={0}
        showThumbs={false} 
        infiniteLoop={true}
        onChange={(i) => {
          setDisplayPrice(products[i].variants[0].price);
          setDisplayName(products[i].title);
          setVariants(products[i].variants);
        }}
      >
        {products.length && 
          products.map((product, i) => {

            return (
              <Col key={i} className="center">
                <ShopCard 
                  imgSrc={product.images[0].src}
                  name={product.title}
                />
                <p className="text-center price">
                  {`$${displayPrice}`}
                </p>
              </Col>
            )
          })
        }
      </Carousel>
      <Dropdown
        className="center"
        isOpen={dropDownOpen}
        toggle={() => setDropDownOpen(!dropDownOpen)}
      >
        <DropdownToggle caret>Size</DropdownToggle>
        <DropdownMenu>
          {variants && variants.map((variant, i) => {
            return(
              <DropdownItem
                onClick={() => {
                  setClothSize(variant.title.toLowerCase());
                  setClothSizeVariant(i);
                }}
                key={i}
              >
                {`${variant.title.toLowerCase()}`}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
      <Button
				className="addButton"
				disabled={!clothSize.length}
				onClick={async () => {
					await context.actions.addItemToCart(
						variants[clothSizeVariant].id,
						1,
						context.store.checkout.id,
					)
				}}
			>
				{dropDownOpen
					? `Choose a Size`
					: `Add ${clothSize} ${displayName} to cart`}
			</Button>
    </>
  )
}

export default ShopifyCarousel;