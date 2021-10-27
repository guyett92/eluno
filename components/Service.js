import React from "react";
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    {
      title: "FABRIC HERE",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "QR CODE THING HERE",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Share Your Collection",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Purchase Quality",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "One-Size Fits All",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "COLORS?",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-light">
                Benefits/Quality Here
              </h3>
              <p className="text-muted">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} md={6}>
              <div>
                <div className="mb-5">
                  <i className={service.icon}></i>
                </div>
                <h5 className="text-light font-weight-normal pt-1 mb-4">
                  {service.title}
                </h5>
                <p className="text-muted mb-4">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Service;
