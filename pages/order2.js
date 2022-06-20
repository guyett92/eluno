import React, { useState, useEffect, useContext } from "react";
import ShopifyCarousel from "../components/ShopifyCarousel";
import { Container, Row, Col, Button } from "reactstrap";
import { AppContext } from "../contexts/ContextProvider";
import ClearCartButton from "../components/ClearCartButton";

const Order2 = () => {
  const [nftData, setNftData] = useState("");

  const context = useContext(AppContext);
  
  useEffect(() => {
    context.actions.fetchAllProducts();
    if (!localStorage.getItem("checkoutId") || localStorage.getItem("checkoutId") === "undefined") {
      context.actions.createCheckout();
    } else {
      context.actions.openCart(localStorage.getItem("checkoutId"));
    }
    setNftData(JSON.parse(localStorage.getItem("nftData")));
  }, []);
  
  useEffect(() => {
    if (context.store.checkout.id) {
      localStorage.setItem("checkoutId", context.store.checkout.id);
    }
  }, [context]);

  return (
    <Container>
      <ClearCartButton />
      <Row className="product-container justify-content-md-center white-text">
        {context.store.checkout.id && 
          <ShopifyCarousel confirmedNft={nftData} />
        }  
      </Row> 
    </Container>
  );
};

export default Order2;
