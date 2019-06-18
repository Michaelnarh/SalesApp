import React from "react";

export default function CartTotals({ value }) {
  const { cartsubTotal, grandTotal, cartTax } = value;
  return (
    <>
      <div className=" text-right">
        <ul className="d-flex mr-3 text-right">
          <span className="mr-2">subTotal:</span>
          <strong>${cartsubTotal}</strong>
        </ul>
        <ul className="d-flex text-right">
          <span className="mr-2">Tax deducted:</span>
          <strong>${cartTax}</strong>
        </ul>
        <ul className="d-flex">
          <span className="mr-2">GrandTotal:</span>
          <strong>${grandTotal}</strong>
        </ul>
      </div>
      <clearfix />
    </>
  );
}
