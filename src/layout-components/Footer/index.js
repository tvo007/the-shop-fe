import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {
  Grid,
  Typography,
  // Card,
  // CardContent,
  // CardMedia,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
  footer: {
    backgroundColor: theme.palette.blueGrey.main,
  },

  footerTopRow: {
    marginLeft: '5vw',
    maxHeight: '40vh',
  },

  footerBottomRow: {
    marginTop: '5vh',
    marginBottom: '5vh',
  },

  footerItem: {
    // backgroundColor: theme.palette.success.main,
    maxWidth: '18vw',
    marginTop: '10vh',
  },

  spacing: {
    maxWidth: '12vw',
    marginTop: '10vh',
  },
}));

const Footer = props => {
  const classes = useStyles ();
  return (
    <Grid className={classes.footer} container direction="column">

      <Grid>

        <Grid container direction="row" justify="space-evenly">
          <Grid
            container
            direction="row"
            justify="space-evenly"
            className={classes.footerTopRow}
          >

            <Grid
              container
              direction="column"
              className={classes.footerItem}
              spacing={1}
            >
              <Grid item>
                <Typography variant="h4" color="textSecondary">
                  HELP
                </Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  FAQ
                </Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  Contact Us
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  Return Policy
                </Typography>
              </Grid>

            </Grid>

            <Grid
              container
              direction="column"
              className={classes.footerItem}
              spacing={1}
            >
              <Grid item>
                <Typography variant="h4" color="textSecondary">
                  ABOUT
                </Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  Our Story
                </Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  Our Mission
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  How it's made
                </Typography>
              </Grid>

            </Grid>

            <Grid container direction="column" className={classes.spacing} />

            <Grid
              container
              direction="column"
              className={classes.footerItem}
              spacing={1}
            >
              <Grid item>
                <Typography variant="h4" color="textSecondary">
                  CONNECT WITH US
                </Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  FAQ
                </Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  Contact Us
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  Return Policy
                </Typography>
              </Grid>

            </Grid>

            <Grid
              container
              direction="column"
              className={classes.footerItem}
              spacing={1}
            >
              <Grid item>
                <Typography variant="h4" color="textSecondary">
                  PAYMENT METHODS
                </Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  FAQ
                </Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  Contact Us
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="h5" color="textSecondary">
                  Return Policy
                </Typography>
              </Grid>

            </Grid>

          </Grid>

        </Grid>

      </Grid>
      <Divider variant="middle" />
      <Grid
        container
        direction="row"
        justify="space-around"
        className={classes.footerBottomRow}
      >
        <Grid>
          <Typography variant="h1" color="textSecondary">
            LOGO GOES HERE
          </Typography>
        </Grid>
        <Grid>
          <Grid container direction="row">

            <Typography
              variant="h5"
              color="textSecondary"
              style={{marginRight: 16, marginTop: '10px'}}
            >
              FYB INC.
            </Typography>

            <Typography
              variant="h5"
              color="textSecondary"
              style={{marginRight: 16, marginTop: '10px'}}
            >
              PRIVACY POLICY
            </Typography>

          </Grid>

        </Grid>

      </Grid>

    </Grid>
  );
};

Footer.propTypes = {};

export default Footer;
