import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import Empty from "./CartFolder/Empty";
import CartColumns from "./CartFolder/CartColumns";
import CartList from "./CartFolder/CartList";
export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart } = value;

          if (cart.length > 0) {
            return (
              <>
                <CartColumns />
                <CartList value={value} />
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
