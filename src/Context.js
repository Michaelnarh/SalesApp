import React, { Component } from "react";
import { StoreProduct, detailProduct } from "./Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
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
    this.setState(
      () => {
        return { products: TempProduct };
      },
      () => {
        console.log(this.state.product);
      }
    );
  };
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
    console.log("hello from handle details");
  };
  addToCart = id => {
    let tempProduct = [...this.state.products];
    // const index = tempProduct.indexOf(this.getItem(id));
    // const product = tempProduct[index];
    // console.log(tempProduct);
    // product.inCart = true;
    // const price = product.price;
    // product.total = price;
    // product.count = 1;
    // this.setState(() => {
    //   return {
    //     products: [...tempProduct],
    //   };
    // });
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
