import React from 'react';
import { Navbar, Nav, Card } from 'react-bootstrap'

export default function Header() {
  return (
    <header>
      <Card
        bg="light"
        border="info"
        className="text-center"
        text="dark"
      >
        <Card.Header as="h1">Lucas Rodrigues de Castro</Card.Header>
        <Card.Body>
          <Card.Title>- Desenvolvedor Full Stack jr. -</Card.Title>
        </Card.Body>
      </Card>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>páginas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link href="/">Inicio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contatos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">Sobre mim</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </header>
  );
}
