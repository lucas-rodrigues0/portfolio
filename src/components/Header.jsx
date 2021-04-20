import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <header>
      <h1>Lucas Rodrigues de Castro</h1>
      <h3>- Desenvolvedor Full Stack jr. -</h3>
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
