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
  state = {
    isLogin: false,
  };
  // componentDidMount() {
  //   // Your web app's Firebase configuration
  //   var firebaseConfig = {
  //     apiKey: "AIzaSyCNZxUxSTahU7fz80mgT9Isk2DjNKbITSA",
  //     authDomain: "orbital-ethos-239204.firebaseapp.com",
  //     databaseURL: "https://orbital-ethos-239204.firebaseio.com",
  //     projectId: "orbital-ethos-239204",
  //     storageBucket: "orbital-ethos-239204.appspot.com",
  //     messagingSenderId: "1025630727120",
  //     appId: "1:1025630727120:web:4d7c50f61a1edb74",
  //   };
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);
  // }
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
