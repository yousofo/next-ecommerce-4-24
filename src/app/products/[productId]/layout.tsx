import { Metadata } from "next"

type Props = {
  params: {
    productId: string
  }
}


// export function generateMetadata({ params }: Props): Metadata {
//   return {
//     title: {
//       absolute:"",
//       default:"Product Info",
//       template:"Product %s",
//     }
//   }
// }


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

export default layout