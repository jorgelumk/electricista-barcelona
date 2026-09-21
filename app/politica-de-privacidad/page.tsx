import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Política de Privacidad | Electricistas Barcelona',
  description: 'Información sobre el tratamiento de datos personales en electricistasenbarcelona.com de acuerdo con el RGPD y LOPDGDD.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/politica-de-privacidad/',
  }
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-slate-800 leading-relaxed text-sm">
      <Breadcrumbs
        currentPageTitle="Política de Privacidad"
        currentPageUrl="https://electricistasenbarcelona.com/politica-de-privacidad/"
      />

      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Política de Privacidad</h1>
        <p className="text-slate-500 text-xs">
          Última actualización: Septiembre 2026. Conforme al Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018 (LOPDGDD).
        </p>
      </div>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">1. Responsable del Tratamiento de sus Datos</h2>
        <p>
          En cumplimiento de la normativa vigente en materia de protección de datos personales, le informamos de que los datos facilitados a través de los formularios o canales de comunicación del sitio web <strong>electricistasenbarcelona.com</strong> serán tratados por:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 font-medium">
          <li><strong>Responsable:</strong> Agencia IA Solutions</li>
          <li><strong>Correo electrónico de contacto:</strong> jorge@agenciaiasolutions.com</li>
          <li><strong>Teléfono de atención:</strong> 657 144 186</li>
          <li><strong>Sitio Web:</strong> electricistasenbarcelona.com</li>
        </ul>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">2. Datos Personales Recabados</h2>
        <p>
          Los datos personales que recopilamos y tratamos a través del sitio web corresponden a la información que usted facilita voluntariamente al solicitar un presupuesto, presupuesto de urgencia o consulta técnica:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li><strong>Datos identificativos y de contacto:</strong> Nombre completo y número de teléfono de contacto.</li>
          <li><strong>Datos de localización del servicio:</strong> Población, municipio o código postal donde se requiere la actuación.</li>
          <li><strong>Datos de la solicitud:</strong> Tipo de servicio eléctrico seleccionado y mensaje descriptivo con los detalles de la avería o instalación.</li>
          <li><strong>Datos técnicos de navegación:</strong> Dirección IP anonimizada, tipo de navegador, sistema operativo e interacción con la web.</li>
        </ul>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">3. Finalidad del Tratamiento</h2>
        <p>Sus datos personales son tratados con las siguientes finalidades principales:</p>
        <ol className="list-decimal pl-5 space-y-2 text-slate-700">
          <li>
            <strong>Gestión y tramitación de la solicitud:</strong> Atender, evaluar y procesar sus peticiones de presupuesto o consultas sobre servicios eléctricos en Barcelona y su área metropolitana.
          </li>
          <li>
            <strong>Asignación al técnico o instalador autorizado:</strong> Comunicar los datos indispensables de contacto y avería al profesional o empresa de instalaciones autorizada (red de técnicos independientes) adscrita a su zona geográfica para poder prestar el servicio.
          </li>
          <li>
            <strong>Atención telefónica o vía WhatsApp:</strong> Contactar directamente por teléfono o aplicación de mensajería para acordar la visita técnica o resolver dudas urgentes.
          </li>
          <li>
            <strong>Cumplimiento de obligaciones legales:</strong> Atender los requerimientos de administraciones públicas o autoridades judiciales cuando sea legalmente aplicable.
          </li>
        </ol>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">4. Legitimación para el Tratamiento</h2>
        <p>La base legal para el tratamiento de sus datos personales radica en:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>
            <strong>Medidas precontractuales (Art. 6.1.b RGPD):</strong> La aplicación a petición del interesado de medidas precontractuales relativas a la elaboración del presupuesto o atención del servicio de urgencia solicitado.
          </li>
          <li>
            <strong>Consentimiento del interesado (Art. 6.1.a RGPD):</strong> El consentimiento libre, específico, informado e inequívoco otorgado al marcar la casilla de aceptación de la Política de Privacidad antes de enviar el formulario.
          </li>
        </ul>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">5. Cesión de Datos a Terceros (Red de Instaladores)</h2>
        <p>
          Al solicitar un presupuesto o servicio a través de nuestra plataforma, usted comprende y autoriza expresamente que sus datos de contacto y los detalles de la solicitud sean transmitidos al técnico o instalador autorizado asignado a su zona para la ejecución directa de la intervención.
        </p>
        <p>
          No vendemos, alquilamos ni cederemos sus datos personales a ninguna otra empresa o tercero con fines publicitarios, de marketing ajeno o comercialización externa.
        </p>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">6. Conservación de los Datos</h2>
        <p>
          Los datos personales facilitados se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados (atención de la solicitud de servicio) y, posteriormente, durante los plazos legalmente exigidos para la atención de posibles responsabilidades derivadas del tratamiento.
        </p>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">7. Derechos del Usuario</h2>
        <p>
          Como titular de los datos, el RGPD y la LOPDGDD le reconocen los siguientes derechos:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li><strong>Derecho de Acceso:</strong> Consultar qué datos personales suyos estamos tratando.</li>
          <li><strong>Derecho de Rectificación:</strong> Solicitar la modificación de datos inexactos o incompletos.</li>
          <li><strong>Derecho de Supresión (al olvido):</strong> Solicitar la eliminación de sus datos personales cuando ya no sean necesarios.</li>
          <li><strong>Derecho de Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
          <li><strong>Derecho a la Limitación del Tratamiento:</strong> Solicitar la suspensión del tratamiento de sus datos.</li>
          <li><strong>Derecho a la Portabilidad:</strong> Recibir sus datos en un formato estructurado y de uso común.</li>
        </ul>
        <div className="pt-2">
          <p>
            Para ejercitar cualquiera de estos derechos, puede enviar una solicitud por escrito a la dirección de correo electrónico <strong>jorge@agenciaiasolutions.com</strong> especificando en el asunto &quot;Ejercicio de Derechos de Protección de Datos&quot; y acompañando una copia de su DNI o documento equivalente de identificación.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Asimismo, le informamos de que tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su sitio web oficial (www.aepd.es) si considera que sus derechos han sido vulnerados.
          </p>
        </div>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">8. Seguridad de los Datos</h2>
        <p>
          Le garantizamos que hemos implantado las medidas de seguridad técnicas y organizativas adecuadas para garantizar la confidencialidad, integridad y disponibilidad de su información personal, protegiéndola contra el acceso no autorizado, alteración, pérdida o destrucción. Toda comunicación en el sitio web se realiza mediante canal cifrado SSL/HTTPS.
        </p>
      </section>
    </div>
  );
}
