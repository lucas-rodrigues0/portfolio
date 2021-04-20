import React from 'react';
import PortifolioContext from '../contexts/portifolio_context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Competency from '../components/Competency';

function MainPage() {
  // const { globalState } = useContext(PortifolioContext);
  return (
    <PortifolioContext.Consumer>
      {(value) => (
        <div>
          <Header />
          <Introduction />
          <Competency />
          <Footer />
        </div>
      )}
    </PortifolioContext.Consumer>

  );
}

export default MainPage;
