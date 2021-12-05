import React from "react";
import { Container, Row, Col } from "reactstrap";
const Vision = () => {
  return (
    <section className="section vision-section bg-light" id="vision">
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <div className="text-center mb-5">
              <h1 className="title most-titles text-dark">our vision</h1>
              <h2 className="text-dark pt-4">
                You’re proudly rocking an eluno and a friend or NFT fan scans
                the shirt, links to your opensea page and makes an offer you
                can’t refuse. Depending on the deal you strike with them, you
                might need to give up your shirt. But at that point, you’ve just
                loaded up your wallet and can pull the trigger on the next epic
                NFT and proudly display it on your next eluno.
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
