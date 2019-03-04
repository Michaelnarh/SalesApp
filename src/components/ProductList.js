import React, { Component } from 'react'
import Product from "./Product"
import Title from "./Product"
export default class ProductList extends Component {
  state={
  }
  render() {
    return (
      <>
      <div className="">
          <div className="py-3 text-center my-4 headme">
                  OUR PRODUCTS
              <Title name="Ricecooker" tile="michael"/>
          </div>
      </div>
      </>
    )
  }
}
