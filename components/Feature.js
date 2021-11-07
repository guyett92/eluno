import React from "react";
import { Container, Row, Col } from "reactstrap";
import FadeIn from "react-fade-in";

const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-5"
            }
          >
            <Col md={5}>
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 btn aqua">
                  Read More <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={6}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <btn href={feature.link} className="f-16 btn aqua">
                  Read More <span className="right-icon ml-2">&#8594;</span>
                </btn>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  );
};
const Feature = () => {
  const features = [
    {
      id: 1,
      img: "./images/clothes.svg",
      title: "Quality",
      desc: "We visited over 100 manufacturers, unrolled miles of fabrics, and meticulously rolled around searching for the optimum feel. We selected premium organic cotton usually reserved for royalty. This is the quality your NFT deserves. This is the quality you deserve.",
      link: "/",
    },
    {
      id: 2,
      img: "./images/photoshoot.svg",
      title: "Style",
      desc: "This isn't your sister's Forever 21 collection. We are take our time to ensure each stitch on every piece from our collection is filled with passion, style, and integrity with hopes that you treat it as well as we do.",
      link: "/",
    },
    {
      id: 3,
      img: "./images/shopping.svg",
      title: "Exclusivity",
      desc: "Each piece, like your NFT, is one of one. It’s handmade and stamped with a unique identifier. You’ll be the only one in the galaxy to own what we’ve made for you. How do we know this? Because you’re the only one in the world with this NFT in your wallet. ",
      link: "/",
    },
  ];
  return (
    <FadeIn delay={1500} className="section white-section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Our Vision</h3>
              <p className="text-muted">
                You’re proudly rocking an eluno and a friend or NFT fan scans
                the shirt, links to your opensea page and makes an offer you
                can’t refuse. Depending on the deal you strike with them, you
                might need to give up your shirt. But at that point, you’ve just
                loaded up your wallet and can pull the trigger on the next epic
                NFT and proudly display it on your next eluno.
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </FadeIn>
  );
};
export default Feature;
