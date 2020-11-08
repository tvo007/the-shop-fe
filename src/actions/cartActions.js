import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const {data} = await axios.get (`/api/v1/products/${id}`);

  dispatch ({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      name: data.name,
      image: data.product_img,
      price: data.price,
      countInStock: data.number_in_stock,
      qty,
    },
  });

  localStorage.setItem (
    'cartItems',
    JSON.stringify (getState ().cart.cartItems)
  );
};

export const removeFromCart = id => (dispatch, getState) => {
  dispatch ({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem (
    'cartItems',
    JSON.stringify (getState ().cart.cartItems)
  );
};
