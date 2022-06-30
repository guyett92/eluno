import { Col, Container, Row } from "reactstrap";

const NewFooter = () => {
  return (
    <Row className="new-footer">
      <Col className="logo-container footer-col-container">
        <img 
          src="/images/eluno-logo.png"
          alt="eluno-logo"
          className="eluno-logo"
        />
      </Col>
      <Col className="footer-col-container mt-3">
        <p>
          Jonah <br />
          Aaron <br />
          Anayo <br />
          Jovan <br />
        </p>
        <div className="icons">
          <img src="/icons/twitter.png"/> <br />
          <img src="/icons/twitter.png"/> <br />
          <img src="/icons/linkedin.png"/> <br />
        </div>
      </Col>
      <Col className="team-container footer-col-container mt-2">
        <p>
          Team: <br />
          @jonapeake (twitter / linkedin) <br />
          @Aaron (twitter / linkedin) <br />
          @Anayo (linkedin) <br />
          @jovan (Not sure) <br />
        </p>
      </Col>
      <Col className="footer-col-container mt-3">
        <p className="follow-us">
          Follow us <br />
          <img src="/icons/twitter.png"/>@eluno_io
        </p>
      </Col>
    </Row>
  );
};

export default NewFooter;
