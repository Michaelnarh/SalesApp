import React from "react";

export default function CartColumns() {
  return (
    <section>
      <div className="container-fluid mb-5 ">
        <div className="row text-uppercase">
          <div className="col-md-2 mx-auto text-center col-lg-2 ">
            <p>Product</p>
          </div>
          <div className="col-md-2 mx-auto text-center col-lg-2">
            <p>Name of product</p>
          </div>
          <div className="col-md-2 mx-auto text-center col-lg-2">
            <p>Price</p>
          </div>
          <div className="col-md-2 mx-auto text-center col-lg-2">
            <p className="justify-content-center">Quantity</p>
          </div>
          <div className="col-md-2 mx-auto text-center col-lg-2 ">
            <p>Remove</p>
          </div>
          <div className="col-md-2 mx-auto text-center col-lg-2">
            <p>Total</p>
          </div>
        </div>
      </div>
    </section>
  );
}
