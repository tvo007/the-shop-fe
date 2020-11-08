import React from 'react';
import PropTypes from 'prop-types';
import {Header, Footer} from '../../layout-components';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  main: {
    minHeight: '90vh',
    // marginLeft: '10vw',
    // marginRight: '10vw',
    // marginTop: '5vh',
  },
}));

const LandingLayout = ({children}) => {
  const classes = useStyles ();

  return (
    <div>
      <Header />
      <main className={classes.main}>

        {children}
      </main>
      <Footer />
    </div>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.node,
};

export default LandingLayout;
