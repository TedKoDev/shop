import { useState } from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import data from "./data/data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import ItemCard from "./components/item_card.js";
import Detail from "./routes/detail.js";

import "./App.css";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            한글 Square
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
            <Nav.Link onClick={() => navigate("/events")}>Events</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map((shoe, i) => {
                    return <ItemCard shoe={shoe} key={i} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<div>회사</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>
        <Route path="/events" element={<EventPages />}>
          <Route path="one" element={<div>구독자 이벤트11</div>} />
          <Route path="two" element={<div>빠다코코낫 이벤트 22</div>} />
        </Route>
        <Route path="*" element={<div>잘못된 페이지입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;

function EventPages() {
  return (
    <div>
      <h2>이벤트</h2>
      <Outlet />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>소개</h2>
      <Outlet />
    </div>
  );
}
