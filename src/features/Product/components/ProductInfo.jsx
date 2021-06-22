import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { formatPrice } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
      paddingBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.grey[100]}`
  },
  description: {
    margin: theme.spacing(2, 0),
  },
  salePrice: {
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h5.fontSize,
    fontWeight: 'bold',
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through',
  },
  promotionPercent: {},
  priceBox: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(2),
  },
}));

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span" className={classes.promotionPercent}>
                {`-${promotionPercent}%`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
