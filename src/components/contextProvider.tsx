"use client"
import React, { createContext, useState } from 'react'

export const store = createContext<any>(null)
export const ActivityContext = createContext<any>(null)

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState([]);
  const [activity, setActivity] = useState<number[]>([])

  function addActivity(e: number): void {
    setActivity((pre: any) => {
      if (activity.includes(e)) {
        return pre
      } else {
        return [...pre, e]
      }
    })
  }

  function resetActivity(): void {
    setActivity([])
    console.log(activity)
  }
  return (
    <div onClick={resetActivity}>
      <store.Provider value={[cart, setCart]}>
        <ActivityContext.Provider value={{ activity, addActivity, resetActivity }}>
          {children}
        </ActivityContext.Provider>
      </store.Provider>
    </div>
  )
}


export default ContextProvider