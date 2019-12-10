import React, { Component } from "react";
import { Switch, Route } from "../node_modules/react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/CartFolder/Cart";
import Welcome from "./Welcome";
import Details from "./components/Details";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <ProductList/> */}
        <Switch>
          <Route path="/login" component={Welcome} />
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        {/* <Model/> */}
        <Footer />
      </>
    );
  }
}

export default App;
