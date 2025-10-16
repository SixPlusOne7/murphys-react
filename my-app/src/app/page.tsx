"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { Navbar, Nav, Container, Row, Col, Image } from "react-bootstrap";
import { Instagram, Facebook, Twitter } from "react-bootstrap-icons";

/** Top bar */
const TopMenu = () => (
  <Navbar expand="lg" className="navbar-murphy py-2" data-bs-theme="dark">
    <Container>
      {/* Left: Logo */}
      <Navbar.Brand href="#" className="me-auto">
        <Image
          src="/murphyslogowhite.png"
          alt="Murphy's"
          width={200}
          className="img-fluid"
        />
      </Navbar.Brand>

      {/* Right: Hamburger + aligned links */}
      <Navbar.Toggle aria-controls="murphys-nav" />
      <Navbar.Collapse id="murphys-nav" className="justify-content-end">
        <Nav className="align-items-center flex-row flex-wrap gap-4">
          <Nav.Link href="#" className="text-white">Home</Nav.Link>
          <Nav.Link href="#" className="text-white">About Us</Nav.Link>
          <Nav.Link href="#" className="text-white">St. Patrick&apos;s Day</Nav.Link>
          <Nav.Link href="#" className="text-white">To Go Ordering</Nav.Link>
          <Nav.Link href="#" aria-label="Instagram" className="text-white"><Instagram /></Nav.Link>
          <Nav.Link href="#" aria-label="Facebook" className="text-white"><Facebook /></Nav.Link>
          <Nav.Link href="#" aria-label="Twitter" className="text-white"><Twitter /></Nav.Link>
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
