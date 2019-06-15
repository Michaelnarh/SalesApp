import React from 'react'

export default function CartTotals ({ value }) {
  const { cartsubTotal, grandTotal, cartTax } = value
  return (
    <>
      <div className='float-right margin-bottom'>
        <ul className='d-flex mr-5 '>
          <span className='mr-2'>subTotal:</span>
          <strong>${cartsubTotal}</strong>
        </ul>
        <ul className='d-flex'>
          <span className='mr-2'>Tax deducted:</span>
          <strong>${cartTax}</strong>
        </ul>
        <ul className='d-flex'>
          <span className='mr-2'>GrandTotal:</span>
          <strong>${grandTotal}</strong>
        </ul>
      </div>
    </>
  )
}
