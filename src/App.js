import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductListing from './components/productListing'
import ProductDetail from './components/productDetail';


class App extends Component {

  render() {

    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing}></Route>
          <Route path="/product/:productId" exact component={ProductDetail}></Route>
          <Route>404 Not found</Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
