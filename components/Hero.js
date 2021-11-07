import React from "react";
import { Container, Row, Col } from "reactstrap";
import TextLoop from "react-text-loop";
import FadeIn from "react-fade-in";

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <FadeIn className="pr-lg-5">
              <p className="text-uppercase aqua-text font-weight-medium f-14 mb-4">
                Eluno
              </p>
              <h1 className="mb-4 font-weight-normal text-light line-height-1_4">
                Share your{" "}
                <TextLoop>
                  <span>collection</span>
                  <span>NFT</span>
                  <span>passion</span>
                  <span>ideas</span>
                </TextLoop>
                .
              </h1>
              <p className="text-muted mb-2 pb-2">
                <b className="aqua-text">NFTs</b>. They are you. You are them.
                Your identity is now in a <b className="aqua-text">jpeg</b>. But
                you are not. Wait, are you? Is this the{" "}
                <b className="aqua-text">Oasis?</b>
              </p>
              <p className="text-muted mb-2 pb-2">
                You grabbed your NFTs because they speak to you. You
                {` wouldn't `}
                <b className="aqua-text">print</b> it on just anything would
                you? Cool Bored Ape thermo, Dad. See, that sounds{" "}
                <b className="aqua-text">lame</b>. What doesn’t sound lame is
                your NFT on a <b className="aqua-text">premium</b> tee or
                hoodie.
              </p>
              <p className="aqua-text mb-4 pb-2">
                Bring your NFTs back into the physical world with <b>eluno</b>.
              </p>
              <a href="#" className="btn aqua">
                Order Now <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </FadeIn>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="/images/landing.svg"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
