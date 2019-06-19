import React from "react";

export default function Title({ first, second }) {
  return (
    <>
      <div className="container">
        <div className="row headme text-center mb-5">
          <div className="col-md-6">{first}</div>
          <div className="col-md-6 ">{second}</div>
        </div>
      </div>
    </>
  );
}
