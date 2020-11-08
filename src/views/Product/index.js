import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getProductDetails} from '../../actions/productActions';
import {makeStyles} from '@material-ui/styles';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Fade,
  Button,
} from '@material-ui/core';
import LoadingSpinner from '../../components/LoadingSpinner';
const useStyles = makeStyles (theme => ({
  card: {},
  img: {
    height: '65vh',
  },
}));

const Product = props => {
  const {id} = useParams ();
  const classes = useStyles ();

  const dispatch = useDispatch ();

  useEffect (
    () => {
      dispatch (getProductDetails (id));
    },
    [dispatch, id]
  );

  const {loading, error, product} = useSelector (state => state.productDetails);

  return loading
    ? <LoadingSpinner />
    : error
        ? <Typography>Error!</Typography>
        : <Grid container direction="row" spacing={2}>

            <Grid item md={8}>
              <Card className={classes.card}>

                <CardHeader title={product.name} />

                {product.product_img
                  ? <Fade in={true}>

                      <CardMedia
                        className={classes.img}
                        image={product.product_img}
                      />
                    </Fade>
                  : <Grid className={classes.img} />}

                <CardContent>

                  <Typography>
                    {product.description}
                  </Typography>

                </CardContent>

              </Card>
            </Grid>
            <Grid item md={4} container direction="column" spacing={2}>
              <Grid item>

                <Card>
                  <CardHeader title="Sizes WIP" />
                  <CardContent>
                    <Typography>
                      8
                    </Typography>
                    <Typography>
                      9
                    </Typography>
                    <Typography>
                      10
                    </Typography>

                  </CardContent>
                </Card>
              </Grid>

              <Grid item>

                <Card>
                  <CardContent>
                    <Grid container direction="column">
                      <Grid>
                        <Typography>
                          Price: {product.sale_price}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography>
                          STATUS: IN STOCK
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography>
                          QTY
                        </Typography>

                      </Grid>
                      <Grid>
                        <Button>
                          <Typography>
                            ADD TO CART
                          </Typography>
                        </Button>

                      </Grid>
                    </Grid>

                  </CardContent>
                </Card>
              </Grid>
            </Grid>

          </Grid>;
};

Product.propTypes = {};

export default Product;
