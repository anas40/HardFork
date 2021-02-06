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

function Routes() {

  return (
    <>
      <Router>
        <Route component={Header} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/login' component={Login} />
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