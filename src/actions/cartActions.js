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
      product_id: data.id,
      name: data.name,
      product_img: data.product_img,
      sale_price: data.sale_price,
      number_in_stock: data.number_in_stock,
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
