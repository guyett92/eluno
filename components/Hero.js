import React from "react";
import { Container, Row, Col } from "reactstrap";
import TextLoop from "react-text-loop";
import FadeIn from "react-fade-in";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <FadeIn className="pr-lg-5">
              <div className="eluno-image-container">
                <div className="eluno-image">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width="95px"
                    height="44px"
                  />
                </div>
              </div>
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
                Your <b className="aqua-text">identity</b> is now in a jpeg. But
                you are not. Wait, are you? Is this the{" "}
                <b className="aqua-text">Oasis?</b>
              </p>
              <p className="text-muted mb-2 pb-2">
                You grabbed your <b className="aqua-text">NFTs</b> because they
                speak to you. You
                {` wouldn't `}
                <b className="aqua-text">print</b> it on just anything would
                you? Cool Bored Ape thermo, Dad. See, that sounds lame. What
                doesn’t sound lame is your <b className="aqua-text">NFT</b> on a{" "}
                <b className="aqua-text">premium tee</b> or{" "}
                <b className="aqua-text">hoodie</b>.
              </p>
              <p className="aqua-text mb-4 pb-2">
                Bring your <b className="aqua-text">NFTs</b> back into the
                physical world with <b>eluno</b>.
              </p>
              <Link href="/order" passHref>
                <div className="btn btn-container">
                  <div className="border-container">
                    <a className="btn" role="button">
                      Order Now <span className="ml-2 right-icon">&#8594;</span>
                    </a>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0 animation-bubble">
              {/* <img
                src="/images/landing.svg"
                alt=""
                className="img-fluid mx-auto d-block"
              /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
