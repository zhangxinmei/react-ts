import * as React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import FistPage from './FistPage';
import SecondPage from './SecondPage';

const store = configureStore();
const Routers = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={FistPage} />
          <Route path="/fistpage" exact={true} component={FistPage} />
          <Route path="/secondpage" exact={true} component={SecondPage} />
          <Route render={() => <Redirect to="/" push={true} />} exact={true} />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default Routers;
