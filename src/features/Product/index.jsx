import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
function ProductFeature(props) {
  const params = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={params.url} exact component={ListPage} />
        <Route path={`${params.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
