import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, /*IndexRoute,*/ browserHistory } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';

import App from './App';
import AddressContainer from './components/containers/address_container';
import PropertyList from './components/property_list';
import TestComponent from './components/test';
import './index.css';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/address" component={AddressContainer} />
        <Route path="/property-list" component={PropertyList} />
        <Route path="/test" component={TestComponent} />
      </div>
    </Router>
  </Provider>  
  ,
  document.getElementById('root')
);





