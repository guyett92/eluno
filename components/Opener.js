import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";

const Opener = () => {
  useEffect(() => {
    setTimeout(() => {
      const elementExists = document.getElementById("firstContainer");
      if (elementExists) {
        document.getElementById("firstContainer").remove();
      }
    }, 6000);
    setTimeout(() => {
      const elementExists = document.getElementById("secondContainer");
      if (elementExists) {
        document.getElementById("secondContainer").remove();
      }
    }, 10000);
  }, []);

  return (
    <div>
      <div className="text-container">
        <h1
          className={"item-fadeout"}
          style={{ animationDelay: "3.5s" }}
          id="firstContainer"
        >
          <span className="item-fadein">The </span>
          <span className="item-fadein" style={{ animationDelay: "1.5s" }}>
            <span>future</span>
          </span>
          <span className="item-fadein" style={{ animationDelay: "2s" }}>
            {" "}
            of{" "}
          </span>
          <span
            className="item-fadein aqua-text"
            style={{ animationDelay: "2.5s" }}
          >
            style{" "}
          </span>
        </h1>
        {/* <h1
          className={"item-fadeout"}
          style={{ animationDelay: "7.5s" }}
          id="secondContainer"
        >
          <span className="item-fadein" style={{ animationDelay: "5s" }}>
            Premium
          </span>{" "}
          <span
            className="item-fadein aqua-text"
            style={{ animationDelay: "5.5s" }}
          >
            fashion,
          </span>{" "}
          <span className="item-fadein" style={{ animationDelay: "6s" }}>
            <span>NFT</span>
          </span>
          <span className="item-fadein" style={{ animationDelay: "6.5s" }}>
            {" "}
            art
          </span>
        </h1> */}
        {/* Old Text Here */}
        <div
          className="item-fadeout banner"
          style={{ animationDelay: "8.5s" }}
          id="secondContainer"
        >
          <div
            className="item-fadein"
            style={{
              animationDelay: "5s",
              position: "relative",
              display: "inline",
            }}
          >
            <img src="/images/header.jpg" alt="header image" />
            <img
              style={{ animationDelay: "6.5s" }}
              src="/images/infused.png"
              alt="header image"
              className="item-fadein overlay"
            />
          </div>
        </div>
        <div
          className="item-fadein"
          id="thirdContainer"
          style={{ animationDelay: "10.5s" }}
        >
          {/* <h1 className="logo-text">eluno</h1> */}
          <section className="vision-section bg-light" id="clothing">
            <Container fluid>
              <h1 className="most-titles title text-dark text-center">
                the gear
              </h1>
              <Row>
                <Col className="center" xl="4">
                  <img src="/images/hoodie.png" alt="hoodie" width="549.99" />
                  <h2 className="text-center gear-text">the eluno hoodie</h2>
                </Col>
                <Col className="center">
                  <p className="description">
                    <b className="aqua-text">Eluno</b> — one of one clothing
                    infused with your favorite NFTs.
                    <br />
                    <br />
                    You built a legendary collection that lives in your wallet.
                    The communities are epic and utilities are next level.
                    <br />
                    <br />
                    But outside of Twitter, where do you brag about your
                    collection? Please don’t tell us you pull out MetaMask and
                    login to show off your collection in public…
                    <br />
                    <br />
                    <b>Our mission is simple:</b> your NFT on the highest
                    quality materials crypto can buy. This is not an off the
                    rack blank or a screen printed collection logo that is one
                    of 10,000…
                    <br />
                    <br />
                    Each piece we make, like your NFT, is a one of one. It’s
                    hand sewn from rolls of fabric we select and sewn based on a
                    pattern designed from the ground up. It’s as if all our
                    favorite hoodies formed a partnership and dropped a hoodie.
                    <br />
                    <br />
                    You will be the only one on the planet to own the merch
                    we’ve made for you. How do we know this? Because you are the
                    only one in the galaxy with this NFT in your wallet and the
                    ledger never lies.
                    <br />
                    <br />
                    One of One, Made by <b className="aqua-text">Eluno</b>
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Opener;
