import React from 'react';
import { Card } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer-position">
      <Card
        bg={ 'dark' }
        text={ 'dark' === 'light' ? 'dark' : 'white' }
        className="text-center">
        <Card.Body>
          <Card.Title>Aberto a contatos!</Card.Title>
          <Card.Text>email | github | linkendin</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Card.Text>Portifolio criado com React JS e bootstrap! </Card.Text>
          <Card.Text>Rio de Janeiro / Brasil - abr / 2021</Card.Text>
        </Card.Footer>
        </Card>
    </footer>
  );
}
