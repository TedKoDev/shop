import { useState } from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import data from "./data/data.js";

import "./App.css";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">한글 Square</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <Container>
        <Row>
          {shoes.map((shoe, i) => {
            return <Card shoe={shoes[i]} i={i} key={i} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;

function Card(props) {
  return (
    <Col md>
      <img src={props.shoe.image} width="80%" />

      <h4>{props.shoe.title}</h4>
      <p>
        {props.shoe.content} & {props.shoe.price}
      </p>
    </Col>
  );
}
