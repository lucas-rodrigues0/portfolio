import React from 'react';
import { Badge, Card, Carousel, Container, Row } from 'react-bootstrap';

export default function ProjectsCarousel() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Carousel>
          <Carousel.Item interval={ 5000 }>
            <Card style={ { width: '900px' } }>
              <Card.Header as="h2">Trivia Game</Card.Header>
              <Card.Body>
                <Card.Title>Projeto em grupo feito em React JS e Redux durante o curso Trybe.</Card.Title>
                <Card.Text>Data de conclusão: 05/mar/2021</Card.Text>
              </Card.Body>
            </Card>
            <iframe
              name="Trivia_Game_project"
              title="Trivia_Game_project"
              src="https://lucas-rodrigues0.github.io/Trivia_Game_project/"
              width="900" height="450"
            />
            <Carousel.Caption>
              <Row className="justify-content-center">
                <Badge variant="light">
                  <a href="https://lucas-rodrigues0.github.io/Trivia_Game_project/" target="blank">link para o projeto</a>
                </Badge>
                <span>_</span>
                <Badge variant="light">
                  <a href="https://github.com/lucas-rodrigues0/Trivia_Game_project/tree/master" target="blank">source code</a>
                </Badge>
                </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={ 5000 }>
            <Card style={ { width: '900px' } }>
              <Card.Header as="h2">Trybe Wallet</Card.Header>
              <Card.Body>
                <Card.Title>Projeto individual feito em React JS e Redux durante o curso Trybe.</Card.Title>
                <Card.Text>Data de conclusão: 02/mar/2021</Card.Text>
              </Card.Body>
            </Card>
            <iframe
              name="Trybe_Wallet_project"
              title="Trybe_Wallet_project"
              src="https://lucas-rodrigues0.github.io/Trybe_Wallet_project/"
              width="900" height="450"
            />
            <Carousel.Caption>
              <Row className="justify-content-center">
                <Badge variant="light">
                  <a href="https://lucas-rodrigues0.github.io/Trybe_Wallet_project/" target="blank">link para o projeto</a>
                </Badge>
                <span>_</span>
                <Badge variant="light">
                  <a href="https://github.com/lucas-rodrigues0/Trybe_Wallet_project/tree/main" target="blank">source code</a>
                </Badge>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={ 5000 }>
            <Card style={ { width: '900px' } }>
              <Card.Header as="h2">Frontend Store</Card.Header>
              <Card.Body>
                <Card.Title>Projeto em grupo feito em React JS e React-router durante o curso Trybe.</Card.Title>
                <Card.Text>Data de conclusão: 03/fev/2021</Card.Text>
              </Card.Body>
            </Card>
            <iframe
              name="Frontend_Store"
              title="Frontend_Store"
              src="https://lucas-rodrigues0.github.io/Frontend_Store_project/"
              width="900" height="450"
            />
            <Carousel.Caption>
              <Row className="justify-content-center">
                <Badge variant="light">
                  <a href="https://lucas-rodrigues0.github.io/Frontend_Store_project/" target="blank">link para o projeto</a>
                </Badge>
                <span>_</span>
                <Badge variant="light">
                  <a href="https://github.com/lucas-rodrigues0/Frontend_Store_project/tree/master" target="blank">source code</a>
                </Badge>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={ 5000 }>
            <Card style={ { width: '900px' } }>
              <Card.Header as="h2">Movie Card Library</Card.Header>
              <Card.Body>
                <Card.Title>Projeto individual feito em React JS e React-router durante o curso Trybe.</Card.Title>
                <Card.Text>Data de conclusão: 26/jan/2021</Card.Text>
              </Card.Body>
            </Card>
            <iframe
              name="Movie_Card_Library_project"
              title="Movie_Card_Library_project"
              src="https://lucas-rodrigues0.github.io/Movie_Card_Library_project/"
              width="900" height="450"
            />
            <Carousel.Caption>
              <Row className="justify-content-center">
                <Badge variant="light">
                  <a href="https://lucas-rodrigues0.github.io/Movie_Card_Library_project/" target="blank">link para o projeto</a>
                </Badge>
                <span>_</span>
                <Badge variant="light">
                  <a href="https://github.com/lucas-rodrigues0/Movie_Card_Library_project/tree/master" target="blank">source code</a>
                </Badge>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={ 5000 }>
            <Card style={ { width: '900px' } }>
              <Card.Header as="h2">projeto - Shopping Cart</Card.Header>
              <Card.Body>
                <Card.Title>Projeto individual feito em JavaScript e Web Storage durante o curso Trybe.</Card.Title>
                <Card.Text>Data de conclusão: 11/dez/2020</Card.Text>
              </Card.Body>
            </Card>
            <iframe
              name="Cart_project"
              title="Cart_project"
              src="https://lucas-rodrigues0.github.io/Cart_project/"
              width="900" height="450"
            />
            <Carousel.Caption>
              <Row className="justify-content-center">
                <Badge variant="light">
                  <a href="https://lucas-rodrigues0.github.io/Cart_project/" target="blank">link para o projeto</a>
                </Badge>
                <span>_</span>
                <Badge variant="light">
                  <a href="https://github.com/lucas-rodrigues0/Cart_project" target="blank">source code</a>
                </Badge>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
