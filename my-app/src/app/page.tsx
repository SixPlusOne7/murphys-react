"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { Navbar, Nav, Container, Row, Col, Image } from "react-bootstrap";
import { Instagram, Facebook, Twitter } from "react-bootstrap-icons";

/** Top bar */
const TopMenu = () => (
  <Navbar expand="lg" className="navbar-murphy py-2">
    <Container className="justify-content-between">
      <Navbar.Brand href="#">
        <Image src="/murphyslogowhite.png" alt="Murphy's" height={48} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="murphys-nav" />
      <Navbar.Collapse id="murphys-nav" className="justify-content-end flex-wrap">
        <Nav className="align-items-center flex-row gap-3">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
          <Nav.Link href="#">St. Patrick&apos;s Day</Nav.Link>
          <Nav.Link href="#">To Go Ordering</Nav.Link>
          <Nav.Link href="#" className="text-white hover-link">Home</Nav.Link>
          <Nav.Link href="#" aria-label="Instagram"><Instagram /></Nav.Link>
          <Nav.Link href="#" aria-label="Facebook"><Facebook /></Nav.Link>
          <Nav.Link href="#" aria-label="Twitter"><Twitter /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

/** Center hero section */
const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={9} xl={8}>
            <h1>Now accepting reservations for St Patrick&apos;s Day</h1>
            <h1>Please call 808-531-0422 for reservations</h1>
            <h1>St Patrick&apos;s Day To-Go Orders can be ordered on our website menu.</h1>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

/** Footer */
const Footer = () => (
  <footer className="footer-murphy py-4 mt-auto">
    <Container>
      <Row>
        <Col>
          <h6>Lunch</h6>
          <hr />
          Monday - Friday: 11:00am - 2:30pm<br />
          Saturday - Sunday: Not open
        </Col>
        <Col>
          <h6>Bar</h6>
          <hr />
          Monday - Friday: From 11:00am to closing<br />
          Saturday - Sunday: Not open
        </Col>
        <Col>
          <h6>Dinner</h6>
          <hr />
          Monday - Friday: 5:00pm - 9:00pm<br />
          Saturday - Sunday: Not open
        </Col>
      </Row>
    </Container>
  </footer>
);

export default function Home() {
  return (
    <main>
      <TopMenu />
      <HeroSection />
      <Footer />
    </main>
  );
}
