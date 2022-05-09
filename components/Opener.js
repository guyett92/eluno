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
          <section className="section vision-section bg-light" id="clothing">
            <Container fluid>
              <h1 className="most-titles title text-dark text-center">
                the gear
              </h1>
              <Row>
                <Col className="center">
                  <img src="/images/hoodie.png" alt="hoodie" width="549.99" />
                  <h2 className="text-center gear-text">the eluno hoodie</h2>
                </Col>
                <Col className="center">
                  <img
                    src="/images/tee.png"
                    alt="t-shirt"
                    width="549.99"
                    height="733.32"
                  />
                  <h2 className="text-center gear-text">the eluno tee</h2>
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
