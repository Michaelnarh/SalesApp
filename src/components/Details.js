import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "../../node_modules/react-router-dom";
import ButtonContainer from "./customstyles";

export default class Details extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const { id, img, name, company, info, price, inCart } = value.detailProduct;
            return (
              <>
                <div className="container py-5">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="img-container">
                        <img src={img} alt="product" className="img-fluid" width="300" height="300" />
                      </div>
                    </div>
                    <div className="col-md-7 ">
                      <h2 className="text-blue">
                        <b />
                        <b>{name}</b>
                      </h2>
                      <div className=" text-capitalize mt-4">
                        <h5 className="">Some info:</h5>
                        {info}
                      </div>
                      <div className="text-capitalize mt-4">
                        <b className="mr-2 text-mutted text-center">Made By: </b>
                        {company}
                      </div>
                      <div className="text-capitalize mt-4 tex-center">
                        <b className="mr-2 text-mutted">Price: </b>${price}
                      </div>
                      <div className="d-flex mt-5">
                        <Link to="/">
                          <ButtonContainer className="mr-3">Go Back</ButtonContainer>
                        </Link>
                        <ButtonContainer disabled={inCart ? true : false} onClick={() => value.addToCart(id)}>
                          {inCart ? "inCart" : "Add to Cart"}
                        </ButtonContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
