import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid my-3">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <span className="text-center">Image</span>
          </div>
          <div className="col-lg-2">
            <span className="text-center">Name</span>
          </div>
          <div className="col-lg-2">
            <span className="text-center">Price</span>
          </div>
          <div className="col-lg-2">
            <span className="text-center">Quantity</span>
          </div>
          <div className="col-lg-2">
            <span className="text-center">Remove</span>
          </div>
          <div className="col-lg-2">
            <span className="text-center">Total</span>
          </div>
        </div>
      </div>
    );
  }
}
