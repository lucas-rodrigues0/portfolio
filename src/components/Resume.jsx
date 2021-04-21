import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

export default function Resume() {
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
            <Card.Title as="h3">Sobre Mim</Card.Title>
            <Card.Subtitle as="h4" className="mb-2 text-muted">- Resumo -</Card.Subtitle>
            <Card.Text>Atualmente Lucas Rodrigues estuda Desenvolvimento Web Full-Stack pela Trybe para fazer a transição de carreira para a Técnologia. Também atua como produtor autônomo de eventos. Tem experiência profissional em produções de festivais, assim como também em produções artísticas dentro do audiovisual, artes cênicas e também arte plástica, além de produções de eventos corporativos. Também já atuou como bartender e produtor de festas, além de ter experiência de trabalho em navio de cruzeiro como assistente de bartender.</Card.Text>
            <Container>
              <Row>
                <Col>
                  <Card.Subtitle as="h5" className="text-muted text-center">- Habilidades Comportamentais -</Card.Subtitle>
                  <ListGroup>
                    <ListGroup.Item>Aprende rápido</ListGroup.Item>
                    <ListGroup.Item>Calmo</ListGroup.Item>
                    <ListGroup.Item>Responsável</ListGroup.Item>
                    <ListGroup.Item>Resiliente</ListGroup.Item>
                    <ListGroup.Item>Observador</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <Card.Subtitle as="h5" className="text-muted text-center">- Interesses -</Card.Subtitle>
                  <ListGroup>
                    <ListGroup.Item>Técnologia e em seu funcionamento</ListGroup.Item>
                    <ListGroup.Item>Interesse também na área de Segurança Cibernética, Direitos Humanos e Meio Ambiente</ListGroup.Item>
                    <ListGroup.Item>Interesse em plantas e na botânica</ListGroup.Item>
                    <ListGroup.Item>Em contribuir para um Mundo melhor!</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <Card.Subtitle as="h5" className="text-muted text-center">- Idiomas -</Card.Subtitle>
                  <ListGroup>
                    <ListGroup.Item>Português - Nativo</ListGroup.Item>
                    <ListGroup.Item>Inglês - avançado</ListGroup.Item>
                    <ListGroup.Item>Francês - básico</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
