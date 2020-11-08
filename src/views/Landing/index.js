import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Button,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
// import {useSelector, useDispatch} from 'react-redux';
// import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {
  // imageOne,
  // imageTwo,
  // imageThree,
  // imageFour,
  imageFive,
} from '../../constants/imageConstants';

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
    // top: '13vh',
    bottom: '1px',
    paddingLeft: '70%',

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

  let history = useHistory ();

  const routeToProducts = () => {
    history.push (`/products`);
  };

  return (
    <Grid className={classes.landing}>

      <Grid container direction="column">
        <Card className={classes.relativeGrid}>
          <CardMedia className={classes.landingImage} image={imageFive} />
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
                color="textSecondary"
                className={classes.overlayTagline}
              >
                Walking on air...
              </Typography>

            </Grid>

            <Grid>
              <Link onClick={routeToProducts}>
                <Button>
                  <Typography
                    variant="h3"
                    color="textPrimary"
                    className={classes.overlayText}
                  >
                    BUY NOW
                  </Typography>
                </Button>
              </Link>
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
