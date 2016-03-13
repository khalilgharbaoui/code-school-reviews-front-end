import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/App';
import CodeschoolList from './components/CodeschoolList';
import Codeschool from './components/Codeschool';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CodeschoolList} />
      <Route path="/codeschool/:codeschoolId" component={Codeschool}/>
    </Route>
  </Router>

), document.getElementById('root'));
