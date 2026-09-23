import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Política de Cookies | Electricistas Barcelona',
  description: 'Información sobre el uso de cookies y tecnologías de almacenamiento en electricistasbarcelona.com según la guía de la AEPD.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/politica-de-cookies',
  }
};

export default function PoliticaCookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-slate-800 leading-relaxed text-sm">
      <Breadcrumbs
        currentPageTitle="Política de Cookies"
        currentPageUrl="https://electricistasenbarcelona.com/politica-de-cookies"
      />

      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Política de Cookies</h1>
        <p className="text-slate-500 text-xs">
          Última actualización: Septiembre 2026. Conforme a la Guía sobre el uso de cookies de la AEPD y LSSI-CE.
        </p>
      </div>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">1. ¿Qué son las Cookies?</h2>
        <p>
          Una cookie es un pequeño archivo de texto que se almacena en su navegador o dispositivo (ordenador, teléfono móvil o tableta) cuando visita un sitio web. Las cookies permiten a la página web recordar información sobre su visita, como el idioma preferido, sus opciones de navegación o mantener la seguridad de la sesión.
        </p>
        <p>
          Las cookies desempeñan un papel muy importante al mejorar la experiencia de usuario y adaptar los contenidos a sus necesidades.
        </p>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">2. Tipos de Cookies Utilizadas en este Sitio Web</h2>
        <p>
          El sitio web <strong>electricistasenbarcelona.com</strong> utiliza los siguientes tipos de cookies para su correcto funcionamiento y optimización:
        </p>
        <div className="space-y-3 pt-2">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-1">A. Cookies Técnicas y Estrictamente Necesarias</h3>
            <p className="text-xs text-slate-600">
              Son aquellas indispensables para posibilitar la navegación a través del portal web, permitir el envío del formulario de contacto y garantizar la carga rápida de los contenidos. Estas cookies no recopilan información personal identificable y están exentas de la obligación de consentimiento.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-1">B. Cookies Analíticas y de Rendimiento</h3>
            <p className="text-xs text-slate-600">
              Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de la web. Se utilizan únicamente con fines estadísticos y de mejora de los contenidos de forma agregada y anonimizada.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">3. Cuadro Detallado de Cookies</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300">
                <th className="p-3">Nombre</th>
                <th className="p-3">Tipología</th>
                <th className="p-3">Proveedor</th>
                <th className="p-3">Finalidad</th>
                <th className="p-3">Caducidad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="p-3 font-mono">__next_session / __cf_bm</td>
                <td className="p-3">Técnica / Seguridad</td>
                <td className="p-3 font-medium">Propia / Cloudflare</td>
                <td className="p-3">Gestión de sesión y protección de la infraestructura web.</td>
                <td className="p-3">Sesión / 30 min</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">_ga / _ga_*</td>
                <td className="p-3">Analítica</td>
                <td className="p-3 font-medium">Google Analytics (Anonimizado)</td>
                <td className="p-3">Medición agregada del tráfico y comportamiento de navegación.</td>
                <td className="p-3">2 años</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">4. Cómo Configurar o Desactivar las Cookies</h2>
        <p>
          Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador de Internet instalado en su dispositivo:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>
            <strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.
          </li>
          <li>
            <strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y Seguridad &gt; Cookies y datos del sitio.
          </li>
          <li>
            <strong>Apple Safari:</strong> Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.
          </li>
          <li>
            <strong>Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos del sitio.
          </li>
        </ul>
        <p className="text-xs text-slate-500 pt-2">
          Tenga en cuenta que si desactiva o bloquea el uso de cookies técnicas, es posible que algunas funcionalidades de la web no estén completamente operativas.
        </p>
      </section>

      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">5. Actualización de la Política de Cookies</h2>
        <p>
          Agencia IA Solutions puede modificar esta Política de Cookies en función de nuevas exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos (AEPD).
        </p>
      </section>
    </div>
  );
}
