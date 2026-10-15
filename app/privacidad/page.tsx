import React from 'react';

export const metadata = {
  title: 'Aviso de Privacidad & Simulación | Mi Portafolio',
  description: 'Términos de uso y exención de responsabilidad del entorno de pruebas.',
};

export default function PrivacidadPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">
        Aviso de Privacidad y Términos de Simulación
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Última actualización: Octubre 2026
      </p>

      <div className="space-y-6 border-t border-slate-200 dark:border-slate-800 pt-6 leading-relaxed">
        
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            1. Naturaleza del Sitio Web
          </h2>
          <p>
            Este sitio web es exclusivamente un entorno de pruebas, simulación y portafolio técnico 
            desarrollado con fines profesionales. Esta plataforma <strong>NO constituye un comercio 
            electrónico real</strong>, NO comercializa productos ni servicios, y NO procesa 
            transacciones financieras legítimas de ninguna índole.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            2. Recopilación y Uso de Datos
          </h2>
          <p className="mb-2">
            Para demostrar la funcionalidad técnica del flujo de compra (Checkout) y la integración de 
            la pasarela de pagos, el sitio presenta formularios de captura de datos. Al respecto, se informa que:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>No se solicitan, almacenan ni procesan datos personales reales.</li>
            <li>Cualquier información introducida por el usuario (nombres, correos, direcciones o números de tarjeta) debe ser estrictamente ficticia y con fines de prueba técnica.</li>
            <li>Las herramientas de pago operan exclusivamente en <strong>Modo de Prueba (Sandbox / Test Mode)</strong>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            3. Exención de Responsabilidad
          </h2>
          <p>
            El desarrollador se deslinda expresamente de cualquier responsabilidad legal, civil, penal o comercial 
            derivada del uso indebido de la plataforma por parte de los usuarios, incluyendo la introducción 
            accidental o voluntaria de datos bancarios o personales auténticos, así como fallos técnicos o 
            vulnerabilidades externas dentro del entorno de hosting.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            4. Almacenamiento y Eliminación
          </h2>
          <p>
            Los datos ficticios generados pueden ser almacenados temporalmente en una base de datos PostgreSQL 
            automatizada con el único propósito de demostrar la persistencia en el backend (Strapi). Estos registros 
            son depurados de forma periódica y jamás serán compartidos con terceros.
          </p>
        </section>

      </div>

      <div className="mt-12 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-lg text-sm text-amber-800 dark:text-amber-300">
        Al interactuar con los formularios de este sitio web, usted comprende su naturaleza académica/demostrativa y acepta los términos aquí descritos.
      </div>
    </main>
  );
}
