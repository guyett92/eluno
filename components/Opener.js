import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import Link from "next/link";

const Opener = () => {
  const thirdContainerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const firstContainer = document.getElementById("firstContainer");
      if (firstContainer) {
        document.getElementById("firstContainer").remove();
      }
    }, 6000);
    setTimeout(() => {
      const thirdContainer = document.getElementById("thirdContainer");
      if (thirdContainer) {
        thirdContainerRef.current.scrollIntoView();
      }
    }, 10000);
  }, []);

  return (
    <div>
      <div
        className="slide-one item-fadeout"
        id="firstContainer"
        style={{ animationDelay: "3.5s" }}
      >
        <h1>
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
      </div>
      <div
        className="slide-two item-fadeout"
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
          <img
            src="/images/eluno-logo.png"
            alt="eluno-logo"
            className="eluno-logo"
          />
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
        className="item-fadein slide-three"
        id="thirdContainer"
        style={{ animationDelay: "10.5s" }}
        ref={thirdContainerRef}
      >
        <section className="vision-section" id="clothing">
          <Container fluid>
            <h1 className="vision-title text-center">
              One of One, Made by Eluno
            </h1>
            <Row>
              <Col className="vid-container" xl="5">
                <img
                  src="/images/intro.gif"
                  muted
                  autoPlay
                  loop
                  alt="hoodie"
                  width="98%"
                />
              </Col>
              <Col>
                <p className="description">
                  Eluno — <b>one of one apparel</b> infused with your favorite
                  NFTs.
                  <br />
                  <br />
                  You built a legendary collection that lives in your wallet.
                  The communities are epic and utilities are next level.
                  <br />
                  <br />
                  But outside of Twitter,{" "}
                  <b>where do you flex your collection</b>? Please don&apos;t
                  tell us you pull out MetaMask and login to show off your
                  collection in public…
                  <br />
                  <br />
                  Our mission is simple:{" "}
                  <b>your NFT on the highest quality materials</b> crypto can
                  buy. This is not an off the rack blank or a screen printed
                  collection logo…
                  <br />
                  <br />
                  <b>Each piece</b> we make, like your NFT,{" "}
                  <b>is a one of one</b>. It&apos;s hand sewn from rolls of
                  fabric we select and sewn based on a pattern designed from the
                  ground up. It&apos;s as if all of our favorite hoodies joined
                  forces and dropped a hoodie.
                  <br />
                  <br />
                  <b>You will be the only one</b> on the planet to own the merch
                  we&apos;ve made for you. How do we know this? Because you are
                  the only one in the galaxy with this NFT in your wallet and
                  the ledger never lies.
                  <br />
                  <br />
                  <b>One of One, Made by Eluno</b>
                </p>
              </Col>
            </Row>
            <Row className="center">
              <Link href="/order" passHref>
                <button className="order-button btn btn-secondary">
                  Order Eluno Hoodie
                </button>
              </Link>
            </Row>
          </Container>
        </section>
        <section className="eluno-pic-section">
          <img src="/images/vision-pics.png" alt="vision-pics" />
          <p>
            <i>All models wearing size L</i>
          </p>
          <Link href="/order" passHref>
            <button className="order-button btn btn-secondary">
              Order Eluno Hoodie
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Opener;
