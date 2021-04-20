import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortifolioContext from './portifolio_context';

function PortifolioProvider({ children }) {
  const [globalState, setGlobalState] = useState(['Hi', 'There']);

  return (
    <PortifolioContext.Provider
      value={ {
        globalState,
        setGlobalState,
      } }
    >
      { children }
    </PortifolioContext.Provider>
  );
}

PortifolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PortifolioProvider;
