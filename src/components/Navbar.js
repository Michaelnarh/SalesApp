import React, { Component } from 'react'
import {Link,} from "../../node_modules/react-router-dom"
import logo from "../logo.svg"
import styled from  "../../node_modules/styled-components"
export default class Navbar extends Component {
  render() {
    return (
        <>
      <div className="navme">
          <nav className="navbar navbar-expand-sm bg-dark px-sm-5">
             <Link to="/" className="navbar-brand"> 
              {/* <img src={logo} alt="something" className=""/>  */}
              <span > <i className="fa fa-phone"></i></span>
             </Link>
             
              <ul className=" navbar-nav align-items-center">
              <li className="navabar-item nav-link">
                  <Link to="/">
                  <span className=" navbar-item text-white text-2">Product</span>
                  </Link>
                </li>
              </ul>
              <li className="navbar-item ml-auto nav-link">
                 <button className="btn btn-outline-light">
                 <Link to="/cart">
                   <span className="mr-2">
                   <i className="fa fa-cart-plus "> my-cart</i>
                   </span> 
                  </Link>
                 </button>
             </li>
          </nav>
      </div>
      </>
    )
  } 
}
const ButtonContainer=styled.nav`
buttom-color:2px blue solid;
background-color:blue;
`;
