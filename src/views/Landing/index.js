import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  landing: {
    maxWidth: '100vw',
    overflow: 'hidden',
  },
  card: {
    backgroundColor: theme.palette.blueGrey.main,
  },

  landingImage: {
    // background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    // backgroundSize: 'cover',
    height: '95vh',
  },
  overlay: {
    position: 'absolute',
    top: '13vh',

    height: '100vh',
  },
  relativeGrid: {
    position: 'relative',
  },
  overlayTagline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    height: '100px',
    opacity: '90%',
  },
  overlayText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    width: '300px',
    height: '100px',
    opacity: '75%',
  },
}));

const Landing = props => {
  const classes = useStyles ();

  return (
    <Grid className={classes.landing}>

      <Grid container direction="column">
        <Card className={classes.relativeGrid}>
          <CardMedia
            className={classes.landingImage}
            image="https://res.cloudinary.com/ddj5orpun/image/upload/v1604023269/the-shop/alf-williamsen-e_IP-9e7-Rs-unsplash_3_hmroq4_ilimpg_bgvgw0.jpg"
          />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.overlay}
          >
            <Grid>
              <Typography
                variant="h1"
                color="textPrimary"
                className={classes.overlayTagline}
              >
                WINTER IS COMING
              </Typography>

            </Grid>

            <Grid>
              <Typography
                variant="h3"
                color="textPrimary"
                className={classes.overlayText}
              >
                SHOP MEN'S
              </Typography>
            </Grid>
            <Divider />
            <Grid>
              <Typography
                variant="h3"
                color="textPrimary"
                className={classes.overlayText}
              >
                SHOP WOMEN'S
              </Typography>
            </Grid>

          </Grid>

        </Card>

      </Grid>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={3}
      >

        <Grid item />
        <Grid item>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h1" color="textSecondary">
                Bruh
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h1" color="textSecondary">
                Bruh
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item />

      </Grid>
    </Grid>
  );
};

Landing.propTypes = {};

export default Landing;
