import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Button,
  CardActions,
  // Divider,
} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
  img: {
    height: '50vh',
  },
}));

const CartItem = ({id, name, img, qty, description, sale_price, onClick}) => {
  const classes = useStyles ();
  return (
    <Card className={classes.card}>

      <CardHeader title={name} />

      <CardMedia className={classes.img} image={img} />

      <CardContent>
        <Typography>
          {sale_price}
        </Typography>
        <Typography>
          {qty}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClick}>
          Clear Order
        </Button>
      </CardActions>
    </Card>
  );
};

CartItem.propTypes = {};

export default CartItem;
