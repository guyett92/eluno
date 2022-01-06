import React from "react";
import { Container, Row, Col } from "reactstrap";
const Vision = () => {
  return (
    <section className="section vision-section bg-light" id="vision">
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <div className="text-center mb-5">
              <h1 className="title most-titles text-dark">we stand for</h1>
              <h2 className="text-dark pt-4">
                Quality, Creativity and Individualism. Our mission is simple:
                your artwork on the highest quality materials crypto can buy.
                This is not an American Apparel reprint. Each piece is handmade,
                destroying the mold. Literally, there is only 1 ever made.
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6}>
            <div>
              <div className="mb-5"></div>
              <h5 className="text-light font-weight-normal pt-1 mb-4"></h5>
              <p className="text-muted mb-4"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Vision;
