import React from "react";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <section className="section bg-light pb-4" id="team">
      <Container fluid className="center">
        <h1 className="text-dark title most-titles text-center">the squad</h1>
        <Row className="justify-content-center">
          <Col className="space-center">
            <div className="image-container">
              <img src="/images/jonah.png" alt="jonah" width={400} />
            </div>
            <h4 className="text-dark text-center">Jonah</h4>
          </Col>
          <Col className="space-center">
            <div className="image-container">
              <img src="/images/aaron.png" alt="aaron" width={400} />
            </div>
            <h4 className="text-dark text-center">Aaron</h4>
          </Col>
          <Col className="space-center">
            <div className="image-container">
              <img src="/images/anayo.png" alt="anayo" width={400} />
            </div>
            <h4 className="text-dark text-center">Anayo</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
