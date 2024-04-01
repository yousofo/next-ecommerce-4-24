import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  console.log(children)

  return (
    <div className='p-5 shadow bg-slate-300 text-2xl'>{children}</div>
  )
}

export default Card