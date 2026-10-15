import Aviso from "@/components/aviso"
import Link from "next/link"


const PageAbout = () => {
  return (
    <div className='flex flex-col items-center justify-center p-5 py-3 gap-5 text-lg text-justify wrap-break-word sm:px-20 sm:py-10' >

        <h2 className='text-center text-black font-bold dark:text-white'>¡Hola! Bienvenido a mi rincón de desarrollo.</h2>
      
        <p>
            Esta plataforma web es un proyecto de simulación (Demo) diseñado exclusivamente para formar parte de mi portafolio profesional como desarrollador Frontend.
            Aunque el sitio está completamente optimizado y cuenta con una arquitectura de comercio electrónico funcional —desde la navegación dinámica hasta el flujo del carrito de compras—<span className='text-red-600' > no es una tienda real y ningún producto está a la venta. </span>

        </p>
        
            <h2 className=" text-black font-bold dark:text-white" >🛠️ Stack Tecnológico & Arquitectura </h2>

            <ul className="flex flex-col gap-2 px-5">

                <p>
                    El objetivo principal de este proyecto es demostrar mis habilidades para construir interfaces de usuario robustas, escalables y con una experiencia de usuario (UX) impecable. Para lograrlo, implementé las siguientes tecnologías:
                </p>

                <li className="[&>span]:text-amber-600">
                    
                    <span>• Next.js & React:</span> Framework principal para el renderizado del lado del servidor (SSR), optimización de rutas y componentes interactivos.

                </li>

                <li className="[&>span]:text-amber-600">
                    
                    <span>• Zustand:</span> Gestión de estado global ligera y eficiente para controlar el carrito de compras y las sesiones.

                </li>

                <li className="[&>span]:text-amber-600">
                    
                    <span>• Tailwind CSS & shadcn/ui:</span> Diseño visual responsivo, estilizado y basado en componentes accesibles y reutilizables, utilizando la utilidad cn para la combinación dinámica de clases.

                </li>

                <li className="[&>span]:text-amber-600">
                    
                    <span>• Strapi & PostgreSQL:</span> Headless CMS robusto para la gestión del catálogo de productos y almacenamiento de datos de forma segura.

                </li>

                <li className="[&>span]:text-amber-600">
                    
                    <span>• Axios:</span> Consumo optimizado de la API de Strapi para la sincronización de datos en tiempo real.

                </li>

                <li className="[&>span]:text-amber-600">
                    
                    <span>• Lucide React & Sonner:</span> Iconografía moderna y un sistema de notificaciones (toast) nativo para un feedback inmediato al usuario.

                </li>

                <li className="[&>span]:text-amber-600">
                    <span>• Nextjs-toploader:</span> Barra de carga superior fluida para mejorar la percepción de velocidad en la navegación entre páginas.
                </li>

            </ul>                

                <p> ¡Siéntete libre de explorar todas las secciones y probar las funcionalidades!
                Si estás interesado en conocer más sobre el código detrás de este proyecto, mi flujo de trabajo o te gustaría colaborar en el futuro, puedes revisar el repositorio en <Link className="text-blue-600 text-xl text-bold" href="https://github.com/Axelhdz93" > Git Hub </Link> o contactarme a través de <Link className="text-blue-600 text-xl text-bold" href="www.linkedin.com/in/axel-hdz">LinkedIn</Link>.
                </p>

            <Aviso />

    </div>
  )
}

export default PageAbout
