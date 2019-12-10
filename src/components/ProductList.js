import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
// import {StoreProduct} from '../Data'
import { ProductConsumer } from '../Context'

export default class ProductList extends Component {
  render () {
    return (
      <>
        <Title first='OUR' second='PRODUCTS' />

        <div className='row justify-content-center margin-row'>
          <div>
            <div className='product-list-center mx-4'>
              <ProductConsumer>
                {value => {
                  return value.product.map(product => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    )
  }
}
