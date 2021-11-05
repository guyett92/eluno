import React from "react";
import { Container, Row, Col } from "reactstrap";
const About = () => {
  return (
    <section className="section bg-white" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">The Squad</h3>
              <img src="/images/eluno team.png" alt="eluno team" width="100%" />
              <Row className="justify-content-center">
                <Col md={3}>
                  <h6 className="text-dark font-weight-light f-20 mb-3">
                    Earthworm
                  </h6>
                </Col>
                <Col md={3}>
                  <h6 className="text-dark font-weight-light f-20 mb-3">KC</h6>
                </Col>
                <Col md={3}>
                  <h6 className="text-dark font-weight-light f-20 mb-3">
                    Goodvibesylno
                  </h6>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
