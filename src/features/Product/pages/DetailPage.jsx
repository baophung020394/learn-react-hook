import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import ProductThumbnail from '../components/ProductThumbnail';

DetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`
  },
  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5)
  },
}));

function DetailPage() {
    const classes = useStyles();

  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
                <ProductThumbnail product={{}} />
            </Grid>
            <Grid item className={classes.right}>Info</Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;