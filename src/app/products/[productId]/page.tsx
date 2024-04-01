import { Metadata } from "next"
import { notFound } from "next/navigation"

export function generateMetadata({ params }: { params: { productId: string } }): Metadata {
  return {
    title: `${params.productId}`
  }
}
// export const metadata : Metadata ={
//   title:"1"
// }

const Product = ({ params }: { params: { productId: string } }) => {
  if (Number.isNaN(parseInt(params.productId))) {
    throw new Error("product id must be a number")
  }
  if (Number.parseInt(params.productId) > 100) {
    return notFound()
  }
  return (
    <div>product {params.productId}</div>
  )
}

export default Product