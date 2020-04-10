import * as React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import Login from './Login';
import FistPage from './FistPage';
import SecondPage from './SecondPage';
import Containers from "../../layout";

const store = configureStore();
const Routers = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/login" exact={true} component={Login} />
          <Route
            render={({ history, location }) => (
              <Containers history={history} location={location}>
                <Switch>
                  <Route path="/" exact={true} component={FistPage} />
                  <Route path="/fistPage" exact={true} component={FistPage} />
                  <Route path="/secondPage" exact={true} component={SecondPage} />
                </Switch>
              </Containers>
            )}
          />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default Routers;
