import React from 'react';
import PropTypes from 'prop-types';
import {CircularProgress, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  root: {
    marginTop: '40vh',
  },
}));

const LoadingSpinner = props => {
  const classes = useStyles ();
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <CircularProgress />

    </Grid>
  );
};

LoadingSpinner.propTypes = {};

export default LoadingSpinner;
