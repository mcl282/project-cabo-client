import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, /*IndexRoute,*/ browserHistory } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './App';
import Address from './components/address';
import './index.css';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/address" component={Address} />  
      </div>
    </Router>
  </Provider>  
  ,
  document.getElementById('root')
);





