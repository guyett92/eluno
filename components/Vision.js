import React from "react";
import { Container, Row, Col } from "reactstrap";
const Vision = () => {
  return (
    <section className="section vision-section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-light">
                Limited Launch 1000
              </h3>
              <p className="text-muted pt-4">
                Each order is limited to 1 shirt and 1 hoodie. We want you to
                have the best. Our biggest fear is compromising on quality. We
                could work with a manufacturer that prioritizes speed, but that
                just doesn’t fit our style. Our pieces are meant to be unique to
                you, last a lifetime and to continue to get more comfortable.
                Unfortunately, this limits the quantities we can produce. But of
                course, that makes your items more rare. Which we think is
                pretty cool.
              </p>
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
