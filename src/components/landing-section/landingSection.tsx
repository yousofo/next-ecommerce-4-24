import React, { useEffect, useState } from 'react'
import Item from './item'
import LandingSectionAd from './landingSectionAd'


const LandingSection = () => {
  const [items, setItems] = useState([])
  console.log(items)
  useEffect(() => {
    fetch("https://competition-e-commerce-backend-1.vercel.app/categories/dresses-and-suits").then(e => e.json()).then(e => setItems(e.products))
  }, [])
  return (
    <section className='text-gray-800 font-semibold py-16 w-full max-w-[1300px] flex flex-col gap-8'>
      <div>
        <svg className='m-auto my-1' xmlns="http://www.w3.org/2000/svg" width="48" height="16" viewBox="0 0 48 16" fill="none">
          <path d="M41.0165 0.206186C38.7195 -0.184636 36.3662 0.0577821 34.0455 0.296252L11.0371 2.68532C8.38034 2.96115 5.61709 3.27029 3.33514 4.65802C1.05319 6.04575 -0.606755 8.85773 0.21216 11.3936C0.834356 13.321 2.71808 14.6276 4.68673 15.1207C6.65537 15.6139 8.72574 15.4281 10.7477 15.241L36.1815 12.8968C39.3437 12.6054 45.9756 12.0215 47.5686 8.54706C49.4966 4.33112 44.5421 0.804485 41.0165 0.206186Z" fill="#97D5EE" />
        </svg>
        <p className='text-center'>Kids love this stuff</p>
        <h2 className='text-4xl text-center'>Our Bestsellers</h2>
      </div>
      <section className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
        {
          items.slice(0, 4).map((e :any,i) => <Item key={i + e.name} itemData={e} />)
        }
      </section>
      <section className='lg:flex gap-6'>
        <LandingSectionAd />
        <div className='lg:w-1/2 grid grid-cols-2 gap-6'>
          {items.slice(0, 2).map((e:any ,i) => <Item key={i + e.name} itemData={e} />)}
        </div>
      </section>
    </section>
  )
}

export default LandingSection