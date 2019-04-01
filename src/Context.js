import React,{Component} from 'react'
import {StoreProduct,detailProduct} from "./Data" 

const ProductContext=React.createContext()

class ProductProvider extends Component {
  state={
    product:[],
    detailProduct:detailProduct,
    cart:[],
    openModal:true,
    modalProduct:detailProduct,
  };
  
  componentDidMount(){
    this.setProduct();
};
  setProduct = () =>{
    let tempProduct=[];
    StoreProduct.forEach(item=> {
       const singleItem ={...item}
      tempProduct=[...tempProduct,singleItem]
    });
    this.setState(()=>{
           return{product:tempProduct}
    });
  };
  
  getItem=(id)=>{
    const product=this.state.product.find(item=>item.id===id)
    return product
  }
  handleDetail=(id)=>{
  // console.log('hello from handle details')
  const product=this.getItem(id);
  this.setState(()=>{
    return {detailProduct:product}
  }
  ) 
  }
   addToCart = id => {
    //  console.log(`hello form add to cart ${id}`)
     const tempProduct=[...this.state.product];
     const index=tempProduct.indexOf(this.getItem(id));
     const product=tempProduct[index];
     product.count=1;
     product.inCart=true;
     const price=product.price;
     product.total=price;
     this.setState(()=>{
       return{product:tempProduct,cart:[...this.state.cart,product]}
     },
     ()=>{console.log(this.state)}
     )
   }
   openModal=id=>{
     const product = this.getItem(id);
     this.setState(()=>{
       return{modalProduct:product,openModal:true}
     })
   }
   closeModal=()=>{
     this.setState(()=>{
      return{ openModal:false};
     })
   }
  render(){
    
      return (

      <ProductContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
        openModal:this.openModal,
        closeModal:this.closeModal,


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
   


