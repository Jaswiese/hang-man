import React from 'react';
// importing bootstrap components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Header component used to display the website title
function Header() {
  return (
    <Container fluid className="pb-5">
      <Row>
        <Col className="col-md-12">
          <h1 className="text-center website-title">Hangman</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
