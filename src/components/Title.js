import React from "react";

export default function Title({ me, u }) {
  return (
    <>
      <div className="container">
        <div className="row headme text-center mb-5">
          <div className="col-md-6">{me}</div>
          <div className="col-md-6 ">{u}</div>
        </div>
      </div>
    </>
  );
}
