import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './pages/About';
import ContactMe from './pages/Contact';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/portifolio" component={ MainPage } />
        <Route path="/portifolio/about" component={ AboutMe } />
        <Route path="/portifolio/contact" component={ ContactMe } />
      </Switch>
    </main>
  );
}

export default App;
