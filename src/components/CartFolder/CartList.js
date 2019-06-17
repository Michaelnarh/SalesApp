import React, { Component } from "react";
import { ProductConsumer } from "../../Context";
import CartItem from "./CartItem";

export default class CartList extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log(value);
          const { cart } = value;
          cart.map(item => {
            return <CartItem key={item.id} product={item} value={value} />;
          });
        }}
      </ProductConsumer>
    );
  }
}
