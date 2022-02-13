import React, { useEffect, useState, useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { AppContext } from "../contexts/ContextProvider";

const sizeData = {
  0: "small",
  1: "medium",
  2: "large",
  3: "extra-large",
};

const Order = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    "eluno tee": false,
    "eluno hoodie": false,
  });
  const [dropdownValue, setDropdownValue] = useState({
    "eluno tee": -1,
    "eluno hoodie": -1,
  });

  const context = useContext(AppContext);

  // TODO: Get NFTs and their images and present them as options
  // const getNFTs = async () => {
  //   try {
  //     console.log(currentAccount);
  //     fetch(
  //       `https://api.opensea.io/api/v1/assets?owner=${currentAccount}&order_direction=desc&offset=0&limit=20`
  //     )
  //       .then((res) => res.json())
  //       .then(
  //         (result) => {
  //           console.log(result);
  //         },
  //         (err) => {
  //           console.log(err);
  //         }
  //       );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   // getNFTs();
  // }, []);

  // TODO: Capture wallet as part of the order process
  // TODO: Capture NFT contract and verify it as part of the order process

  const toggle = (title) => {
    const currValue = dropdownOpen[title];
    title === "eluno tee"
      ? setDropdownOpen({ ...dropdownOpen, "eluno tee": !currValue })
      : setDropdownOpen({ ...dropdownOpen, "eluno hoodie": !currValue });
  };

  const changeValue = (sizeNum, title) => {
    title === "eluno tee"
      ? setDropdownValue({ ...dropdownValue, "eluno tee": sizeNum })
      : setDropdownValue({ ...dropdownValue, "eluno hoodie": sizeNum });
  };

  useEffect(() => {
    // TODO: Create cart as well without breaking this
    context.actions.fetchAllProducts();
  }, []);

  return (
    <Layout pageTitle="eluno | Order">
      <section className="section">
        <Container>
          {context.store.products ? (
            <Row className="justify-content-md-center product-text">
              {context.store.products.map((product) => (
                <Col key={product.id} className="center">
                  <h1 className="center">{product.title}</h1>
                  <img
                    src={product.images[0].src}
                    className="image-container"
                  />
                  <p className="text-center price">
                    {product.variants[0].price}
                  </p>
                  <Dropdown
                    className="center"
                    isOpen={dropdownOpen[product.title]}
                    toggle={() => {
                      toggle(product.title);
                    }}
                  >
                    <DropdownToggle caret>Size</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={() => {
                          changeValue(0, product.title);
                        }}
                      >
                        Small
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => {
                          changeValue(1, product.title);
                        }}
                      >
                        Medium
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => {
                          changeValue(2, product.title);
                        }}
                      >
                        Large
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => {
                          changeValue(3, product.title);
                        }}
                      >
                        Extra Large
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Button
                    disabled={dropdownValue[product.title] === -1}
                    onClick={() => {
                      console.log(
                        "product id",
                        product.variants[dropdownValue[product.title]].id
                      );
                      console.log(context.store.checkout);
                      context.actions.addItemToCart(
                        product.variants[dropdownValue[product.title]].id,
                        1
                      );
                    }}
                  >
                    {dropdownValue[product.title] === -1
                      ? `Choose a Size`
                      : `Add ${sizeData[dropdownValue[product.title]]} ${
                          product.title.split(" ")[1]
                        } to cart`}
                  </Button>
                </Col>
              ))}
            </Row>
          ) : (
            // TODO: Decide if I need to remove this
            <div>Loading</div>
          )}
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default Order;
