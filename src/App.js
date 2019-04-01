import React, { Component } from 'react';
import {Switch, Route} from "../node_modules/react-router-dom"
// import logo from './logo.svg';
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Default from "./components/Default"
import Cart from "./components/Cart"
import Details from "./components/Details" 
import Model from "./components/Model"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  render() {
     
    return (
      <>
       <Navbar/>
       {/* <ProductList/> */}
       <Switch>
        <Route  exact path="/" component= {ProductList}/>
        <Route path="/details" component= {Details}/>
        <Route path="/cart" component= {Cart}/>
        <Route  component= {Default}/>
       </Switch>
      <Model/>
      </>
    );
  }
}

export default App;
