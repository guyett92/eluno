import React from "react";
import { Container, Row, Col } from "reactstrap";
const About = () => {
  return (
    <section className="section animated-background" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center bg-white p-4 rounded mb-5">
              <h3 className="font-weight-normal text-dark">The Squad</h3>
              <Row className="justify-content-center">
                <Col>
                  <img src="/images/jonah.png" alt="jonah" width={200} />
                  <h6 className="text-dark font-weight-light f-20 mb-3">
                    Jonah
                  </h6>
                </Col>
                <Col>
                  <img
                    src="/images/aaron.png"
                    alt="aaron"
                    width={200}
                    className="image-align-text"
                  />
                  <h6 className="text-dark center font-weight-light f-20 mb-3">
                    Aaron
                  </h6>
                </Col>
                <Col>
                  <img src="/images/anayo.png" alt="anayo" width={200} />
                  <h6 className="text-dark font-weight-light f-20 mb-3">
                    Anayo
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
