import React, { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Container, Row, Col } from "reactstrap";
import { AppContext } from "../contexts/ContextProvider";

const Order = () => {
  const context = useContext(AppContext);

  const getNFTs = async () => {
    try {
      console.log(context.store.connectedWallets.metamask);
      fetch(
        `https://api.opensea.io/api/v1/assets?owner=${context.store.connectedWallets.metamask}&order_direction=desc&offset=0&limit=20`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNFTs();
  }, []);

  return (
    <Layout pageTitle="eluno | Order">
      <Header />
      <section className="section">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="center">
              <h1>Hoodie</h1>
              <div className="image-container-no-overflow">
                <img src="/images/hoodie.png" alt="hoodie" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Order;
