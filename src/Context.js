import React, { Component } from "react";
import { StoreProduct, detailProduct } from "./Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    product: [],
    detailProduct: detailProduct,
    cart: [],
    openModal: true,
    modalProduct: detailProduct,
    cartsubTotal: 0.0,
    cartTax: 0.0,
    grandTotal: 0.0,
  };

  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {
    let tempProduct = [];
    StoreProduct.forEach(item => {
      const singleItem = { ...item };
      tempProduct = [...tempProduct, singleItem];
    });
    this.setState(() => {
      return { product: tempProduct };
    });
  };

  getItem = id => {
    const product = this.state.product.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    // console.log('hello from handle details')
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = id => {
    //  console.log(`hello form add to cart ${id}`)
    const tempProduct = [...this.state.product];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.count = 1;
    product.inCart = true;
    let price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { product: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
        console.log(this.state);
      }
    );
  };
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, openModal: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { openModal: false };
    });
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    // const index = tempCart.indexOf(this.getItem(id));
    // const selectedItem = tempCart[index];
    tempCart.count = tempCart.count + 1;
    console.log(tempCart.count);
    tempCart.price = tempCart.count * tempCart.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addToCart();
      }
    );

    // console.log(cart.count);
  };
  decrement = id => {
    const cart = this.getItem(id);

    this.setState(() => {
      if (cart.count > 1) {
        return (cart.count = --cart.count);
      }
    });
  };

  removeItem = id => {
    //   const { cart } = this.getItem(id);
    //   let tempProduct = [...this.state.product];
    //   let tempCart = [...this.state.cart];
    //   tempCart = tempCart.filter(item => item.id !== id);
    //   const index = tempProduct.indexOf(this.getItem(id));
    //   let removedItem = tempProduct[index];
    //   removedItem.inCart = false;
    //   // removedItem.count = 0;
    //   // removedItem.total = 0;
    //   this.setState(() => {
    //     return {
    //       product: [...tempProduct],
    //       cart: [...tempCart],
    //     };
    //   }, this.addToCart());

    //   // cart.hide();
    //   console.log("remove");
    // };
    // clearCart = id => {
    //   this.setState(
    //     () => {
    //       return { cart: [] };
    //     },
    //     () => {
    //       this.setProduct();
    //     }
    //   );
    console.log("clear");
  };
  addTotals() {
    let subtotals = 0;
    var total = 0;
    let tax = 0;
    this.state.cart.map(item => {
      subtotals += item.total;
      // sub = parseFloat(subtotals).toFixed(2)
      tax = subtotals * 0.3;
      total = subtotals + tax;
      console.log("subtotals is :" + subtotals);
      console.log("tax is :" + tax);
      console.log("grandTotal is :" + total);
      this.setState(() => {
        return {
          cartsubTotal: parseFloat(subtotals).toFixed(2),
          cartTax: parseFloat(tax).toFixed(2),
          grandTotal: parseFloat(total).toFixed(2),
        };
      });
    });
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
