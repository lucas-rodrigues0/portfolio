import React from 'react';
import { Badge, Card, Carousel, Container, Row } from 'react-bootstrap';
import Projetos from '../Projetos';
import '../App.css';

export default function ProjectsCarousel() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
      <h1>- Projetos realizados -</h1>
        <Carousel>
          { Projetos.map((proj) => (
            <Carousel.Item interval={ 5000 }>
              <Card style={ { width: '900px' } }>
                <Card.Header as="h2">{ proj.title }</Card.Header>
                <Card.Body>
                  <Card.Title>{ proj.subtitle }</Card.Title>
                  <Card.Text>{ `Data de conclusão: ${ proj.date}` }</Card.Text>
                </Card.Body>
              </Card>
              <iframe
                name={ proj.iframe.name }
                title={ proj.iframe.name }
                src={ proj.iframe.source }
                width="900" height="450"
              />
              <Carousel.Caption>
                <Row className="justify-content-center custom-bg">
                  <Badge variant="light">
                    <a href={ proj.iframe.source } target="blank">link para o projeto</a>
                  </Badge>
                  <span>_</span>
                  <Badge variant="light">
                    <a href={ proj.codeLink } target="blank">source code</a>
                  </Badge>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}
