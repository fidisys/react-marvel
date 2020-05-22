import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';
import Layout from '../../containers/Layout';
import NotFound from '../../containers/NotFound';
import ScrollToTop from '../../components/ScrollToTop';

const hasKey = () => {
  const key = 'apikey';
  return Boolean(key);
};

const ProtectedRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (hasKey() ? <Component {...props} /> : <Redirect to="/notFound" />)}
  />
);

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <ProtectedRoutes exact path="/" component={Layout} />
        <Route path="/notFound" component={NotFound} />
        <Route path="/" component={Layout} />
      </Switch>
    </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
