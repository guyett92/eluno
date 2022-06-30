import { Col, Container, Row } from "reactstrap";
import Link from "next/link";

const NewFooter = ({ orderPage = "" }) => {
  return (
    <Row className={`new-footer ${orderPage}`}>
      <Col className="logo-container footer-col-container">
        <Link passHref href="/">
          <img
            src="/images/eluno-logo.png"
            alt="eluno-logo"
            className="eluno-logo"
          />
        </Link>
      </Col>
      <Col className="footer-col-container mt-2">
        <p className="team-container">
          Team: <br />
          <div className="team-members mt-1">
            <a
              href="https://twitter.com/jonahpeake"
              target="_blank"
              rel="noreferrer"
            >
              @jonahpeake
            </a>
            <br />
            <a
              href="https://twitter.com/guyettaaron"
              target="_blank"
              rel="noreferrer"
            >
              @guyettaaron
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/anayon/"
              target="_blank"
              rel="noreferrer"
            >
              @anayo
            </a>
            <br />
            <a>@jovan</a>
            <br />
          </div>
        </p>
      </Col>
      <Col className="footer-col-container mt-3">
        <p className="follow-us">
          Follow us <br />
          <a
            href="https://twitter.com/eluno_io"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icons" src="/icons/twitter.png" alt="twitter" />
            @eluno_io
          </a>
        </p>
      </Col>
    </Row>
  );
};

export default NewFooter;
