import React, { Component } from 'react'
import Title from './Title'
// import {Data,detailProduct} from '../Data'
import Link from "../../node_modules/react-router-dom"
import {ProductConsumer} from '../Context'

export default class Details extends Component {
  render() {
    return (
      <>
        <Title u="Product" me ="Details"/>
        <ProductConsumer>
          {value=>{
              const{id,img,name,inCart,info,company}=value.detailProduct;
              return(
               <div className="container">
                  <div className="row">
                    <p className=" col-10 col-md-6 text-center mx-auto text-blue my-3">
                     <h2>{name}</h2>
                    </p>
                  </div>

                <div className="row">
                 <div className="col-10 col-md-6 mx-auto my-2 text-blue">
                     <div className="card">
                         <img src={img} className="img-fluid" alt="product"/>
                     </div> 
                     <div className="text-capitalize my-3 text-primary">
                        < label > made by: </label><strong>{company}</strong >
                     </div>   
                 </div>
                </div>
                   
                </div>
              )
          }}
        </ProductConsumer>
      </>
    )
  }
}
