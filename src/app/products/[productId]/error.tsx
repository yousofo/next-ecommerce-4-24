"use client"
import React from 'react'

const ErrorBoundary = ({ error, reset }: { error: Error, reset: () => void }) => {
  console.log("product error: "+Error.prototype.message)
  return (
    <div>
      <div>{error.message} | from product error</div>
      <button className='bg-gray-300 px-2 rounded cursor-pointer' onClick={reset}>Reload</button>
    </div>
  )
}

export default ErrorBoundary