import React, { Component } from "react";
import { StoreProduct, detailProduct } from "./Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: StoreProduct,
  };

  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {
    let TempProduct = [];
    StoreProduct.forEach(item => {
      const singleItem = { ...item };
      TempProduct = [...TempProduct, singleItem];
    });
    this.setState(() => {
      return { products: TempProduct };
    });
  };

  // this function gets a single item from the products store
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  // this is to hangle the details of each product
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  // this handles the logic when item is added to the cart
  addToCart = id => {
    let tempProduct = [...this.state.products];

    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    const price = product.price;
    product.total = price;
    product.count = 1;
    this.setState(() => {
      return {
        products: tempProduct,
        cart: [...this.state.cart, product],
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
