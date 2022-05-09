import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";

const Opener = () => {
  useEffect(() => {
    setTimeout(() => {
      const elementExists = document.getElementById("firstContainer");
      if (elementExists) {
        document.getElementById("firstContainer").remove();
      }
    }, 10000);
    setTimeout(() => {
      const elementExists = document.getElementById("secondContainer");
      if (elementExists) {
        document.getElementById("secondContainer").remove();
      }
    }, 20000);
  }, []);

  return (
    <div>
      <div className="text-container">
        <h1
          className={"item-fadeout"}
          style={{ animationDelay: "7s" }}
          id="firstContainer"
        >
          <span className="item-fadein">The </span>
          <span
            className="item-fadein future-text"
            style={{ animationDelay: "3s" }}
          >
            <span className="future-text">future</span>
          </span>
          <span className="item-fadein" style={{ animationDelay: "4s" }}>
            {" "}
            of{" "}
          </span>
          <span
            className="item-fadein aqua-text"
            style={{ animationDelay: "5s" }}
          >
            style{" "}
          </span>
        </h1>
        <h1
          className={"item-fadeout"}
          style={{ animationDelay: "17s" }}
          id="secondContainer"
        >
          <span className="item-fadein" style={{ animationDelay: "10s" }}>
            Premium
          </span>{" "}
          <span
            className="item-fadein aqua-text"
            style={{ animationDelay: "11s" }}
          >
            <i>fashion,</i>
          </span>{" "}
          <span className="item-fadein" style={{ animationDelay: "12s" }}>
            <span className="future-text">NFT</span>
          </span>
          <span className="item-fadein" style={{ animationDelay: "13s" }}>
            {" "}
            art
          </span>
        </h1>
        <div
          className="item-fadein"
          id="thirdContainer"
          style={{ animationDelay: "20s" }}
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
