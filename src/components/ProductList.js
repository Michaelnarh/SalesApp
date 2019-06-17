import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../Context";
export default class ProductList extends Component {
  render() {
    return (
      <>
        <Title me="OUR" u="PRODUCTS" />

        <div className="row">
          <div className="text-dark mx-4">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
                // console.log(value);
              }}
            </ProductConsumer>
          </div>
        </div>
      </>
    );
  }
}
