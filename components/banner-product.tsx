import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

const BannerProduct = () => {
  return (
    <>
        <div className='mt-4 text-center'>
            <p>Sumérgete en una experiencia única</p>
            <h4 className='mt-2 text-5xl font-extrabold ' >CaféExquisito </h4>
            <p className='my-2 text-lg' >Despierta tus sentidos con cada sorbo</p>

            <Link href="#" className={buttonVariants()} >Comprar</Link>
        </div>

        <div className="h-[400px] bg-[url('/img/coffeMain.jpg')] bg-cover bg-center mt-5 sm:h-[600px] "></div>

    </>    
  )
}

export default BannerProduct
