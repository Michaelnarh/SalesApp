import React from 'react'

export default function Title({name,title}) {
  return (
      <>
        <div>
            <div className="col-10 mx-auto ">
             <h1>
                <strong className="display-5">
                    {name}
                </strong>
                <sub>{title} </sub>
             </h1>
            </div>
        </div>
    </>
  )
}
