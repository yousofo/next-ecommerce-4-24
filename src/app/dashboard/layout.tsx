import React from 'react'

type props = {
  children: React.ReactNode,
  analytics: React.ReactNode,
  metrics: React.ReactNode,
}

const Layout = ({ children, analytics, metrics }: props) => {
  let myStr = "tttt"
  let myArr = [1,2,3]
  return (
    <div className='p-5 flex flex-col gap-4'>
      <div>
        {children}
      </div>
      <div className='flex gap-4'>
        {analytics}
        {metrics}
      </div>
    </div>
  )
}

export default Layout