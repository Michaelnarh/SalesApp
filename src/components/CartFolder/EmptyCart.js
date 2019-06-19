import React from "react";

export default function EmptyCart() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="mx-auto mt-5 ">
            <h3 className="text-center">Oooooohps....</h3>
            <h1 className="text-center ml-2"> Cart is Currently Empty</h1>
          </div>
        </div>
      </div>
      <div className="default">-</div>
    </div>
  );
}
