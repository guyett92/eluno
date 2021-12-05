import React from "react";
import { Row, Col, Container } from "reactstrap";
const Gear = () => {
  return (
    <section className="section vision-section bg-light" id="clothing">
      <Container fluid>
        <h1 className="most-titles title text-dark text-center">the gear</h1>
        <Row>
          <Col className="center">
            <img src="/images/hoodie.jpg" alt="hoodie" width="550" />
            <h2 className="text-center">the eluno hoodie</h2>
          </Col>
          <Col className="center">
            <img
              src="/images/t-shirt.jpg"
              alt="t-shirt"
              width="550"
              height="789"
            />
            <h2 className="text-center">the eluno tee</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Gear;
