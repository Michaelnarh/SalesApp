import React from "react";
import PaypalButton from "./PaypalButton";

export default function CartTotals({ value }) {
  const { cartsubTotal, grandTotal, cartTax } = value;
  return (
    <>
      <div className="clearfix">
        <div className="float-right mr-5 cartTotaltext ">
          <ul className="d-flex mr-3 text-right">
            <span className="mr-2">SubTotal:</span>
            <strong>${cartsubTotal.toFixed(2)}</strong>
          </ul>
          <ul className="d-flex text-right">
            <span className="mr-2">Tax deducted:</span>
            <strong>${cartTax.toFixed(2)}</strong>
          </ul>
          <ul className="d-flex">
            <span className="mr-2">GrandTotal:</span>
            <strong>${grandTotal.toFixed(2)}</strong>
          </ul>
          <div className="ml-2">
            <PaypalButton cartTotal={89} history currency="GH" />
          </div>
        </div>
      </div>

      {/* <div className="default">kdjjfdjfjlkadjslkjflkjlkajdlkfjlkajdlfjlkajdffljlkasjfdlkfljaf</div> */}
    </>
  );
}
