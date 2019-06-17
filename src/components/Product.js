import React, { Component } from "react";
import { Link } from "../../node_modules/react-router-dom";
import { ProductConsumer } from "../Context";
import { Twrapper } from "./Styles";
import PropTypes from "../../node_modules/prop-types";

export default class Product extends Component {
  render() {
    const { id, img, name, inCart, price } = this.props.product;
    return (
      <>
        <Twrapper className="col-9 mx-auto col-md-6 col-lg-3 my-2">
          <div className="card">
            <ProductConsumer>
              {value => (
                <div
                  className="img-container py-2 "
                  onClick={() => {
                    value.handleDetail(id);
                    value.openModal(id);
                  }}
                >
                  <Link to="/details">
                    <img src={img} className="card-img-top p-5" alt="product" />
                  </Link>
                  <button
                    className="btn cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? <i className="fa fa-shopping-basket " disabled /> : <i className="fa fa-cart-plus" disabled />}
                  </button>
                </div>
              )}
            </ProductConsumer>
            <div className="card-footer d-flex justify-content-between">
              <p className="self-align-center">{name}</p>
              <h4 className="self-align-end font-italic text-dark">
                <span className="mr-1">$</span>
                {price}
              </h4>
            </div>
          </div>
        </Twrapper>
      </>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
