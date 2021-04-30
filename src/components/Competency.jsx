import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import ListGroupItem from './ListGroupItem';
import LinuxLogo from '../images/Linux.png';
import GitLogo from '../images/Git.png';
import GithubLogo from '../images/GiHub.png';
import HTMLlogo from '../images/HTML.png';
import CSSlogo from '../images/CSS.png';
import JSlogo from '../images/JS.png';
import JESTlogo from '../images/JEST.png';
import RTLlogo from '../images/RTL.png';
import ReactLogo from '../images/React.png';
import ReactRouterLogo from '../images/ReactRouter.png';
import ReduxLogo from '../images/Redux.png';


export default function Competency() {
  return (
    <section>
      <Container>
        <h4>- Competências que possuo -</h4>
        <ListGroup variant="flush">
          <ListGroupItem
            card_text="Redux"
            figure_src={ [ReduxLogo] }
          />
          <ListGroupItem
            card_text="React JS e React Router"
            figure_src={ [ReactLogo, ReactRouterLogo] }
          />
          <ListGroupItem
            card_text="JavaScript e JS ES6"
            figure_src={ [JSlogo] }
          />
          <ListGroupItem
            card_text="React Test library"
            figure_src={ [RTLlogo] }
          />
          <ListGroupItem
            card_text="Jest e Testes Unitários"
            figure_src={ [JESTlogo] }
          />
          <ListGroupItem
            card_text="HTML, CSS e DOM"
            figure_src={ [HTMLlogo, CSSlogo] }
          />
          <ListGroupItem
            card_text="Git e GitHub"
            figure_src={ [GitLogo, GithubLogo] }
          />
          <ListGroupItem
            card_text="Unix, Bash e Shell Script"
            figure_src={ [LinuxLogo] }
          />
        </ListGroup>
      </Container>
    </section>
  );
}
