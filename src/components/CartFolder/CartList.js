import React, { Component } from "react";
import { ProductConsumer } from "../../Context";
import CartItem from "./CartItem";

export default class CartList extends Component {
  render() {
    console.log(this.props);
    const { cart } = this.props.value;
    return (
      <ProductConsumer>
        {value => {
          return cart.map(item => {
            return <CartItem key={item.id} product={item} value={value} />;
          });
        }}
      </ProductConsumer>
    );
  }
}
