import React from 'react';
import { Badge, Card, Container, Figure, ListGroup, Nav } from 'react-bootstrap';
import Header from '../components/Header';
import LinkedInLogo from '../images/LinkedIn.png';
import GitHubLogo from '../images/GiHub.png';
import WordpressLogo from '../images/Wordpress.png';
import TwitterLogo from '../images/Twitter.png';
import InstagramLogo from '../images/Instagram.png';
import GmailLogo from '../images/GMail.png';

function ContactMe() {
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
              <ListGroup.Item>
                <Card.Text as="span">e-mail: lucas.movimento@gmail.com</Card.Text>
                <Badge variant="light">
                  <Card.Link href="mailto:lucas.movimento@gmail.com">
                    <Figure.Image
                      width={ 20 }
                      height={ 20 }
                      alt="email logo"
                      src={ GmailLogo }
                    />
                  </Card.Link>
                </Badge>
                <Card.Text as="span">/ lucasr.producao@gmail.com</Card.Text>
                <Badge variant="light">
                  <Card.Link href="mailto:lucasr.producao@gmail.com">
                    <Figure.Image
                      width={ 20 }
                      height={ 20 }
                      alt="email logo"
                      src={ GmailLogo }
                    />
                  </Card.Link>
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item><Card.Text>telefone: +55 (21) 97213-9309</Card.Text></ListGroup.Item>
            </ListGroup>
            <Nav justify className="justify-content-center" variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="https://www.linkedin.com/in/lucas-rodrigues-0107a5b3/" target="blank">
                  <Figure.Image
                    width={ 60 }
                    height={ 60 }
                    alt="email logo"
                    src={ LinkedInLogo }
                    />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://github.com/lucas-rodrigues0" target="blank">
                  <Figure.Image
                    width={ 60 }
                    height={ 60 }
                    alt="email logo"
                    src={ GitHubLogo }
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://lucasrodrigues386908999.wordpress.com/" target="blank">
                  <Figure.Image
                    width={ 40 }
                    height={ 40 }
                    alt="email logo"
                    src={ WordpressLogo }
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://twitter.com/lucasrdecastro" target="blank">
                  <Figure.Image
                    width={ 40 }
                    height={ 40 }
                    alt="email logo"
                    src={ TwitterLogo }
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.instagram.com/lucasrodriguesdecastro/" target="blank">
                  <Figure.Image
                    width={ 40 }
                    height={ 40 }
                    alt="email logo"
                    src={ InstagramLogo }
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ContactMe;
