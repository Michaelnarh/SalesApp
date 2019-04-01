import React, { Component } from 'react'
import Title from './Title'
import {ButtonContainer} from "./Styles"
import {Link} from "../../node_modules/react-router-dom"
import {ProductConsumer} from '../Context';
export default class Details extends Component {
  render() {
    return (
      <>
        <Title u="Product" me ="Details"/>
        <ProductConsumer>
          {value=>{
              const{id,img,name,inCart,info,company,price}=value.detailProduct;
              return(
               <div className="container">
                  <div className="row">
                    <span className=" col-10 col-md-6 text-center mx-auto text-blue my-3">
                     <h2>{name}</h2>
                    </span>
                  </div>

                <div className="row">
                 <div className=" col-md-6 mx-auto my-2">
                     <div className="card">
                         <img src={img} className="img-fluid" alt="product"/>
                     </div> 
                     <div className= "card-footer">
                       <div className = " Textformat mx-auto " >
                            < label >Made By : </label><strong className="ml-4">{company}</strong >
                        </div>
                        <div className = " text-mutted mx-auto  Textformat my-3" >
                            < label>Infomation: <br/> </label><strong className="ml-4">{info}</strong>
                        </div>
                        <div className=" mx-auto Textforamt my-3">
                            < label > Price: </label><strong className="ml-4">${price}</strong >
                        </div>
                        {/* the butto to the various links */}
                        <div className="d-flex mx-auto">
                            <div>
                            <Link to="/">
                                  <ButtonContainer>
                                    Back to Product
                                  </ButtonContainer>
                              </Link>
                          </div> 
                            <div>
                              <ButtonContainer className="ml-2"
                              cart
                               disabled={ inCart? true:false}
                              onClick={()=>{value.addToCart(id);
                                            value.openModal(id);
                              }}
                              >
                              {inCart?"in Cart":"add to Cart"}
                              </ButtonContainer>
                            </div>
                        </div>
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
