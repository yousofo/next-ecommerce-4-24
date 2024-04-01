import React from 'react'

const ProductReview = ({params}:{params : {productId:string}}) => {
  return (
    <div>product {params.productId} review</div>
  )
}

export default ProductReview