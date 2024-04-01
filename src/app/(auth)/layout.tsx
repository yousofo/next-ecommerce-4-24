import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <header>
      header
    </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default layout