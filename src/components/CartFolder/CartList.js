import { ProductConsumer } from "../../Context";
import CartItem from "./CartItem";
import React, { Component } from "react";
export default class CartList extends Component {
  render() {
    const { cart } = this.props.value;
    console.log(this.props.value);
    return (
      <>
        <ProductConsumer>
          {value => {
            return cart.map(cart => {
              return <CartItem key={cart.id} cart={cart} value={value} />;
            });
          }}
        </ProductConsumer>
      </>
    );
  }
}
