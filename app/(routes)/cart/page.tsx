'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/use-cart'
import { formatPrice } from '@/lib/formatPrice'
import CartItem from './components/cart-item'
import { makePaymentRequest } from '@/api/payment'
import Aviso from '@/components/aviso'


const Cart = () => {

    const {items, removeAll} = useCart()
    const prices = items.map((product => product.price))
    const totalPrice = prices.reduce((total, price) => total + price, 0 )


   const buyStripe = async () => {
    try {
           const cleanProducts = items.map((item: any) => {
            return {
                id: Number(item.id)                
            };
        });
        // 1. Haces la petición a tu backend de Strapi con Axios
        const res = await makePaymentRequest.post("/api/orders", {
            products: cleanProducts
        });

        // 2. Obtienes la URL de redirección directa que generó Stripe en el servidor
        const checkoutUrl = res.data.stripeSession?.url;

        if (checkoutUrl) {
            // 3. Rediriges al usuario directamente a la pasarela de Stripe
            window.location.href = checkoutUrl;
        } else {
            console.error("No se encontró la URL de Stripe en la respuesta del servidor.");
        }


        removeAll()
    } catch (error) {
        console.log("Error al procesar el pago:", error);
    }
    };


  return (
    <div className='max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8' >

        <h1 className='mb-5 text-3xl font-bold ' > Carrito de compra </h1>

        <div className='grid sm:grid-cols-2 sm:gap-5' >
            <div>
                
                {items.length === 0 && (
                    <p>No hay productos en el carrito</p>
                )}

                <ul>
                    {items.map((item) => (

                        <CartItem key={item.id} product={item} />
                    ))}
                </ul>

            </div>

            <div className='max-w-xl text-black' >
                <div className='p-6 rounded-lg bg-slate-100' >
                    <p className='mb-3 text-lg font-semibold ' >Resumen de pedido</p>
                    <Separator />
                    <div className='flex justify-between gap-5 my-4' >
                        <p>Orden total</p>
                        <p>{formatPrice(totalPrice)}</p>
                    </div>

                    <div className='flex items-center justify-center w-full mt-3' >
                        <Button className="w-full dark:bg-black dark:text-white" onClick={() => buyStripe()}> Comprar </Button>
                    </div>

                </div>

            </div>

        </div>

        <Aviso />

    </div>
  )
}

export default Cart
{/* 
    import { loadStripe } from '@stripe/-stripe-js'
    import { makePaymentRequest } from '@/api/payment'

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

    const buyStripe = async () => {

        try {

        const stripe = await stripePromise
        const res = await  makePaymentRequest.post("/api/orders", {
            products: items
        })

        await stripe?.redirectToCheckout({
            sessionId: res.data.stripeSession.id
        })

        } catch (error) {
            console.error(error) 
        }

    }

    en carpeta api creamos un archivo payments.tsx 

    instalamos AXIOS npm 

    import axios from 'axios'

    export const makePaymentRequest = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers: {
            Authorization: "bearer" + process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        },
    });

    */}