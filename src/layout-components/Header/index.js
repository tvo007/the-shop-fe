import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {useHistory} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles (theme => ({
  appBar: {
    backgroundColor: theme.palette.white,
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
  let history = useHistory ();

  const routeToCart = () => {
    history.push (`/cart`);
  };

  const classes = useStyles ();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Grid container justify="flex-end" spacing={2}>
              <Grid item>
                <Button onClick={routeToCart}>
                  <ShoppingCartIcon />
                </Button>
              </Grid>
              <Grid item>
                <Button>
                  <PersonIcon />
                </Button>
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
