import React, { Component } from "react";
import Paypal from "./PaypalButton";
export default class CartItem extends Component {
  render() {
    const { id, count, img, price, total, name } = this.props.cart;
    const { increment, decrement, removeItem } = this.props.value;
    console.log(this.props.value);
    return (
      <div>
        <div className="container-fluid  ">
          <div className="row">
            <div className="col-md-2 mx-auto text-center col-lg-2 ">
              <img src={img} alt="phone" className="img-fluid my-1" width="50rem" height="50srem" />
            </div>
            <div className="col-md-2 mx-auto text-center col-lg-2">
              <p className="">{name}</p>
            </div>
            <div className="col-md-2 mx-auto text-center col-lg-2">
              <p>
                ${"   "}
                {price}
              </p>
            </div>
            <div className="col-md-2 mx-auto text-center col-lg-2">
              <ul className="d-flex justify-content-center">
                <button className=" box btn btn-black" onClick={() => decrement(id)}>
                  -
                </button>
                <span className="mx-3">{count}</span>
                <span className=" box btn btn-black" onClick={() => increment(id)}>
                  +
                </span>
              </ul>
            </div>
            <div className="col-md-2 mx-auto text-center col-lg-2 ">
              <button onClick={() => removeItem(id)} className="btn">
                <i className=" fa fa-trash " title="remove item from cart" />
              </button>
            </div>
            <div className="col-md-2 mx-auto text-center col-lg-2">
              <p>
                ${"  "}
                {total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
