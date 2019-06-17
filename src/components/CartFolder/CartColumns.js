import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid my-3">
        <div className="row text-center">
          <div className="col-10 mx-auto col-lg-2">
            <span className="">Image</span>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <span className="">Name</span>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <span className="">Price</span>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <span className="">Quantity</span>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <span className="">Remove</span>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <span className="">Total</span>
          </div>
        </div>
      </div>
    );
  }
}
