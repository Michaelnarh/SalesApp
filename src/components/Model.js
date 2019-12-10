import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { ModalContainer, ButtonContainer } from "./Styles";
import { Link } from "../../node_modules/react-router-dom";

export default class Model extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {value => {
            const { openModal, closeModal } = value;
            const { name, img, price } = value.modalProduct;
            if (!openModal) {
              return null;
            } else
              return (
                <ModalContainer>
                  <div className="container">
                    <div className="row">
                      <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                        <h5>Item Added To Cart</h5>
                        <img src={img} className="img-fluid" alt="featured img" />
                        <h5>{name}</h5>
                        <h5 className="text-mutted">Price: $ {price}</h5>
                        <div className="d-flex text-center text-justify">
                          <Link to="/">
                            <ButtonContainer onClick={() => closeModal()}>store</ButtonContainer>
                          </Link>
                          <Link to="/cart">
                            <ButtonContainer cart onClick={() => closeModal()}>
                              Go to cart
                            </ButtonContainer>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              );
          }}
        </ProductConsumer>
      </>
    );
  }
}
