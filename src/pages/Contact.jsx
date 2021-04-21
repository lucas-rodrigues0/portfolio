import React from 'react';
import { Card, Container, ListGroup, Nav } from 'react-bootstrap';
import Header from '../components/Header';

function ContactMe() {
  const email = 'e-mail > lucas.movimento@gmail.com / lucasr.producao@gmail.com';
  const tel = 'telefone > +55 21 97213-9309';
  return (
    <div>
      <Header />
      <Container className="justify-content-md-center">
        <Card
          className="text-center"
          style={ { width: '100%' } }
        >
          <Card.Header>
            <Card.Title>Meus Contatos!</Card.Title>
            <Card.Text>Sempre aberto a troca de informações, coversas e feedback. Só mandar uma mensagem. Abraços!</Card.Text>
          </Card.Header>
          <Card.Body>
            <Card.Title>Fale Comigo!</Card.Title>
            <ListGroup>
              <ListGroup.Item>{ email }</ListGroup.Item>
              <ListGroup.Item>{ tel }</ListGroup.Item>
            </ListGroup>
            <Nav justify className="justify-content-center" variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="https://www.linkedin.com/in/lucas-rodrigues-0107a5b3/" target="blank">LinkedIn</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://github.com/lucas-rodrigues0" target="blank">Github</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://lucasrodrigues386908999.wordpress.com/" target="blank">Wordpress</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://twitter.com/lucasrdecastro" target="blank">Twitter</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.instagram.com/lucasrodriguesdecastro/" target="blank">Instagram</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ContactMe;
