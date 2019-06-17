import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import Empty from "./CartFolder/Empty";
import CartColumns from "./CartFolder/CartColumns";
export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart } = value;
          console.log(value.cart);

          if (cart.length > 0) {
            return (
              <>
                <CartColumns />
                <h2>hello am here</h2>
              </>
            );
          } else {
            return (
              <>
                <Empty />
              </>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
