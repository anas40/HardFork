import { lazy } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Toast from './Toast.js'
import { login as ll } from './store/atoms'
import { useRecoilValue } from 'recoil'
const Home = lazy(() => import(/* webpackChunkName: "HOME" */ './pages/home'))
const Login = lazy(() => import(/*webpackChunkName: "LOGIN" */ './pages/login'))
const Info = lazy(() => import(/*webpackChunkName: "INFO" */ './pages/info'))
const BuyProduct = lazy(() => import(/*webpackChunkName: "BUYPRODUCT" */ './pages/buyProduct'))
const AddProduct = lazy(() => import(/*webpackChunkName: "ADD" */ './pages/add'))
const ProductInfo = lazy(() => import('./pages/productInfo'))

function Routes() {

  return (
    <>
      <Router>
        <Route component={Header} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/login' component={Login} />
          <PrivateRoute path="/product/:id" >
            <Info />
          </PrivateRoute>
          <PrivateRoute path='/buy' exact >
            <BuyProduct />
          </PrivateRoute>
          <PrivateRoute path='/productinfo/:id' >
            <ProductInfo />
          </PrivateRoute>
          <PrivateRoute path='/add' >
            <AddProduct />
          </PrivateRoute>
        </Switch>
        <Route component={Footer} />
      </Router>
      <Toast />
    </>
  );
}

function PrivateRoute({ children, ...rest }) {
  const login = useRecoilValue(ll)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        login
          ? children
          : <Redirect to={{ pathname: '/login', state: { from: location } }} />

      }
    />
  );
}

export default Routes;