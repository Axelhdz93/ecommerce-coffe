import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'

interface typesData {
    id: number,
    name: string,
    link: string
}

const dataFooter: typesData[] = [
    {
        id: 1, 
        name: "Sobre nosotros",
        link: "#"
    },

    {
        id: 2,
        name: "Productos",
        link: "#"
    },

    {
        id: 3,
        name: "Mi cuenta",
        link: "#"
    },

    {
        id: 4,
        name: "Politica de privacidad",
        link: "#"
    },
    
]

const Footer = () => {
  return (
    <footer className='mt-4' >
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>

            <div className='sm:flex sm:items-center sm:justify-between '>

                <p>
                    <span className='font-bold'>
                        AxelDev
                    </span>
                    E-commerce
                </p>

                 <div className="mt-2 space-x-4">
                    <Link href="/about" className="hover:underline">Sobre el Proyecto</Link>
                    <Link href="/privacidad" className="hover:underline">Aviso de Privacidad / Demo</Link>
                </div>


                <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>

                    {dataFooter.map((data) => (
                        <li key={data.id}>
                            <Link href={data.link} className='hover:underline me-4 md:me-6'> {data.name} </Link>
                        </li>
                    ))}

                </ul>

            </div>

            <Separator className='m-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
            <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-700'>
                &copy; 2026

                <Link href= '#' >AxlDev</Link>
                Todos los derechos reservados
            </span>

        </div>
    </footer>
  )
}

export default Footer
