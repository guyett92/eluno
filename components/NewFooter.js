import { Col, Container, Row } from "reactstrap";

const NewFooter = () => {
  return (
    <footer className="new-footer">
      <Container fluid>
        <Row>
          <Col>
            <p>eluno</p>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <a href="order">Order Now</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default NewFooter;
