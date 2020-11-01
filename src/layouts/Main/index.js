import React from 'react';
import PropTypes from 'prop-types';
import {Header, Footer} from '../../layout-components';

const Main = ({children}) => {
  return (
    <div>
      <Header />
      <main>

        {children}
      </main>
      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
