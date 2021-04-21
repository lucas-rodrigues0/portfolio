import React from 'react';
import PortifolioContext from '../contexts/portifolio_context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Competency from '../components/Competency';
import { Col, Container, Row } from 'react-bootstrap';

function MainPage() {
  // const { globalState } = useContext(PortifolioContext);
  return (
    <PortifolioContext.Consumer>
      {(value) => (
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
          <Footer />
        </section>
      )}
    </PortifolioContext.Consumer>

  );
}

export default MainPage;
