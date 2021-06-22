import { useEffect } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import productsApi from './api/productApi';
import './App.css';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album/index';
import CounterFeature from './features/Counter';
import ProductFeature from './features/Product';
import TodoFeature from './features/Todo/index';

// function useMagicColor() {
//   const [color, setColor] = useState(0);
//   useEffect(() => {
//     const intervalRef = setInterval(() => {
//       const newColor = Math.random();
//       setColor(newColor);
//     }, 2000);
//     return () => {
//       clearInterval(intervalRef);
//     };
//   }, []);
//   return color;
// }

function App() {
  // const color = useMagicColor();
  useEffect(() => {
    const params = {
      _limit: 10,
    };
    const fetchProducts = async () => {
      const productList = await productsApi.getAll(params);
    };

    fetchProducts();
  }, []);
  return (
    <div className="app">
      <p>
        <NavLink to="/todos" activeClassName="active-todos">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <p>
        <NavLink to="/products">:Products</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
