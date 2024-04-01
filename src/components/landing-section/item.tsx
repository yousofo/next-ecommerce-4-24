import Link from 'next/link'
import React from 'react'

const Item = ({ itemData,classes }: {classes:"string", itemData: { name: string, sizes: { price: number }[] } } | any) => {
  function getPrices(data : (typeof itemData)):boolean{
    return (itemData.sizes.length>1 && itemData.sizes[0].price != itemData.sizes[itemData.sizes.length-1].price)
  }
  return (
    <Link key={itemData.name} href="" className={`w-full ${classes} inline-block text-gray-800`}>
      <figure className='flex flex-col justify-between'>
        <div className="img">
          <img className='w-full' src={itemData.images[0].secure_url} alt="product img" />
        </div>
        <figcaption>
          <h3 className='text-2xl font-semibold'>{itemData.name}</h3>
          <p className='text-gray-600'>${itemData.sizes[0].price}{getPrices(itemData) && `- $${itemData.sizes[itemData.sizes.length -1].price}`}</p>
        </figcaption>
      </figure>
    </Link>
  )
}

export default Item