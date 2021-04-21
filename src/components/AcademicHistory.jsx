import React from 'react';
import { Card, Container, ListGroup, Row } from 'react-bootstrap';

export default function AcademicHistory() {
  return (
    <Container fluid className="justify-content-md-center">
      <Row className="justify-content-md-center">
        <Card
          bg=""
          text="dark"
          style={ { width: '90%' } }
          className="mb-2"
        >
          <Card.Body>
            <Card.Title as="h3">Formação e qualificações</Card.Title>
            <Card.Text>Possui uma formação artística, sendo graduado em Cinema e em Dança Contemporânea. Onde começou a trabalhar em festivais e exibições de arte. Também fez treinamento profissional de Bartender, além de cursos livres. Atualmente estuda Desenvolvimento Web Full Stack.</Card.Text>
            <ListGroup>
              <ListGroup.Item>Desenvolvimento Web full stack - Trybe: em progresso - previsão de conclusão: out/2021</ListGroup.Item>
              <ListGroup.Item>Treinamento de Bartender Profissional – SENAC/RJ: concluído em Fev/2018;</ListGroup.Item>
              <ListGroup.Item>Bacharelado em Dança Contemporânea – Faculdade Angel Vianna: concluído em Jul/2008</ListGroup.Item>
              <ListGroup.Item>Tecnólogo em Cinema – Universidade Estácio de Sá: concluído em Abr/2005;</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
