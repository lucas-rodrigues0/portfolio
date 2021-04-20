import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

export default function Competency() {
  return (
    <section>
      <Container>
        <h4>Competências:</h4>
        <ListGroup variant="flush">
          <ListGroup.Item>Unix, Bash e Shell Script</ListGroup.Item>
          <ListGroup.Item>Git e GitHub</ListGroup.Item>
          <ListGroup.Item>HTML, CSS e DOM</ListGroup.Item>
          <ListGroup.Item>JavaScript e JS ES6</ListGroup.Item>
          <ListGroup.Item>Jest e Testes Unitários</ListGroup.Item>
          <ListGroup.Item>React JS e React Router</ListGroup.Item>
          <ListGroup.Item>React Test library</ListGroup.Item>
          <ListGroup.Item>Redux</ListGroup.Item>
        </ListGroup>
      </Container>
    </section>
  );
}
