"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"
import SkeletonProduct from "./components/sketeton-product"
import CarouselProduct from "./components/carousel-product"
import InfoProduct from "./components/info-product"

const Page = () => {

    const params = useParams()
    
    const productSlug = Array.isArray(params.productSlug) 
      ? params.productSlug[0] 
      : params.productSlug || ""

    const { result }: ResponseType = useGetProductBySlug(productSlug)

    console.log(result)

    if (result === null || result.length === 0) {
      return <SkeletonProduct />
    }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24" >
      
      <div className="grid sm:grid-cols-2" >
          
          <div>
              <CarouselProduct images={result[0].images} />            
          </div>

          <div className="sm:px-12" >
            <InfoProduct product={result[0]} />
          </div>

      </div>

    </div>
  )
}

export default Page
