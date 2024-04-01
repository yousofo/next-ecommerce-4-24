// import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Link from "next/link"
import cat1 from "@/../public/images/home-cat-1.webp"
import cat2 from "@/../public/images/home-cat-2.webp"
import cat3 from "@/../public/images/home-cat-3.webp"
import Image from "next/image"
import { FaChevronRight } from "react-icons/fa";

type Category = {
  name: string,
  icon: string,
  slug: string
}
type Categories = Category[]


// export const getStaticProps = (async (context) => {
//   const res = await fetch('https://competition-e-commerce-backend-1.vercel.app/categories/')
//   const data = await res.json()
//   return { props: { data: data.categories } }
// }) satisfies GetStaticProps<{
//   data: Categories
// }>

export default function LandingCards({
  data
}: { data: Categories }/*: InferGetStaticPropsType<typeof getStaticProps>) */) {
  const cateImgs = [cat1, cat2, cat3]
  return (
    <section className='flex gap-5 lg:gap-8'>
      {data.slice(0, 3).map((e: Category, i: number) => (
        <figure key={i} className="flex bg-[#F0F5F7] p-5 font-semibold text-gray-700 rounded-lg w-1/3">
          <figcaption className="flex flex-col justify-between max-w-60">
            <h2 className="text-2xl">{e.name}</h2>
            <p className="text-lg font-normal">Suspendisse consequat sed velit amet commodo</p>
            <Link href="" className="text-lg flex items-center gap-4">Buy now <FaChevronRight /></Link>
          </figcaption>
          <div className="img">
            <Image src={cateImgs[i]} alt="" />
          </div>
        </figure>
      ))}
    </section>
  )
}