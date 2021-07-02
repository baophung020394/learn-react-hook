import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import productsApi from './api/productApi';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album/index';
import CartFeature from './features/Cart/index';
import CounterFeature from './features/Counter';
import ProductFeature from './features/Product';
import TodoFeature from './features/Todo/index';
import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
function App() {
  useEffect(() => {
    const params = {
      _limit: 10,
    };
    const fetchProducts = async () => {
      const productList = await productsApi.getAll(params);
    };

    fetchProducts();
  }, []);
  const { enqueueSnackbar } = useSnackbar();
  const showNoti = () => {
    enqueueSnackbar('Register Successful', { variant: 'warning' });
  };
  return (
    <div className="app">
      <Header />
      <Button onClick={showNoti}>Show Noti</Button>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
