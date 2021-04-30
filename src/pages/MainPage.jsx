import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Competency from '../components/Competency';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectsCarousel from '../components/ProjectsCarousel';

function MainPage() {
  return (
    <section>
      <Header />
      <Container fluid>
        <Row>
          <Col sm={ 9 }>
            <Introduction />
          </Col>
          <Col sm={ 3 }>
            <Competency />
          </Col>
        </Row>
      </Container>
      <Container>
        <ProjectsCarousel />
      </Container>
      <Footer />
    </section>
  );
}

export default MainPage;
