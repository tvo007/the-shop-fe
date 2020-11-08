import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getProducts} from '../../actions/productActions';
import {makeStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Box,

  // Card,
  // CardContent,
  // CardMedia,
  // Divider,
} from '@material-ui/core';
import Item from '../../components/Item';
import LoadingSpinner from '../../components/LoadingSpinner';

const useStyles = makeStyles (theme => ({
  root: {},
  headerText: {
    paddingBottom: theme.spacing (3),
  },
}));

const Products = props => {
  const classes = useStyles ();

  let history = useHistory ();

  const dispatch = useDispatch ();

  const {loading, error, products} = useSelector (state => state.productList);

  useEffect (
    () => {
      dispatch (getProducts ());
    },
    [dispatch]
  );

  const showProducts = products.map (product => {
    const routeToProduct = () => {
      history.push (`/products/${product.id}`);
    };

    return (
      <Grid item sm={4} key={product.id}>
        <Item
          name={product.name}
          img={product.product_img}
          description={product.description}
          sale_price={product.sale_price}
          rating={product.rating}
          onClick={routeToProduct}
        />
      </Grid>
    );
  });

  return (
    <Grid className={classes.root}>
      <Box className={classes.headerText}>
        <Typography variant="h1">
          Latest Products
        </Typography>
      </Box>

      {loading
        ? <LoadingSpinner />
        : error
            ? <Typography>Error!!</Typography>
            : <Grid container direction="row" spacing={2}>

                {showProducts}
              </Grid>}

    </Grid>
  );
};

Products.propTypes = {};

export default Products;
