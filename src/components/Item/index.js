import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  // Divider,
} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
  img: {
    height: '50vh',
  },
}));

const Item = ({id, name, img, description, sale_price, onClick, children}) => {
  const classes = useStyles ();
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onClick}>

        <CardHeader title={name} />

        <CardMedia className={classes.img} image={img} />

        <CardContent>
          <Typography>
            {sale_price}
          </Typography>
        </CardContent>
      </CardActionArea>
      {children}
    </Card>
  );
};

Item.propTypes = {};

export default Item;
