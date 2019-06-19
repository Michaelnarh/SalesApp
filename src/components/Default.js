import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="container">
          <div className="mt-5">
            <h3 className="text-center display-4">404</h3>
            <h2 className="text-danger text-center">Error</h2>
          </div>
          <div className="col-10 mx-auto text-center ">
            <h4 className="mb-5">
              The request page url<span className="text-danger">{this.props.location.pathname} </span> is not found
            </h4>
          </div>
        </div>
        <div className="default ">-</div>
      </>
    );
  }
}
