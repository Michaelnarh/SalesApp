import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  state = {};
  CartFunc = () => {};
  render() {
    return (
      <div>
        <Title me="Your" u="Cart" />
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </>
              );
            } else {
              return (
                <>
                  <EmptyCart />
                </>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
