import React from 'react'
import {ProductConsumer} from '../../Context';

export default function CartColumns() {
   
  return (
    <section>
        <div className="container-fluid  text-white">
            <div className="row">
               <div className="col-10 mx-auto text-center col-lg-2 ">
                  <p>Product</p>
               </div>
               <div className = "col-10 mx-auto text-center col-lg-2" >
                  <p>Name of product</p>
               </div>
               <div className = "col-10 mx-auto text-center col-lg-2" >
                  <p>Price</p>
               </div>
               <div className = "col-10 mx-auto text-center col-lg-2" >
                  <p>Quantity</p>
               </div>
               <div className = "col-10 mx-auto text-center col-lg-2 " >
                  <p>Remove</p>
               </div>
               <div className = "col-10 mx-auto text-center col-lg-2" >
                  <p>Total</p>
               </div>
               </div>
        </div>
        <div className=" container-fluid">

         <ProductConsumer>
            {value=>{
              const {
                 id,
                 img,
                 name,
              } =value.cart
               return(
                  <>
            <div className="container-fluid  text-white">
                        <div className="row">
                           <div className="col-10 mx-auto text-center col-lg-2 ">
                              <img src={img} alt="product name"/>
                           </div>
                           <div className = "col-10 mx-auto text-center col-lg-2" >
                              <p>{name}</p>
                           </div>
                           <div className = "col-10 mx-auto text-center col-lg-2" >
                              <p></p>
                           </div>
                           <div className = "col-10 mx-auto text-center col-lg-2" >
                              <p>Quantity</p>
                           </div>
                           <div className = "col-10 mx-auto text-center col-lg-2 " >
                              <p>Remove</p>
                           </div>
                           <div className = "col-10 mx-auto text-center col-lg-2" >
                              <p>Total</p>
                           </div>
                           </div>
             </div>
                  </>

               )
            }}
         </ProductConsumer>
          
        </div>
      
    </section>
  )
}
