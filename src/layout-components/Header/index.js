import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
  appBar: {
  },
 
}));

function ElevationScroll (props) {
  const {children} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger ({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement (children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = props => {
  const classes = useStyles ();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Grid container justify="flex-end" spacing={2}>
              <Grid item>
                <Typography variant="h3" color="textSecondary">Bruh</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3" color="textSecondary">
                  Header
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3" color="textSecondary">
                  Header
                </Typography>
              </Grid>

            </Grid>

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

Header.propTypes = {};

export default Header;
