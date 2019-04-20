import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from "../../Context"

export default class Cart extends Component {
 state={
 }
  CartFunc=()=>{

  }
  render() {
     
    return (
      <div>
          <Title   me="Your" u="Cart"/>
           < ProductConsumer>
              {value=>{
                const {cart}=value;
                  if(cart.length>0){
                   return(
                     <>
                       <CartColumns/>

                     </>
                   )} 
                   else return(

                     <>
                       <EmptyCart/>

                     </>
                   )              
              }}
           </ProductConsumer>
           
          
      </div>
    )
  }
}
