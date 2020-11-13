import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import CardItem from './components/CartItem';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import {addToCart, removeFromCart} from '../../actions/cartActions';

const Cart = ({match, location, history}) => {
  const productId = match.params.id;

  const qty = location.search ? Number (location.search.split ('=')[1]) : 1;
  //grabs qty data from route

  const dispatch = useDispatch ();

  const cart = useSelector (state => state.cart);

  const {cartItems} = cart;

  useEffect (
    () => {
      if (productId) {
        dispatch (addToCart (productId, qty));
      }
    },
    [dispatch, productId, qty]
  );

  const removeFromCartHandler = id => {
    dispatch (removeFromCart (id));
  };

  // const checkoutHandler = () => {
  //   history.push('/login?redirect=shipping')
  // }

  // const cartTotal = cartItems
  //   .map (item => {
  //     return item.sale_price * item.qty;
  //   })
  //   .reduce ((a, b) => {
  //     return a + b;
  //   });

  const getCartTotal = () => {
    let totalsArray = cartItems.map (item => {
      return item.sale_price * item.qty;
    });

    const sum = (acc, val) => {
      return acc + val;
    };

    const cartTotal = totalsArray.reduce (sum, 0);

    return cartTotal;
  };

  const showCartItems = cartItems.map (item => {
    return (
      <Grid item sm={4} key={item.product_id}>
        <CardItem
          name={item.name}
          img={item.product_img}
          description={item.description}
          sale_price={item.sale_price}
          rating={item.rating}
          qty={item.qty}
          onClick={() => removeFromCartHandler (item.product_id)}
        />
      </Grid>
    );
  });

  return (
    <Grid>
      <Grid>
        <Typography>
          Cart
        </Typography>
      </Grid>
      <Grid container>
        {showCartItems}
      </Grid>
      <Grid container>
        <Typography>
          Total Cost:{getCartTotal ()}
        </Typography>
      </Grid>
    </Grid>
  );
};

Cart.propTypes = {};

export default Cart;
