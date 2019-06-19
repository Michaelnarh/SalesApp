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
    cartsubTotal: 0,
    cartTax: 0,
    grandTotal: 0,
  };

  componentDidMount() {
    this.setProduct();
    debugger;
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
    product.inCart = true;
    product.count = 1;
    let price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { product: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
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
    const index = tempCart.indexOf(this.getItem(id));
    const selectedItem = tempCart[index];
    let adder = selectedItem.count;
    selectedItem.count = adder + 1;
    selectedItem.total = selectedItem.count * selectedItem.price;
    // console.log("pricce   " + selectedItem.price + "total   " + selectedItem.total);
    console.log("the tempCart is ", tempCart, "the total is ", selectedItem.total);

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let tempArray = [...this.state.cart];
    const index = tempArray.indexOf(this.getItem(id));
    const selected = tempArray[index];
    let subtractor = selected.count;
    if (selected.count <= 0) {
      this.removeItem(id);
    } else {
      selected.count = subtractor - 1;
      selected.total = selected.count * selected.price;
      this.setState(
        () => {
          return {
            cart: [...tempArray],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    const { cart } = this.getItem(id);
    let tempProduct = [...this.state.product];
    let tempCart = [...this.state.cart];
    //remove the item that does not match the id received in the array
    tempCart = tempCart.filter(item => item.id !== id);
    //change the the properties of the item in the product
    const index = tempProduct.indexOf(this.getItem(id));
    const removedItem = tempProduct[index];
    console.log(removedItem, " is the removed item");
    // let { inCart, count, total } = removedItem;
    // inCart = false;
    // count = 0;
    // total = 0;

    removedItem.inCart = false;
    removedItem.count = 0;
    removedItem.total = 0;

    this.setState(
      () => {
        return {
          product: [...tempProduct],
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = id => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProduct();
      }
    );
    console.log("clear");
  };
  addTotals() {
    let subtotals = 0.0;

    this.state.cart.map(item => {
      subtotals += item.total;
      let tax = subtotals * 0.1;
      let total = subtotals + tax;
      // tax = tax.toFixed(2);
      // total = total.toFixed(2);
      // subtotals = subtotals.toFixed(2);
      this.setState(() => {
        return {
          cartsubTotal: subtotals,
          cartTax: tax,
          grandTotal: total,
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
