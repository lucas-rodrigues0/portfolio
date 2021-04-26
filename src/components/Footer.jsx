import React from 'react';
import { Badge, Button, Card, Figure } from 'react-bootstrap';
import GMailLogo from '../images/GMail_black.png';
import GithubLogo from '../images/GiHub_black.png';
import LinkedinLogo from '../images/LinkedIn_black.png';
import ReactLogo from '../images/React_black.png';
import BootstrapReactLogo from '../images/BootstrapReact_black.png';

export default function Footer() {
  return (
    <footer className="footer-position">
      <Card
        bg={ 'dark' }
        text={ 'dark' === 'light' ? 'dark' : 'white' }
        className="text-center">
        <Card.Body>
            <Card.Title>Aberto a contatos!</Card.Title>
              <Button variant="Secondary">
              <Card.Link href="mailto:lucas.movimento@gmail.com">email_</Card.Link>
                <Figure.Image
                  width={ 20 }
                  height={ 20 }
                  alt="email logo"
                  src={ GMailLogo }
                    />
              </Button>
              <Button variant="Secondary">
                <Card.Link href="https://github.com/lucas-rodrigues0" target="_blank">github_</Card.Link>
                <Figure.Image
                  width={ 20 }
                  height={ 20 }
                  alt="email logo"
                  src={ GithubLogo }
                />
              </Button>
              <Button variant="Secondary">
                <Card.Link href="https://www.linkedin.com/in/lucas-rodrigues-de-castro/" target="_blank">LinkedIn_</Card.Link>
                <Figure.Image
                  width={ 20 }
                  height={ 20 }
                  alt="email logo"
                  src={ LinkedinLogo }
                />
              </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Card.Text as="span">Portifolio criado com React JS</Card.Text>
          <Badge variant="dark">
            <Figure.Image
              width={ 20 }
              height={ 20 }
              alt="email logo"
              src={ ReactLogo }
            />
          </Badge>
          <Card.Text as="span">e React-Bootstrap</Card.Text>
          <Badge variant="dark">
            <Figure.Image
              width={ 20 }
              height={ 20 }
              alt="email logo"
              src={ BootstrapReactLogo }
            />
          </Badge>
          <Card.Text>Rio de Janeiro / Brasil - abr / 2021</Card.Text>
        </Card.Footer>
        </Card>
    </footer>
  );
}
