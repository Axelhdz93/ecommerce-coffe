import React from 'react'

const Aviso = () => {
  return (
    <div className='flex flex-col items-center justify-center p-5 py-3 gap-5 text-lg text-justify wrap-break-word sm:px-20 sm:py-10'>

      <h1 className='text-red-600 text-xl' >⚠️ Aviso importante sobre tus datos</h1>

      <p>
        Para demostrar el flujo completo de una compra, he integrado una pasarela de pagos en modo de prueba. Al interactuar con el proceso de pago, por favor ten en cuenta lo siguiente:
      </p>

        <ul className="flex flex-col gap-2 px-5">
            <li className="[&>span]:text-red-600" >  <span> • No ingreses datos reales: </span>  
                
                No utilices números de tarjetas de crédito, contraseñas, direcciones residenciales ni correos electrónicos verdaderos.
            
            </li>
            
            <li className="[&>span]:text-red-600" >  <span> • Usa datos ficticios: </span>
                
                Si deseas probar el formulario de envío o facturación, puedes rellenar los campos con texto falso (ej. correo@prueba.com y Calle Falsa 123).
            </li>

            <li className="[&>span]:text-red-600" >  <span> • Tarjeta de prueba: </span>    
                Para simular una compra exitosa en la pasarela de pagos, utiliza los siguientes datos de prueba oficiales:
            </li>

            <li className="[&>span]:text-red-600" >  <span> • Número de tarjeta: </span>     
            	4242 4242 4242 4242
            </li>

            <li className="[&>span]:text-red-600" >  <span> • Fecha de vencimiento: </span>    
                04/26 (o cualquier fecha futura)
            </li>
            
            <li className="[&>span]:text-red-600" >  <span> • CVC: </span> 
                424 
            </li>

            <li className="[&>span]:text-red-600" >  <span>   • Tu seguridad es primero: </span>       
                Este entorno es puramente educativo y no procesa transacciones financieras reales ni almacena información de pago confidencial.
            </li>

        </ul>
    	      

    </div>
  )
}

export default Aviso
