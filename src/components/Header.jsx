import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap'
import LogoDev from '../images/LogoDev_full.png';

export default function Header() {
  return (
    <header>
        <Image src={ LogoDev } fluid />
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>páginas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs">
              <Nav.Item>
              <Nav.Link href="/portifolio#/" className="border border-secondary">Inicio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="/portifolio#/contact" className="border border-secondary">Contatos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="/portifolio#/about" className="border border-secondary">Sobre mim</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </header>
  );
}
