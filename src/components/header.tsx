"use client"

import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { ActivityContext } from './contextProvider';

const Header = () => {
  const { activity, addActivity, resetActivity }: { activity: number[], addActivity: (e: number) => void, resetActivity: () => void }
    = useContext(ActivityContext)

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("https://competition-e-commerce-backend-1.vercel.app/categories/").then(e => e.json()).then(e => setCategories(e.categories))
  }, [])

  const classStyles = {
    upperLink: "flex items-center gap-1.5 sm:gap-2"
  }

  function handeClick(e: MouseEvent) {
    e.stopPropagation()
    addActivity(1)
  }
  return (
    <>
      <header className='relative z-10'>
        <section className='border-b relative z-20 text-lg'>
          <div className='p-1.5 py-4 max-w-[1600px] m-auto flex items-center justify-between gap-10'>
            <Link href="/">
              <img src="https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2.svg#40" alt="" className='aspect-video max-h-20' />
            </Link>
            <div className='border flex items-center flex-1 max-w-[1030px] py-2 px-4 h-fit'>
              <IoSearch className='text-base me-4' />
              <input type="search" className='focus:outline-none text-base flex-1' placeholder='Search for products' />
            </div>
            <ul className='flex items-center gap-4 '>
              <li>
                <a href="" className={`${classStyles.upperLink} w-max`}>
                  <img width="25" src="https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-icon2.svg#160" alt="" />
                  <span className='hidden md:inline'>+61 (0) 3 8376 6284</span>
                </a>
              </li>
              <li>
                <a href="" className={`${classStyles.upperLink} w-max`}>
                  <img width="25" src="https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-icon3.svg#159" alt="" />
                  <span className='hidden md:inline'>$0.00</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <nav className='sticky top-0 z-40 bg-white' >
        <section className='shadow z-10 sticky bottom-0 min-h-0'>
          <div className='flex justify-between max-w-[1600px] m-auto p-1.5 '>
            <div className='flex items-center flex-1'>
              <button onClick={(e: any) => handeClick(e)} className='bg-yn-cyan bg-opacity-70 hover:bg-opacity-100 p-4 text-xl rounded-lg flex items-center gap-4'><FaBars /> All categories</button>
              <nav className='absolute md:static hidden bg-white top-full w-full md:w-1/2 md:max-w-96 md:block h-fit'>
                <ul className='flex flex-col md:flex-row w-full justify-between font-semibold items-center px-8 text-xl gap-4 '>
                  <li>
                    <Link className='text-black hover:text-opacity-100 text-opacity-70 ' href="">Shop</Link>
                  </li>
                  <li>
                    <Link className='text-black hover:text-opacity-100 text-opacity-70  ' href="">Blog</Link>
                  </li>
                  <li>
                    <Link className='text-black hover:text-opacity-100 text-opacity-70  ' href="">About</Link>
                  </li>
                  <li>
                    <Link className='text-black hover:text-opacity-100 text-opacity-70  ' href="">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <button className='border-2 hidden md:block rounded-lg border-[#F6DCB8] p-4 text-xl hover:border-yn-cyan'>Outlet</button>
            <button>
              <FaBars className='md:hidden' />
            </button>
          </div>
        </section>
        <div onClick={(e) => e.stopPropagation()} className={`border-e z-50 flex fixed left-0 top-0 h-screen ${!activity.includes(1) && "-translate-x-full"} w-fit h-full flex flex-col transition-all   bg-white sm:p-10`}>
          <h2 className='text-3xl'>Categories</h2>
          <ul className='text-lg'>
            {
              categories.map((e: { icon: string, name: string }, i: number) =>
                <li key={i}>
                  <Link href="" className='flex items-center my-3 gap-2 group hover:bg-[#FFF1E5] rounded-lg'>
                    <img src={e.icon} alt="" className='bg-[#F0F5F7] group-hover:bg-transparent rounded-lg' />
                    <span>{e.name}</span>
                  </Link>
                </li>
              )
            }
          </ul>
          <div>
            <img src="" alt="" />
            <h3>Cardigan longsleeve</h3>
            <Link href="">Show details</Link>
          </div>
          <a href="tel:+61383766284">+61 (0) 3 8376 6284</a>
        </div>
      </nav>
    </>
  )
}

export default Header