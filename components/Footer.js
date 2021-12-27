import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Waitlist from "./Waitlist";
const Footer = () => {
  const [modalShow, setModalShow] = useState(false);
  const links = [
    {
      id: 1,
      title: "Team",
      child: [
        { title: "@jonahpeake", link: "https://twitter.com/jonahpeake" },
        { title: "@anayo", link: "https://www.linkedin.com/in/anayon/" },
        { title: "@guyettaaron", link: "https://twitter.com/guyettaaron" },
      ],
    },
    {
      id: 2,
      title: "About Us",
      child: [
        { title: "Contact", link: "#faq" },
        { title: "FAQ", link: "#faq" },
        { title: "Privacy Policy", link: "#faq" },
      ],
    },
  ];

  return (
    <section className="footer white-section section">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="mb-4">
              <h6 className="text-muted mt-4 mb-2">
                <a href="mailto:hello@eluno.io" className="nav-hover">
                  hello@eluno.io
                </a>
              </h6>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              {links.map((link, key) => (
                <Col key={key} md={4}>
                  <h6 className="text-dark mb-3">{link.title}</h6>
                  <ul className="list-unstyled company-sub-menu">
                    {key === 0 &&
                      link.child.map((fLink, key) => (
                        <li key={key}>
                          <a
                            className="nav-hover text-muted"
                            target="_blank"
                            href={fLink.link}
                            rel="noreferrer"
                          >
                            {fLink.title}
                          </a>
                        </li>
                      ))}
                    {key === 1 &&
                      link.child.map((fLink, key) => (
                        <li key={key}>
                          <a className="nav-hover text-muted" href={fLink.link}>
                            {fLink.title}
                          </a>
                        </li>
                      ))}
                  </ul>
                </Col>
              ))}

              <Col md={4}>
                <h6 className="text-dark mb-3"></h6>
                <div className="btn btn-container">
                  <div className="border-container">
                    <a
                      className="btn"
                      role="button"
                      onClick={() => setModalShow(true)}
                    >
                      Join Waitlist
                    </a>
                  </div>
                </div>
                <Waitlist
                  isOpen={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">
                {new Date().getFullYear()} © Eluno. Made with fists of 💖 by KC.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
