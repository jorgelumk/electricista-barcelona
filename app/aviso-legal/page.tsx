import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Aviso Legal | Electricistas Barcelona',
  description: 'Información legal, datos identificativos y condiciones de uso del sitio web electricistasbarcelona.com.',
  alternates: {
    canonical: 'https://electricistasbarcelona.com/aviso-legal/',
  }
};

export default function AvisoLegalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-slate-800 leading-relaxed text-sm">
      <Breadcrumbs
        currentPageTitle="Aviso Legal"
        currentPageUrl="https://electricistasbarcelona.com/aviso-legal/"
      />

      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Aviso Legal</h1>
        <p className="text-slate-500 text-xs">
          Última actualización: Septiembre 2026. Cumplimiento de la Ley 34/2002 (LSSI-CE).
        </p>
      </div>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">1. Datos Identificativos</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se ponen a disposición de los usuarios los datos de información general del titular de este sitio web:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 font-medium">
          <li><strong>Titular de la plataforma:</strong> Agencia IA Solutions</li>
          <li><strong>Sitio Web:</strong> electricistasbarcelona.com</li>
          <li><strong>Correo electrónico de contacto:</strong> jorge@agenciaiasolutions.com</li>
          <li><strong>Teléfono de atención:</strong> 657 144 186</li>
          <li><strong>Actividad principal:</strong> Plataforma digital intermediaria de captación y gestión de solicitudes de servicios de electricidad y reformas en Barcelona y área metropolitana.</li>
        </ul>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">2. Objeto y Modelo de Negocio</h2>
        <p>
          El presente sitio web (electricistasbarcelona.com) funciona bajo un modelo de plataforma intermediaria digital y red de captación de solicitudes de servicio técnico.
        </p>
        <p>
          Agencia IA Solutions actúa exclusivamente como prestadora de servicios de intermediación de la sociedad de la información, facilitando el contacto entre los usuarios interesados en contratar servicios eléctricos y una red de electricistas e instaladores autorizados independientes con acreditación REIC (Registre d’Instal·ladors de Catalunya) correspondiente a cada zona geográfica de actuación.
        </p>
        <p>
          Los trabajos de instalación, urgencias, reparación, mantenimiento y emisión de certificados o boletines eléctricos son ejecutados de manera autónoma e independiente por los profesionales o empresas instaladoras asignadas.
        </p>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">3. Condiciones de Uso del Sitio Web</h2>
        <p>
          El acceso y uso del sitio web atribuye la condición de Usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
        </p>
        <p>El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios facilitados, absteniéndose de:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li>Realizar actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
          <li>Introducir datos falsos, erróneos o de terceros sin su consentimiento explícito en los formularios de contacto.</li>
          <li>Provocar daños en los sistemas físicos o lógicos de la web, de sus proveedores o de terceros mediante la introducción o difusión de virus informáticos u otros elementos dañinos.</li>
        </ul>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">4. Propiedad Intelectual e Industrial</h2>
        <p>
          Todos los derechos de propiedad intelectual e industrial sobre la estructura, diseño gráfico, código fuente, textos, marcas, logotipos, imágenes y demás elementos contenidos en este sitio web son titularidad exclusiva de Agencia IA Solutions o de sus licenciantes.
        </p>
        <p>
          Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación, total o parcial, de los contenidos de esta web con fines comerciales sin la autorización previa y por escrito del titular.
        </p>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">5. Exclusión de Garantías y Limitación de Responsabilidad</h2>
        <p>
          Agencia IA Solutions no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse por:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li>Falta de disponibilidad, mantenimiento o efectivo funcionamiento del portal o de sus servicios.</li>
          <li>Existencia de virus o programas maliciosos en los contenidos a pesar de haber adoptado las medidas tecnológicas necesarias para evitarlo.</li>
          <li>La calidad, ejecución, presupuestos o garantías de los trabajos físicos de electricidad realizados por los técnicos o instaladores independientes asignados al usuario.</li>
        </ul>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">6. Enlaces a Terceros</h2>
        <p>
          En el caso de que en la web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, Agencia IA Solutions no ejercerá ningún tipo de control sobre dichos sitios y contenidos, ni asumirá responsabilidad alguna por los mismos.
        </p>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">7. Modificaciones</h2>
        <p>
          Agencia IA Solutions se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten como la forma en la que estos aparezcan presentados.
        </p>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">8. Legislación Aplicable y Jurisdicción</h2>
        <p>
          La relación entre el titular de la web y el usuario se regirá por la normativa española vigente. Para la resolución de cualquier controversia o litigio que pudiera derivarse del acceso o uso de esta web, ambas partes se someten a los Juzgados y Tribunales de la ciudad de Barcelona.
        </p>
      </section>
    </div>
  );
}
