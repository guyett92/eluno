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
        <div className="team-container">
          Team <br />
          <span className="team-members mt-1" style={{ display: "block" }}>
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
          </span>
        </div>
      </Col>
      <Col className="footer-col-container mt-2">
        <p className="follow-us">
          Follow Us <br />
          <a
            href="https://twitter.com/eluno_io"
            target="_blank"
            rel="noreferrer"
          >
            @eluno_io
          </a>
        </p>
      </Col>
    </Row>
  );
};

export default NewFooter;
