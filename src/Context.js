import React,{Component} from 'react'
import {StoreProduct,detailProduct} from "./Data" 

const ProductContext=React.createContext()

class ProductProvider extends Component {
  state={
    product:[],
    detailProduct:detailProduct,
  }
  
  componentDidMount(){
    this.setProduct();
}
  setProduct=()=>{
    let TempProduct=[];
    StoreProduct.forEach(item=> {
      const singleItem=[...item]
      TempProduct=[...TempProduct,singleItem]
    });
    this.setState(()=>{
           return{product:TempProduct}
    });
  };
  
  // handleDetail=()=>{
  // console.log('hello from handle details')
  // }
  //  addToCart = () => {
  //    console.log('hello form add to cart')
  //  }
  render(){
    
      return (

      <ProductContext.Provider value={{
        // ...this.state,
        // handleDetail:this.handleDetail,
        // addToCart:this.addToCart

      }}>
        {this.props.children}
      </ProductContext.Provider>
      
      )
      
  }

}
const ProductConsumer=ProductContext.Consumer;
   export {
     ProductConsumer,
     ProductProvider
   };
   


