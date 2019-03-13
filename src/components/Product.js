import React, { Component } from 'react'
import styled from "../../node_modules/styled-components"
import {Link} from "../../node_modules/react-router-dom"
import  {ProuductConsumer} from "../Context";
import PropTypes from  "../../node_modules/prop-types"

export default class Product extends Component {
  render() {
   const{id,img ,name,inCart,price,total}=this.props.product
    return (
     <>
    <div className="col-10 col-md-5 col-lg-3 mx-auto my-2">
     <Twrapper >
       <div className="card">
          <div className="img-container py-2 " onClick={console.log('click me')}>
              <Link to="/details">
              <img src={img} className="card-img-top p-5" alt="product"/>

              </Link>
              <button className="btn cart-btn" disabled={inCart? false:true} onClick={console.log('added to cart')}>
                {inCart? (<i className="fa fa-shopping-basket " disabled></i>):(<i className="fa fa-cart-plus" disabled></i>)}
              </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
           <p className="self-align-center">{name}</p> 
           <h4 className="self-align-end font-italic text-dark">
          <span className="mr-1">$</span>
            {price}</h4>
          </div>
      </div>
     </Twrapper>
     </div>
     </>
    )
  }
}
Product.propTypes={
  product:PropTypes.shape({
    id:PropTypes.number,
    name:PropTypes.string,
    img:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool,

  }).isRequired
};
const Twrapper=styled.section`
display:justify;
overflow:hidden;
display:wrap-content;
.card{
  border-color:transparent;
  transition : all 1s linear;
}
.card-footer{
  background: transparent;
  border-top:tranparent;
  transiton: all 1s linear;
}
&:hover{
  .card{
    border:0.4rem solid rgba(0,0,0,0.2);
    box-shadow:1px 1px 3px rgba(0,0,0,0.2);
  }
  .card-footer{
    background:rgba(147,277,247);
  }
}
.img-container:hover .card-img-top {
 transform:scale(1.2);
}
 
.cart-btn {
    postion:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem
    background:var(--mainBlue);
    margin-left:10em;
    margin-bottom:2em; 
    color:var(--mainwhite);
    font-size:1.4rem
    border-radius:0.5rem 0 0 0;
    transform:translate(100%, 100%);
    transition:all 1s linear
   
  } 
  img-container:hover  .cart-btn{
    tranform:translate(0,0);  
  }
  cart-btn:hover{
    cursor:pointer;
    color:var(--lightBlue)

  }
`;
