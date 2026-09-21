export interface FAQItem {
  question: string;
  answer: string;
}

export interface SectionItem {
  id?: string;
  h2?: string;
  h3?: string;
  paragraphs: string[];
}

export interface CommercialCallout {
  title: string;
  text: string;
  linkText: string;
  linkHref: string;
}

export interface BlogPostData {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keyword: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  alt: string;
  author: string;
  intro: string[];
  commercialCallout: CommercialCallout;
  tableOfContents: { id: string; title: string }[];
  sections: SectionItem[];
  faqs: FAQItem[];
  ctaText: string;
  relatedSlugs: string[];
}

export const BLOG_POSTS_DATA: BlogPostData[] = [
  {
    slug: 'por-que-salta-el-diferencial',
    title: 'Por qué salta el diferencial y cómo saber cuál es la causa',
    metaTitle: 'Por qué salta el diferencial y cómo localizar la avería',
    description: 'Las 6 causas reales por las que salta el diferencial y cómo localizar cuál es la tuya en 10 minutos. Electricistas en Barcelona, 657 144 186.',
    keyword: 'por que salta el diferencial',
    category: 'Averías y Seguridad',
    readTime: '8 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/por-que-salta-el-diferencial.webp',
    alt: 'Cuadro eléctrico de vivienda con el interruptor diferencial bajado',
    author: 'Equipo Técnico Electricistas Barcelona',
    intro: [
      'Que salte el diferencial no es un capricho del cuadro eléctrico: es el sistema de protección haciendo exactamente lo que debe. El diferencial vigila que toda la corriente que entra en tu casa vuelva a salir. Cuando detecta que se está escapando una parte, aunque sean unos pocos miliamperios, corta el suministro en milésimas de segundo. Esa fuga puede ir a parar a una tubería, a la estructura del edificio o a una persona, y de ahí que la respuesta sea tan drástica.',
      'El problema aparece cuando salta una y otra vez. Ahí ya no hablamos de un susto puntual, sino de una avería que está avisando. En este artículo verás las seis causas habituales, cómo localizar la tuya con un método sencillo y en qué momento conviene dejar de investigar y llamar a un electricista.'
    ],
    commercialCallout: {
      title: '¿El diferencial de tu casa no deja de saltar?',
      text: 'Si el diferencial salta de forma repetida o tu cuadro tiene más de 15 años, te recomendamos valorar un',
      linkText: 'cambio de cuadro eléctrico',
      linkHref: '/cambio-de-cuadro-electrico/'
    },
    tableOfContents: [
      { id: 'que-hace-exactamente-el-diferencial', title: 'Qué hace exactamente el diferencial' },
      { id: 'las-seis-causas-por-las-que-salta-el-diferencial', title: 'Las seis causas por las que salta el diferencial' },
      { id: 'como-localizar-la-causa-paso-a-paso', title: 'Cómo localizar la causa paso a paso' },
      { id: 'que-no-deberias-hacer-nunca', title: 'Qué no deberías hacer nunca' },
      { id: 'cuando-llamar-a-un-electricista', title: 'Cuándo llamar a un electricista' }
    ],
    sections: [
      {
        id: 'que-hace-exactamente-el-diferencial',
        h2: 'Qué hace exactamente el diferencial',
        paragraphs: [
          'El diferencial es el interruptor más ancho del cuadro, normalmente con un botón de prueba marcado con una T. Su sensibilidad habitual en viviendas es de 30 miliamperios, un valor pensado para proteger a las personas. Conviene no confundirlo con los magnetotérmicos, más estrechos, que son los que saltan cuando enchufas demasiados aparatos a la vez y protegen el cable, no a ti.',
          'Esa diferencia es la primera pista del diagnóstico. Si lo que se baja es el diferencial, hay una fuga de corriente en algún punto. Si lo que se baja es un magnetotérmico, hay un exceso de consumo o un cortocircuito en ese circuito concreto.'
        ]
      },
      {
        id: 'las-seis-causas-por-las-que-salta-el-diferencial',
        h2: 'Las seis causas por las que salta el diferencial',
        paragraphs: [
          'A continuación detallamos los fallos más frecuentes que provocan el disparo continuado del diferencial en viviendas y locales.'
        ]
      },
      {
        h3: 'Un electrodoméstico con una derivación interna',
        paragraphs: [
          'Es la causa más frecuente con diferencia. Lavadoras, lavavajillas, termos y calderas son los sospechosos habituales, porque combinan agua y resistencias eléctricas. Cuando la resistencia se deteriora, parte de la corriente se va a la carcasa y de ahí a tierra.'
        ]
      },
      {
        h3: 'Humedad en la instalación',
        paragraphs: [
          'Una filtración, una pared que ha absorbido agua del vecino o una caja de registro en un baño mal sellada bastan para provocar fugas. El síntoma característico es que salta más los días de lluvia o justo después de ducharse, y que deja de saltar cuando la zona se seca.'
        ]
      },
      {
        h3: 'Un cable dañado dentro de la pared',
        paragraphs: [
          'Un clavo mal puesto al colgar un cuadro, una obra antigua o el simple envejecimiento del aislante pueden dejar un conductor rozando. Aquí el patrón es distinto: salta de forma aparentemente aleatoria y no se relaciona con ningún aparato concreto.'
        ]
      },
      {
        h3: 'Exceso de aparatos en el mismo circuito',
        paragraphs: [
          'Cuando muchos electrodomésticos comparten circuito, cada uno aporta una pequeña fuga natural. Por separado ninguna es suficiente para disparar el diferencial, pero sumadas sí. Es típico de viviendas antiguas donde toda la casa cuelga de dos o tres circuitos, en lugar de los circuitos independientes que exige la normativa actual.'
        ]
      },
      {
        h3: 'El propio diferencial está envejecido',
        paragraphs: [
          'Un diferencial es un dispositivo mecánico y se desgasta. Pasados diez o quince años pierde precisión y empieza a dispararse sin motivo real. Si tu cuadro tiene más de veinte años, esta posibilidad es tan probable como cualquiera de las anteriores, y es el momento de valorar un cambio de cuadro eléctrico.'
        ]
      },
      {
        h3: 'Una tormenta o un pico de tensión',
        paragraphs: [
          'Las sobretensiones de origen atmosférico provocan disparos puntuales. Si ha ocurrido una sola vez coincidiendo con una tormenta, rearma y olvídate. Si se repite sin tormenta de por medio, no era eso.'
        ]
      },
      {
        id: 'como-localizar-la-causa-paso-a-paso',
        h2: 'Cómo localizar la causa paso a paso',
        paragraphs: [
          'Este método funciona en la mayoría de los casos y no requiere herramientas. Baja todos los magnetotérmicos del cuadro y deja solo el diferencial. Súbelo: si aguanta, el problema está en alguno de los circuitos, no en el diferencial.',
          'A continuación ve subiendo los magnetotérmicos uno a uno, esperando unos segundos entre cada uno. Cuando el diferencial vuelva a caer, el último que subiste señala el circuito afectado. Desenchufa todo lo que cuelgue de ese circuito y repite la operación enchufando los aparatos de uno en uno. El que lo tire es el culpable.',
          'Si el diferencial no aguanta ni siquiera con todos los magnetotérmicos bajados, la fuga está antes del cuadro o en el propio diferencial. En ese caso no sigas: ahí ya hace falta un electricista con instrumentos de medida.'
        ]
      },
      {
        id: 'que-no-deberias-hacer-nunca',
        h2: 'Qué no deberías hacer nunca',
        paragraphs: [
          'Hay dos reacciones habituales que convierten un problema en un peligro. La primera es forzar el diferencial sujetándolo hacia arriba. La segunda es sustituirlo por uno de mayor sensibilidad para que «aguante más». En ambos casos estás desactivando la única protección que se interpone entre una fuga de corriente y tu familia.',
          'Tampoco tiene sentido rearmar diez veces al día durante semanas. Un diferencial que salta a diario está diciendo que hay un defecto activo en la instalación, y los defectos eléctricos no se resuelven solos.'
        ]
      },
      {
        id: 'cuando-llamar-a-un-electricista',
        h2: 'Cuándo llamar a un electricista',
        paragraphs: [
          'Llama si el diferencial salta más de una vez por semana, si no aguanta ni con todos los circuitos bajados, si huele a quemado en el cuadro o en algún enchufe, o si notas un ligero calambre al tocar un grifo o un electrodoméstico. Este último síntoma es el más serio de todos y no admite espera.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Por qué salta el diferencial sin nada enchufado?',
        answer: 'Porque la fuga no está en un aparato, sino en la instalación fija: humedad en una caja de registro, un cable dañado dentro de la pared o un diferencial envejecido que ya se dispara por su cuenta. Si con todos los circuitos bajados el diferencial sigue cayendo, el fallo está en el propio dispositivo o en la acometida.'
      },
      {
        question: '¿Es peligroso que salta el diferencial?',
        answer: 'Peligroso es que no salte. El disparo indica que el sistema de protección está funcionando. Lo que sí resulta peligroso es la causa que lo provoca si se deja sin resolver, y sobre todo anular el diferencial para que deje de molestar.'
      },
      {
        question: '¿Cuál es la diferencia entre el diferencial y el magnetotérmico?',
        answer: 'El diferencial protege a las personas de las fugas de corriente y es el interruptor ancho del cuadro. El magnetotérmico protege los cables frente a sobrecargas y cortocircuitos, y hay uno por cada circuito de la vivienda.'
      },
      {
        question: '¿Cada cuánto hay que cambiar un diferencial?',
        answer: 'No existe una obligación legal de sustituirlo en una fecha concreta, pero es un elemento mecánico que envejece. A partir de los quince años conviene comprobar mensualmente que el botón de prueba lo dispara y valorar su sustitución si no responde.'
      }
    ],
    ctaText: '¿El diferencial te salta a diario y no encuentras la causa? Nuestros electricistas localizan la fuga con instrumentos de medida y la reparan el mismo día. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['normativa-cuadro-electrico-vivienda', 'revision-instalacion-electrica', 'cambio-de-cuadro-electrico']
  },
  {
    slug: 'normativa-cuadro-electrico-vivienda',
    title: 'Qué debe llevar el cuadro eléctrico de una vivienda según la normativa',
    metaTitle: 'Normativa del cuadro eléctrico de vivienda: qué debe llevar',
    description: 'Qué exige el REBT al cuadro eléctrico de una vivienda: circuitos obligatorios, protecciones y grados de electrificación. Guía clara y actualizada.',
    keyword: 'normativa cuadro electrico vivienda',
    category: 'Normativa REBT',
    readTime: '9 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/normativa-cuadro-electrico-vivienda.webp',
    alt: 'Cuadro eléctrico de vivienda con circuitos independientes ordenados y etiquetados',
    author: 'Ingeniería y Normativa Electricistas Barcelona',
    intro: [
      'El cuadro eléctrico de una vivienda no admite improvisación. El Reglamento Electrotécnico de Baja Tensión fija qué protecciones debe haber, cuántos circuitos independientes son obligatorios y con qué criterio se dimensiona todo. Si tu cuadro se quedó en dos interruptores y una caja de plomos, no es que esté anticuado: es que no cumple.',
      'Este artículo resume lo que exige la normativa vigente en un lenguaje comprensible, para que puedas mirar tu propio cuadro y saber si está a la altura o necesita una adecuación reglamentaria.'
    ],
    commercialCallout: {
      title: '¿Quieres saber si tu cuadro eléctrico cumple el REBT?',
      text: 'Revisamos tu cuadro actual y te presupuestamos sin compromiso un',
      linkText: 'cambio de cuadro eléctrico normativo',
      linkHref: '/cambio-de-cuadro-electrico/'
    },
    tableOfContents: [
      { id: 'los-elementos-obligatorios-del-cuadro', title: 'Los elementos obligatorios del cuadro' },
      { id: 'los-circuitos-independientes-obligatorios', title: 'Los circuitos independientes obligatorios' },
      { id: 'grado-de-electrificacion-basico-y-elevado', title: 'Grado de electrificación básico y elevado' },
      { id: 'como-saber-si-tu-cuadro-cumple', title: 'Cómo saber si tu cuadro cumple' },
      { id: 'que-implica-adaptar-el-cuadro-a-la-normativa', title: 'Qué implica adaptar el cuadro a la normativa' }
    ],
    sections: [
      {
        id: 'los-elementos-obligatorios-del-cuadro',
        h2: 'Los elementos obligatorios del cuadro',
        paragraphs: [
          'La normativa técnica exige una serie de dispositivos de protección mínimos colocados en el carril DIN del cuadro principal:'
        ]
      },
      {
        h3: 'Interruptor General Automático',
        paragraphs: [
          'Es el que corta toda la vivienda y protege la instalación frente a sobrecargas generales. Va siempre en el primer lugar del cuadro y su calibre depende de la potencia contratada.'
        ]
      },
      {
        h3: 'Interruptor diferencial',
        paragraphs: [
          'Protege a las personas detectando fugas de corriente. En viviendas la sensibilidad es de 30 miliamperios. Cuando hay muchos circuitos se instala más de uno, repartiendo los circuitos entre ellos para que un fallo en la cocina no deje sin luz al dormitorio.'
        ]
      },
      {
        h3: 'Un magnetotérmico por circuito',
        paragraphs: [
          'Cada circuito de la vivienda debe tener su propia protección dimensionada según la sección del cable que alimenta. No vale un magnetotérmico grande para todo: ese es precisamente el defecto que convierte una sobrecarga en un incendio.'
        ]
      },
      {
        h3: 'Protección contra sobretensiones',
        paragraphs: [
          'En las instalaciones nuevas y en las reformas se incorporan protecciones frente a sobretensiones transitorias y permanentes, que evitan que un pico de tensión arruine todos los aparatos electrónicos de la casa.'
        ]
      },
      {
        id: 'los-circuitos-independientes-obligatorios',
        h2: 'Los circuitos independientes obligatorios',
        paragraphs: [
          'La normativa exige separar la instalación en circuitos por uso, y no mezclarlos. En un grado de electrificación básico son cinco: iluminación, tomas de corriente de uso general, cocina y horno, lavadora, lavavajillas y termo, y tomas de corriente de baños y cocina.',
          'Esta separación no es burocracia. Es lo que permite que, cuando falla el lavavajillas, no te quedes sin luz en toda la casa, y lo que hace posible localizar una avería en minutos en lugar de a ciegas.'
        ]
      },
      {
        id: 'grado-de-electrificacion-basico-y-elevado',
        h2: 'Grado de electrificación básico y elevado',
        paragraphs: [
          'El grado básico cubre las necesidades de una vivienda estándar. El grado elevado se aplica cuando hay superficie útil superior a 160 metros cuadrados, aire acondicionado, calefacción eléctrica, sistemas de automatización o previsión de punto de recarga para vehículo eléctrico, y exige circuitos adicionales y una potencia mayor.',
          'En las viviendas de Barcelona este punto es relevante: muchos pisos del Ensanche o de Gràcia con instalaciones antiguas han ido sumando aire acondicionado, vitrocerámica de inducción y placas de cocina sin revisar si el cuadro podía soportarlo.'
        ]
      },
      {
        id: 'como-saber-si-tu-cuadro-cumple',
        h2: 'Cómo saber si tu cuadro cumple',
        paragraphs: [
          'Hay señales que no requieren conocimientos técnicos. Si ves fusibles de porcelana o los llamados plomos, el cuadro es anterior a la normativa actual. Si hay menos de cinco magnetotérmicos, faltan circuitos obligatorios. Si no existe un interruptor diferencial ancho con botón de prueba, no hay protección de personas. Y si el cuadro no lleva ninguna etiqueta que identifique cada circuito, es señal de una instalación sin documentar.'
        ]
      },
      {
        id: 'que-implica-adaptar-el-cuadro-a-la-normativa',
        h2: 'Qué implica adaptar el cuadro a la normativa',
        paragraphs: [
          'Adaptar el cuadro no siempre obliga a rehacer toda la instalación. Si los cables tienen la sección adecuada y el aislamiento está en buen estado, la actuación se limita al cuadro. Cuando la instalación es muy antigua y no hay conductor de tierra, la adaptación del cuadro es solo la primera parte de una reforma de la instalación eléctrica.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Es obligatorio adaptar el cuadro eléctrico de una vivienda antigua?',
        answer: 'No existe una obligación general de reformar una instalación existente mientras no se modifique. Sí es obligatorio cuando se hace una reforma, se tramita un nuevo suministro, se amplía la potencia o se requiere un certificado de instalación eléctrica.'
      },
      {
        question: '¿Cuántos circuitos debe tener como mínimo una vivienda?',
        answer: 'Cinco en el grado de electrificación básico: iluminación, tomas generales, cocina y horno, lavadora y termo, y tomas de baño y cocina. El grado elevado añade circuitos según los equipos previstos.'
      },
      {
        question: '¿Puedo cambiar yo mismo el cuadro eléctrico?',
        answer: 'No. La manipulación del cuadro afecta a la parte de la instalación que debe intervenir un instalador autorizado, y cualquier certificado posterior exige que el trabajo esté ejecutado y firmado por un profesional habilitado.'
      }
    ],
    ctaText: '¿Quieres saber si tu cuadro cumple la normativa? Lo revisamos sin compromiso y te decimos exactamente qué hace falta. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['por-que-salta-el-diferencial', 'revision-instalacion-electrica', 'reforma-instalacion-electrica']
  },
  {
    slug: 'revision-instalacion-electrica',
    title: 'Revisión de la instalación eléctrica: cada cuánto y qué se comprueba',
    metaTitle: 'Revisión de la instalación eléctrica: cuándo y qué se mira',
    description: 'Cada cuánto revisar la instalación eléctrica de tu casa o negocio, qué se comprueba y cuándo la inspección es obligatoria. Te lo explicamos claro.',
    keyword: 'revision instalacion electrica',
    category: 'Mantenimiento Preventivo',
    readTime: '7 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/revision-instalacion-electrica.webp',
    alt: 'Electricista midiendo con un comprobador en el cuadro eléctrico de una vivienda',
    author: 'Servicio Técnico Autorizado',
    intro: [
      'Una instalación eléctrica no avisa cuando envejece. Sigue funcionando con normalidad mientras el aislamiento de los cables se degrada, las conexiones se aflojan por los ciclos de calor y la tierra pierde eficacia. El fallo aparece de golpe, y casi siempre en el peor momento.',
      'La revisión periódica es el único modo de anticiparse. En viviendas no es obligatoria, pero sí recomendable; en instalaciones comunes de edificios, garajes y locales, la normativa sí impone inspecciones con una periodicidad concreta. Aquí tienes los dos escenarios explicados.'
    ],
    commercialCallout: {
      title: '¿Necesitas revisar tu instalación eléctrica en Barcelona?',
      text: 'Si tu instalación tiene más de 20 años o presenta fallos, te asesoramos sobre una',
      linkText: 'reforma de instalación eléctrica',
      linkHref: '/reforma-instalacion-electrica/'
    },
    tableOfContents: [
      { id: 'cada-cuanto-conviene-revisar-una-instalacion-domestica', title: 'Cada cuánto conviene revisar una instalación doméstica' },
      { id: 'que-se-comprueba-en-una-revision', title: 'Qué se comprueba en una revisión' },
      { id: 'cuando-la-inspeccion-es-obligatoria', title: 'Cuándo la inspección es obligatoria' },
      { id: 'que-documento-recibes-al-terminar', title: 'Qué documento recibes al terminar' }
    ],
    sections: [
      {
        id: 'cada-cuanto-conviene-revisar-una-instalacion-domestica',
        h2: 'Cada cuánto conviene revisar una instalación doméstica',
        paragraphs: [
          'Como criterio práctico, una revisión cada diez años es razonable en una vivienda con instalación moderna. En pisos con más de veinticinco años sin ninguna intervención, la revisión deja de ser preventiva y pasa a ser urgente, sobre todo si nunca se ha comprobado la puesta a tierra.',
          'Hay momentos concretos que obligan a revisar antes de ese plazo: al comprar una vivienda de segunda mano, antes de una reforma, al instalar aire acondicionado o una placa de inducción, y siempre que aparezcan síntomas como disparos repetidos del diferencial, enchufes que se calientan o luces que parpadean. En ese punto ya no hablamos de revisión sino, muy probablemente, de una reforma de la instalación eléctrica.'
        ]
      },
      {
        id: 'que-se-comprueba-en-una-revision',
        h2: 'Qué se comprueba en una revisión',
        paragraphs: [
          'Durante una revisión técnica se ejecutan diversas comprobaciones fundamentales:'
        ]
      },
      {
        h3: 'Estado del cuadro y de las protecciones',
        paragraphs: [
          'Se verifica que existan las protecciones obligatorias, que el diferencial dispare correctamente al accionar el botón de prueba y que cada circuito tenga su magnetotérmico con el calibre adecuado a la sección del cable.'
        ]
      },
      {
        h3: 'Medida de la resistencia de tierra',
        paragraphs: [
          'Es la comprobación que más sorpresas da en edificios antiguos. Una tierra inexistente o degradada deja sin efecto buena parte del sistema de protección, aunque el cuadro parezca correcto.'
        ]
      },
      {
        h3: 'Aislamiento de los conductores',
        paragraphs: [
          'Se mide la resistencia de aislamiento de cada circuito. Valores bajos indican cables degradados o humedad, y anticipan disparos y derivaciones antes de que ocurran.'
        ]
      },
      {
        h3: 'Estado de mecanismos y cajas de registro',
        paragraphs: [
          'Se inspeccionan enchufes, interruptores y cajas buscando signos de calentamiento, conexiones flojas o empalmes mal hechos, que son el origen más frecuente de los incendios de origen eléctrico.'
        ]
      },
      {
        id: 'cuando-la-inspeccion-es-obligatoria',
        h2: 'Cuándo la inspección es obligatoria',
        paragraphs: [
          'En instalaciones comunes de edificios de viviendas, locales de pública concurrencia, garajes con un número relevante de plazas e instalaciones industriales, la normativa establece inspecciones periódicas realizadas por un organismo de control autorizado, con una periodicidad habitual de cinco años. La comunidad o el titular de la actividad es el responsable de encargarlas y de conservar los certificados.'
        ]
      },
      {
        id: 'que-documento-recibes-al-terminar',
        h2: 'Qué documento recibes al terminar',
        paragraphs: [
          'En una revisión voluntaria recibes un informe con el estado de cada punto comprobado y las actuaciones recomendadas por orden de prioridad. Si lo que necesitas es un documento oficial para dar de alta la luz o ampliar potencia, lo que corresponde es un boletín eléctrico (CIE), que se tramita con las mediciones oficiales correspondientes.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Es obligatorio revisar la instalación eléctrica de una vivienda?',
        answer: 'En viviendas particulares no existe una inspección periódica obligatoria, pero sí es exigible un certificado de instalación eléctrica en determinados trámites, como un alta de suministro o una ampliación de potencia. En zonas comunes, garajes y locales las inspecciones periódicas sí son obligatorias.'
      },
      {
        question: '¿Cuánto dura una revisión completa?',
        answer: 'En un piso estándar, entre una y dos horas, porque incluye medidas circuito por circuito y no solo una inspección visual.'
      },
      {
        question: '¿La revisión deja la casa sin luz?',
        answer: 'Solo durante los minutos en que se miden los aislamientos, ya que esa comprobación se hace con los circuitos sin tensión. El resto del proceso no interrumpe el suministro.'
      }
    ],
    ctaText: 'Revisamos la instalación de tu vivienda, comunidad o local y te entregamos un informe claro con lo que hay que hacer y en qué orden. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['reforma-instalacion-electrica', 'mantenimiento-electrico', 'boletin-electrico-barcelona']
  },
  {
    slug: 'senales-instalacion-electrica-obsoleta',
    title: 'Ocho señales de que tu instalación eléctrica se ha quedado obsoleta',
    metaTitle: '8 señales de que tu instalación eléctrica está obsoleta',
    description: 'Enchufes que se calientan, luces que parpadean, cables de tela... Las 8 señales que indican que tu instalación eléctrica necesita renovarse ya.',
    keyword: 'instalacion electrica antigua señales',
    category: 'Seguridad en el Hogar',
    readTime: '8 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/instalacion-electrica-obsoleta.webp',
    alt: 'Enchufe antiguo ennegrecido en la pared de un piso antiguo',
    author: 'Técnicos Autorizados Barcelona',
    intro: [
      'La mayoría de las instalaciones antiguas no fallan de golpe: avisan durante años con pequeñas señales que se normalizan hasta que dejan de parecer un problema. Una bombilla que parpadea, un enchufe tibio, un diferencial que salta de vez en cuando. Cada una por separado parece menor; juntas describen una instalación que ha llegado al final de su vida útil.',
      'Estas son las ocho señales que en nuestra experiencia anticipan la necesidad de renovar la instalación y qué significa cada una.'
    ],
    commercialCallout: {
      title: '¿Tu vivienda presenta señales de instalación vieja?',
      text: 'Consulta nuestro servicio especializado de',
      linkText: 'reforma de instalación eléctrica en Barcelona',
      linkHref: '/reforma-instalacion-electrica/'
    },
    tableOfContents: [
      { id: '1-hay-fusibles-o-plomos-en-lugar-de-magnetotermicos', title: '1. Hay fusibles o «plomos» en lugar de magnetotérmicos' },
      { id: '2-los-enchufes-se-calientan-o-estan-ennegrecidos', title: '2. Los enchufes se calientan o están ennegrecidos' },
      { id: '3-no-hay-toma-de-tierra', title: '3. No hay toma de tierra' },
      { id: '4-las-luces-parpadean-o-bajan-de-intensidad', title: '4. Las luces parpadean o bajan de intensidad' },
      { id: '5-el-diferencial-salta-con-frecuencia', title: '5. El diferencial salta con frecuencia' },
      { id: '6-los-cables-son-de-tela-o-de-goma-endurecida', title: '6. Los cables son de tela o de goma endurecida' },
      { id: '7-faltan-enchufes-por-todas-partes', title: '7. Faltan enchufes por todas partes' },
      { id: '8-nunca-se-ha-revisado-y-el-edificio-tiene-mas-de-treinta-anos', title: '8. Nunca se ha revisado y el edificio tiene más de treinta años' },
      { id: 'que-hacer-si-reconoces-tres-o-mas-senales', title: 'Qué hacer si reconoces tres o más señales' }
    ],
    sections: [
      {
        id: '1-hay-fusibles-o-plomos-en-lugar-de-magnetotermicos',
        h2: '1. Hay fusibles o «plomos» en lugar de magnetotérmicos',
        paragraphs: [
          'Es la señal más clara de todas. Los cuadros con portafusibles de porcelana son anteriores a la normativa actual y, casi sin excepción, vienen acompañados de una instalación sin circuitos independientes y sin protección de personas.'
        ]
      },
      {
        id: '2-los-enchufes-se-calientan-o-estan-ennegrecidos',
        h2: '2. Los enchufes se calientan o están ennegrecidos',
        paragraphs: [
          'El calor en un mecanismo indica una conexión floja o un conductor que no da la sección necesaria para el consumo que soporta. Es el origen más común de los incendios de causa eléctrica y no se resuelve cambiando el enchufe si el problema está en el cable.'
        ]
      },
      {
        id: '3-no-hay-toma-de-tierra',
        h2: '3. No hay toma de tierra',
        paragraphs: [
          'Los enchufes sin la lámina metálica lateral son de una época en la que no se instalaba tierra. Sin ella, la carcasa de un electrodoméstico con una derivación se convierte en un elemento peligroso, y el diferencial pierde buena parte de su eficacia.'
        ]
      },
      {
        id: '4-las-luces-parpadean-o-bajan-de-intensidad',
        h2: '4. Las luces parpadean o bajan de intensidad',
        paragraphs: [
          'Si al arrancar la lavadora o el microondas las luces se atenúan, la instalación está al límite de su capacidad. Suele ocurrir en viviendas donde todo cuelga de dos o tres circuitos.'
        ]
      },
      {
        id: '5-el-diferencial-salta-con-frecuencia',
        h2: '5. El diferencial salta con frecuencia',
        paragraphs: [
          'Un disparo ocasional es normal. Uno semanal indica una fuga activa. Si quieres localizarla antes de llamar, revisa nuestra guía detallada sobre por qué salta el diferencial.'
        ]
      },
      {
        id: '6-los-cables-son-de-tela-o-de-goma-endurecida',
        h2: '6. Los cables son de tela o de goma endurecida',
        paragraphs: [
          'El aislamiento antiguo se cuartea con el tiempo y deja el conductor expuesto dentro de la pared. Es un riesgo que no se ve y que no mejora: solo empeora.'
        ]
      },
      {
        id: '7-faltan-enchufes-por-todas-partes',
        h2: '7. Faltan enchufes por todas partes',
        paragraphs: [
          'Vivir a base de regletas y alargadores no es un problema de comodidad, sino el síntoma de una instalación diseñada para una casa que consumía una décima parte de lo que consume la tuya.'
        ]
      },
      {
        id: '8-nunca-se-ha-revisado-y-el-edificio-tiene-mas-de-treinta-anos',
        h2: '8. Nunca se ha revisado y el edificio tiene más de treinta años',
        paragraphs: [
          'En Barcelona hay barrios enteros con instalaciones originales de los años sesenta y setenta. Si nadie ha tocado la instalación desde entonces, la pregunta no es si necesita renovarse, sino cuándo.'
        ]
      },
      {
        id: 'que-hacer-si-reconoces-tres-o-mas-senales',
        h2: 'Qué hacer si reconoces tres o más señales',
        paragraphs: [
          'Con tres señales o más, lo razonable es no ir parcheando. Cada intervención aislada sobre una instalación agotada suele acabar costando más que haber planteado la renovación desde el principio. El punto de partida siempre es una revisión que mida el estado real de los cables y de la tierra, y a partir de ahí se decide si basta con el cuadro o hay que ir más allá.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Cuánto dura una instalación eléctrica?',
        answer: 'Los materiales modernos superan holgadamente los veinticinco años en condiciones normales. El problema de las instalaciones antiguas no es solo el desgaste, sino que fueron diseñadas para una demanda eléctrica muy inferior a la actual.'
      },
      {
        question: '¿Se puede renovar la instalación sin picar todas las paredes?',
        answer: 'En muchos casos sí, aprovechando los tubos corrugados existentes si están en buen estado y en el recorrido adecuado. Depende de cómo se ejecutó la instalación original, y eso se valora en la visita previa.'
      },
      {
        question: '¿Hay que renovar toda la casa de golpe?',
        answer: 'No necesariamente. Se puede planificar por fases, empezando por el cuadro y los circuitos críticos, siempre que el conjunto quede en condiciones seguras al final de cada fase.'
      }
    ],
    ctaText: 'Si reconoces varias de estas señales en tu casa, la revisión es el primer paso y no compromete a nada. Llámanos al 657 144 186 o escríbenos por WhatsApp y lo vemos.',
    relatedSlugs: ['reforma-instalacion-electrica', 'cambio-de-cuadro-electrico', 'por-que-salta-el-diferencial']
  },
  {
    slug: 'que-es-el-boletin-electrico',
    title: 'Qué es el boletín eléctrico y cuándo te lo van a pedir',
    metaTitle: 'Qué es el boletín eléctrico y cuándo lo necesitas',
    description: 'Qué es el boletín eléctrico, para qué sirve, quién puede emitirlo y en qué casos te lo van a pedir. Guía práctica sin tecnicismos.',
    keyword: 'boletin electrico',
    category: 'Certificados CIE',
    readTime: '8 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/que-es-el-boletin-electrico.webp',
    alt: 'Electricista autorizado cumplimentando el boletín eléctrico de una vivienda',
    author: 'Instalador Autorizado REIC',
    intro: [
      'El boletín eléctrico es el documento que acredita que una instalación cumple el Reglamento Electrotécnico de Baja Tensión. Su nombre oficial es Certificado de Instalación Eléctrica, aunque todo el mundo lo sigue llamando boletín, e incluso boletín de la luz.',
      'No es un trámite administrativo vacío: para emitirlo, un instalador autorizado tiene que comprobar físicamente la instalación, medir aislamientos y tierra, y responder con su firma de que todo está en orden. Por eso nadie puede emitirlo a distancia ni sin visitar la vivienda.'
    ],
    commercialCallout: {
      title: '¿Necesitas tramitar el boletín de la luz en Barcelona?',
      text: 'Consulta nuestro servicio oficial para obtener tu',
      linkText: 'boletín eléctrico en Barcelona',
      linkHref: '/boletin-electrico-barcelona/'
    },
    tableOfContents: [
      { id: 'para-que-sirve-exactamente', title: 'Para qué sirve exactamente' },
      { id: 'cuando-te-lo-van-a-pedir', title: 'Cuándo te lo van a pedir' },
      { id: 'quien-puede-emitirlo', title: 'Quién puede emitirlo' },
      { id: 'que-pasa-si-la-instalacion-no-cumple', title: 'Qué pasa si la instalación no cumple' },
      { id: 'cuanto-tiempo-es-valido', title: 'Cuánto tiempo es válido' }
    ],
    sections: [
      {
        id: 'para-que-sirve-exactamente',
        h2: 'Para qué sirve exactamente',
        paragraphs: [
          'El boletín es el documento que la distribuidora y la comercializadora exigen para conectar o modificar un suministro. Sin él no hay alta de luz nueva, ni ampliación de potencia por encima de ciertos valores, ni reactivación de un suministro que lleva años dado de baja.',
          'También sirve como garantía para el propietario. Un boletín en vigor significa que alguien con responsabilidad profesional ha certificado que la instalación es segura, algo que resulta especialmente útil al comprar o alquilar una vivienda.'
        ]
      },
      {
        id: 'cuando-te-lo-van-a-pedir',
        h2: 'Cuándo te lo van a pedir',
        paragraphs: [
          'Existen cuatro situaciones principales en las que la compañía suministradora te exigirá este documento:'
        ]
      },
      {
        h3: 'Alta de luz en una vivienda sin suministro',
        paragraphs: [
          'Es el caso más habitual. Obra nueva, vivienda que llevaba años vacía o suministro dado de baja: en todos ellos la compañía pedirá el certificado antes de conectar.'
        ]
      },
      {
        h3: 'Ampliación de potencia contratada',
        paragraphs: [
          'Si quieres subir la potencia y el nuevo valor supera lo que ampara la documentación existente, hará falta un certificado actualizado que acredite que la instalación soporta esa potencia.'
        ]
      },
      {
        h3: 'Instalaciones con muchos años de antigüedad',
        paragraphs: [
          'Cuando la documentación de la instalación supera las dos décadas, es frecuente que la compañía exija un certificado nuevo antes de autorizar cualquier cambio en el suministro.'
        ]
      },
      {
        h3: 'Reformas y cambios de uso',
        paragraphs: [
          'Una reforma que modifique la instalación, o el paso de vivienda a local o viceversa, obliga a certificar de nuevo la instalación resultante.'
        ]
      },
      {
        id: 'quien-puede-emitirlo',
        h2: 'Quién puede emitirlo',
        paragraphs: [
          'Solo una empresa instaladora habilitada e inscrita en el registro correspondiente de la comunidad autónoma. En Cataluña esa inscripción se realiza ante la Generalitat, y el instalador debe estar dado de alta como empresa instaladora de baja tensión. Un electricista sin esa habilitación puede hacer el trabajo, pero no puede firmar el certificado.',
          'Este punto es importante al pedir presupuesto: conviene confirmar desde el principio que quien va a venir puede realmente emitir el documento, y no solo ejecutar la instalación.'
        ]
      },
      {
        id: 'que-pasa-si-la-instalacion-no-cumple',
        h2: 'Qué pasa si la instalación no cumple',
        paragraphs: [
          'El instalador no puede certificar una instalación que no cumple. Lo que hará es indicarte qué defectos existen y qué actuación es necesaria para subsanarlos. Una vez corregidos, se emite el certificado sin más trámite.',
          'Los motivos más frecuentes de no conformidad son la ausencia de toma de tierra, la falta de circuitos independientes, un cuadro sin diferencial y secciones de cable insuficientes para la potencia solicitada.'
        ]
      },
      {
        id: 'cuanto-tiempo-es-valido',
        h2: 'Cuánto tiempo es válido',
        paragraphs: [
          'El certificado no caduca por sí mismo, pero las compañías suelen exigir que la documentación tenga una antigüedad inferior a veinte años para determinados trámites. Además, cualquier modificación relevante de la instalación deja sin validez práctica el certificado anterior, porque ya no describe lo que hay instalado.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Boletín eléctrico y certificado de instalación eléctrica son lo mismo?',
        answer: 'Sí. Boletín es el nombre coloquial; Certificado de Instalación Eléctrica, o CIE, es la denominación oficial del mismo documento.'
      },
      {
        question: '¿Se puede conseguir un boletín sin que nadie visite la casa?',
        answer: 'No. El instalador debe comprobar y medir la instalación presencialmente antes de firmarlo, porque asume responsabilidad profesional sobre lo que certifica.'
      },
      {
        question: '¿Cuánto tarda en emitirse?',
        answer: 'La visita y las comprobaciones se resuelven normalmente en una mañana; la tramitación posterior ante el organismo competente añade unos días hábiles.'
      },
      {
        question: '¿Necesito boletín para cambiar de compañía eléctrica?',
        answer: 'Un simple cambio de comercializadora no lo requiere. Sí puede pedirse si aprovechas para modificar la potencia contratada o si el suministro llevaba tiempo de baja.'
      }
    ],
    ctaText: 'Tramitamos el boletín eléctrico de tu vivienda o local en Barcelona, con la visita y las mediciones incluidas. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['boletin-electrico-barcelona', 'certificado-instalacion-electrica-cie', 'instalaciones-electricas-barcelona']
  },
  {
    slug: 'certificado-instalacion-electrica-cie',
    title: 'Certificado de instalación eléctrica (CIE): qué es y cómo conseguirlo',
    metaTitle: 'Certificado de instalación eléctrica (CIE): cómo obtenerlo',
    description: 'Qué es el CIE, qué información contiene, quién lo firma y los pasos exactos para conseguirlo. Todo lo que necesitas saber antes de pedirlo.',
    keyword: 'certificado de instalacion electrica',
    category: 'Gestiones y Trámites',
    readTime: '8 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/certificado-instalacion-electrica-cie.webp',
    alt: 'Documento del certificado de instalación eléctrica junto a un comprobador',
    author: 'Ingeniería Técnica Barcelona',
    intro: [
      'El Certificado de Instalación Eléctrica es el documento oficial que describe una instalación y acredita que cumple el reglamento. Es lo mismo que el popular boletín, pero conviene conocer su nombre formal porque es el que aparece en las comunicaciones de las compañías eléctricas y en los trámites administrativos.',
      'A diferencia de un informe de revisión, el CIE tiene efectos ante terceros: es el documento que la distribuidora acepta para conectar o modificar un suministro.'
    ],
    commercialCallout: {
      title: '¿Necesitas la emisión de tu certificado CIE oficial?',
      text: 'Gestionamos la tramitación completa de tu',
      linkText: 'boletín eléctrico CIE en Barcelona',
      linkHref: '/boletin-electrico-barcelona/'
    },
    tableOfContents: [
      { id: 'que-informacion-contiene-el-certificado', title: 'Qué información contiene el certificado' },
      { id: 'los-pasos-para-conseguirlo', title: 'Los pasos para conseguirlo' },
      { id: 'quien-puede-firmarlo', title: 'Quién puede firmarlo' },
      { id: 'diferencia-entre-cie-memoria-tecnica-y-proyecto', title: 'Diferencia entre CIE, memoria técnica y proyecto' }
    ],
    sections: [
      {
        id: 'que-informacion-contiene-el-certificado',
        h2: 'Qué información contiene el certificado',
        paragraphs: [
          'El CIE recoge los datos del titular y del emplazamiento, la potencia máxima admisible de la instalación, la descripción de los circuitos y sus protecciones, los resultados de las mediciones realizadas y los datos de la empresa instaladora que lo firma.',
          'Ese dato de potencia máxima admisible es el que más consecuencias prácticas tiene: marca hasta dónde puedes ampliar la potencia contratada sin tener que tocar la instalación.'
        ]
      },
      {
        id: 'los-pasos-para-conseguirlo',
        h2: 'Los pasos para conseguirlo',
        paragraphs: [
          'El procedimiento estándar para obtener el certificado consta de cuatro etapas:'
        ]
      },
      {
        h3: '1. Visita y comprobación',
        paragraphs: [
          'El instalador revisa la instalación completa y realiza las mediciones reglamentarias: continuidad de la tierra, resistencia de aislamiento y funcionamiento de las protecciones.'
        ]
      },
      {
        h3: '2. Subsanación de defectos, si los hay',
        paragraphs: [
          'Si algo no cumple, se corrige antes de certificar. Es la parte que puede alargar el proceso, y la razón por la que conviene encargarlo con margen y no el día antes de necesitar la luz.'
        ]
      },
      {
        h3: '3. Emisión y firma',
        paragraphs: [
          'El instalador cumplimenta el certificado y lo firma asumiendo la responsabilidad técnica de lo que declara.'
        ]
      },
      {
        h3: '4. Tramitación ante el organismo competente',
        paragraphs: [
          'El documento se registra ante la administración correspondiente y queda disponible para presentarlo a la compañía eléctrica.'
        ]
      },
      {
        id: 'quien-puede-firmarlo',
        h2: 'Quién puede firmarlo',
        paragraphs: [
          'Únicamente una empresa instaladora habilitada en baja tensión e inscrita en el registro de su comunidad autónoma. Es una habilitación formal y verificable, no una cuestión de experiencia: un electricista muy competente pero sin la inscripción no puede firmar el documento.'
        ]
      },
      {
        id: 'diferencia-entre-cie-memoria-tecnica-y-proyecto',
        h2: 'Diferencia entre CIE, memoria técnica y proyecto',
        paragraphs: [
          'Para instalaciones domésticas habituales basta el certificado. Cuando la potencia o el tipo de local superan ciertos umbrales, se exige además una memoria técnica de diseño y, en los casos mayores, un proyecto firmado por técnico competente. En una vivienda estándar rara vez se llega a este escenario, pero en locales comerciales y actividades de pública concurrencia es lo habitual.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Cuánto tarda en emitirse el CIE?',
        answer: 'La parte técnica se resuelve en una visita. Si no hay defectos que subsanar, el documento se emite el mismo día y la tramitación posterior añade unos días hábiles.'
      },
      {
        question: '¿El CIE caduca?',
        answer: 'No caduca formalmente, pero deja de ser válido en la práctica cuando se modifica la instalación, y las compañías suelen exigir documentación con menos de veinte años de antigüedad para ciertos trámites.'
      },
      {
        question: '¿Puedo pedir el CIE si la instalación la hizo otro electricista?',
        answer: 'Sí. Cualquier instalador habilitado puede certificar una instalación existente, siempre que la compruebe y cumpla el reglamento.'
      }
    ],
    ctaText: 'Emitimos y tramitamos el certificado de instalación eléctrica de tu vivienda o local. Llámanos al 657 144 186 o escríbenos por WhatsApp y te decimos qué necesitas en tu caso.',
    relatedSlugs: ['boletin-electrico-barcelona', 'que-es-el-boletin-electrico', 'instalaciones-electricas-barcelona']
  },
  {
    slug: 'ampliacion-de-potencia-electrica',
    title: 'Ampliación de potencia: qué necesitas y cómo se tramita',
    metaTitle: 'Ampliación de potencia: requisitos y cómo se tramita',
    description: 'Qué necesitas para ampliar la potencia contratada, cuándo hace falta boletín y qué límite marca tu instalación. Explicado paso a paso.',
    keyword: 'ampliacion de potencia',
    category: 'Suministro Eléctrico',
    readTime: '7 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/ampliacion-de-potencia-electrica.webp',
    alt: 'Cocina moderna con placa de inducción y varios electrodomésticos conectados',
    author: 'Asesores Técnicos Suministros',
    intro: [
      'Cada vez que aparece la placa de inducción, el aire acondicionado o un punto de recarga en una casa, la potencia contratada se queda corta. El síntoma es inconfundible: el interruptor general se baja al coincidir dos o tres aparatos grandes.',
      'Ampliar la potencia parece un trámite comercial, y en parte lo es, pero tiene un condicionante técnico que mucha gente descubre tarde: tu instalación tiene un máximo admisible, y por encima de él no se puede contratar más potencia sin tocar nada.'
    ],
    commercialCallout: {
      title: '¿Necesitas un nuevo boletín para subir la potencia?',
      text: 'Si tu instalación sobrepasa la potencia máxima admisible, tramitamos tu',
      linkText: 'boletín para ampliar potencia',
      linkHref: '/boletin-electrico-barcelona/'
    },
    tableOfContents: [
      { id: 'primero-comprueba-que-admite-tu-instalacion', title: 'Primero, comprueba qué admite tu instalación' },
      { id: 'los-pasos-de-la-ampliacion', title: 'Los pasos de la ampliación' },
      { id: 'que-pasa-con-el-icp', title: 'Qué pasa con el ICP' },
      { id: 'ampliacion-en-locales-y-en-comunidades', title: 'Ampliación en locales y en comunidades' }
    ],
    sections: [
      {
        id: 'primero-comprueba-que-admite-tu-instalacion',
        h2: 'Primero, comprueba qué admite tu instalación',
        paragraphs: [
          'Ese límite figura en la documentación de la instalación, en el certificado o boletín eléctrico. Si la potencia que quieres contratar está por debajo de ese valor, la gestión es sencilla. Si está por encima, hay que adecuar la instalación y emitir un certificado nuevo antes de que la compañía autorice el cambio.',
          'En viviendas antiguas este es el punto donde se detiene la mayoría de las ampliaciones: la instalación no soporta más potencia porque los cables y el cuadro se dimensionaron para otra época.'
        ]
      },
      {
        id: 'los-pasos-de-la-ampliacion',
        h2: 'Los pasos de la ampliación',
        paragraphs: [
          'Para tramitar la subida de potencia con garantías deben seguirse estos pasos:'
        ]
      },
      {
        h3: '1. Cálculo de la potencia que necesitas realmente',
        paragraphs: [
          'No se trata de pedir el máximo. Una potencia excesiva encarece la factura fija cada mes sin aportar nada. Se calcula a partir de los equipos que van a funcionar simultáneamente.'
        ]
      },
      {
        h3: '2. Revisión de la instalación y del cuadro',
        paragraphs: [
          'Se comprueba si la instalación admite el nuevo valor. A menudo la ampliación implica un cambio de cuadro eléctrico porque las protecciones existentes no son adecuadas para la nueva potencia.'
        ]
      },
      {
        h3: '3. Certificado actualizado si procede',
        paragraphs: [
          'Cuando hay que modificar la instalación, se emite el certificado que acredita el nuevo máximo admisible.'
        ]
      },
      {
        h3: '4. Solicitud a la comercializadora',
        paragraphs: [
          'Con la documentación en la mano, la solicitud se realiza a la comercializadora, que gestiona el cambio con la distribuidora. El nuevo valor queda activo en un plazo que depende de la compañía.'
        ]
      },
      {
        id: 'que-pasa-con-el-icp',
        h2: 'Qué pasa con el ICP',
        paragraphs: [
          'En las instalaciones actuales el control de potencia se realiza desde el propio contador inteligente, por lo que no hay que sustituir ningún elemento físico en la vivienda. En instalaciones antiguas con ICP independiente, el cambio de potencia puede requerir intervención en el cuadro.'
        ]
      },
      {
        id: 'ampliacion-en-locales-y-en-comunidades',
        h2: 'Ampliación en locales y en comunidades',
        paragraphs: [
          'En locales comerciales la ampliación suele ir ligada a la actividad y a su licencia, y exige documentación técnica adicional. En comunidades de vecinos aparece cada vez más asociada a la instalación de puntos de recarga en el garaje, donde el dimensionado del suministro común marca cuántos vehículos se pueden alimentar a la vez.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Puedo ampliar la potencia sin boletín?',
        answer: 'Sí, siempre que la nueva potencia esté dentro del máximo admisible que recoge la documentación vigente de tu instalación. Por encima de ese valor, el certificado actualizado es imprescindible.'
      },
      {
        question: '¿Cuánto tarda una ampliación de potencia?',
        answer: 'La parte técnica se resuelve en una visita si no hay que reformar. El plazo total depende de la compañía, que es quien activa el nuevo valor.'
      },
      {
        question: '¿Puedo volver a bajar la potencia más adelante?',
        answer: 'Sí, aunque las compañías aplican limitaciones temporales entre cambios de potencia. Es un motivo más para calcular bien desde el principio.'
      }
    ],
    ctaText: 'Calculamos la potencia que necesitas, revisamos si tu instalación la admite y te dejamos todo listo para tramitarla. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['boletin-electrico-barcelona', 'cambio-de-cuadro-electrico', 'instalaciones-electricas-barcelona']
  },
  {
    slug: 'por-que-se-calienta-un-enchufe',
    title: 'Por qué se calienta un enchufe y cuándo deberías preocuparte',
    metaTitle: 'Por qué se calienta un enchufe y cuándo es peligroso',
    description: 'Un enchufe caliente, negro o que chisporrotea siempre tiene causa. Te explicamos cuáles son y qué hacer antes de que pase a mayores.',
    keyword: 'por que se calienta un enchufe',
    category: 'Prevención de Averías',
    readTime: '7 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/por-que-se-calienta-un-enchufe.webp',
    alt: 'Clavija conectada a un enchufe de pared con signos de calentamiento',
    author: 'Servicio Técnico de Urgencias',
    intro: [
      'Un enchufe no debería estar caliente nunca. Ni templado después de horas de uso, ni tibio al tocar la placa. Cuando lo está, hay una resistencia donde no debería haberla, y toda resistencia genera calor que acaba degradando el plástico, el cobre y, en el peor de los casos, la pared.',
      'Es uno de los avisos más fiables de que algo va mal, y también uno de los que más se ignoran. Estas son las causas reales y qué hacer con cada una.'
    ],
    commercialCallout: {
      title: '¿Tienes enchufes deteriorados o defectuosos?',
      text: 'Sustituimos mecanismos viejos y reparamos líneas dañadas en nuestro servicio de',
      linkText: 'enchufes e iluminación',
      linkHref: '/enchufes-e-interruptores/'
    },
    tableOfContents: [
      { id: 'las-causas-mas-frecuentes', title: 'Las causas más frecuentes' },
      { id: 'que-significa-que-el-enchufe-este-negro', title: 'Qué significa que el enchufe esté negro' },
      { id: 'que-hacer-ahora-mismo', title: 'Qué hacer ahora mismo' },
      { id: 'cuando-es-una-urgencia', title: 'Cuándo es una urgencia' }
    ],
    sections: [
      {
        id: 'las-causas-mas-frecuentes',
        h2: 'Las causas más frecuentes',
        paragraphs: [
          'Existen 5 factores clave que explican por qué un enchufe empieza a emitir calor:'
        ]
      },
      {
        h3: 'Una conexión floja detrás del mecanismo',
        paragraphs: [
          'Los tornillos que sujetan los cables se aflojan con el tiempo por los ciclos de calentamiento y enfriamiento. El contacto deja de ser perfecto, aparece resistencia y con ella el calor. Es la causa número uno.'
        ]
      },
      {
        h3: 'El enchufe está desgastado',
        paragraphs: [
          'Las láminas metálicas internas pierden presión tras miles de conexiones. Si notas que la clavija entra floja, el contacto es deficiente. La solución pasa por sustituir el mecanismo, no por seguir usándolo con cuidado.'
        ]
      },
      {
        h3: 'Demasiado consumo para ese punto',
        paragraphs: [
          'Un calefactor, un aire portátil o una freidora de aire conectados a un enchufe pensado para cargar el móvil superan lo que ese punto puede entregar con seguridad, sobre todo si cuelga de un circuito compartido.'
        ]
      },
      {
        h3: 'Regletas y ladrones encadenados',
        paragraphs: [
          'Enchufar una regleta a otra multiplica los puntos de contacto y concentra el consumo de varios aparatos en una sola toma. Es una práctica tan común como peligrosa.'
        ]
      },
      {
        h3: 'Cable de sección insuficiente',
        paragraphs: [
          'En instalaciones antiguas el cable que alimenta la toma puede tener menos sección de la necesaria. Aquí el calentamiento no está solo en el enchufe: está en todo el recorrido del cable dentro de la pared, que es lo verdaderamente preocupante.'
        ]
      },
      {
        id: 'que-significa-que-el-enchufe-este-negro',
        h2: 'Qué significa que el enchufe esté negro',
        paragraphs: [
          'El ennegrecimiento indica que ya ha habido arco eléctrico o sobrecalentamiento sostenido. No es una mancha superficial que se pueda limpiar: es plástico degradado por el calor. Un enchufe negro se sustituye siempre, y antes de hacerlo hay que averiguar por qué llegó a ese estado, porque el mecanismo nuevo se degradará igual si la causa sigue ahí.'
        ]
      },
      {
        id: 'que-hacer-ahora-mismo',
        h2: 'Qué hacer ahora mismo',
        paragraphs: [
          'Desconecta lo que esté enchufado y no lo vuelvas a usar. Si el mecanismo está muy caliente o huele a quemado, baja el magnetotérmico de ese circuito. Si hay chispas visibles, humo o crepitación, baja el interruptor general y llama de inmediato.',
          'No intentes apretar los tornillos por tu cuenta sin cortar la tensión, y no sustituyas el mecanismo si no sabes con certeza que el circuito está sin corriente.'
        ]
      },
      {
        id: 'cuando-es-una-urgencia',
        h2: 'Cuándo es una urgencia',
        paragraphs: [
          'Es urgencia cuando hay olor a quemado, humo, chispas al enchufar o desenchufar, o cuando el calentamiento afecta a varios enchufes de la misma habitación. Ese último caso apunta a un problema del circuito completo y no de un mecanismo aislado.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Es normal que un enchufe esté templado si hay un aparato grande?',
        answer: 'Una ligera tibieza en la clavija de un aparato de alto consumo puede entrar dentro de lo esperable, pero la placa del enchufe en la pared no debería calentarse. Si lo hace, hay un problema de contacto o de sección.'
      },
      {
        question: '¿Puedo cambiar yo el enchufe quemado?',
        answer: 'Sustituir el mecanismo es sencillo, pero si no identificas y corriges la causa, el nuevo acabará igual. Y si el cable está dañado, cambiar el enchufe solo oculta el problema.'
      },
      {
        question: '¿Por qué se calienta si el diferencial no salta?',
        answer: 'Porque no hay fuga de corriente a tierra: hay resistencia en el contacto. El diferencial no detecta ese fenómeno, y por eso el calentamiento puede prolongarse durante meses sin que ninguna protección actúe.'
      }
    ],
    ctaText: 'Si un enchufe de tu casa se calienta o está ennegrecido, no esperes. Llámanos al 657 144 186 o escríbenos por WhatsApp y lo revisamos hoy mismo.',
    relatedSlugs: ['enchufes-e-interruptores', 'senales-instalacion-electrica-obsoleta', 'por-que-salta-el-diferencial']
  },
  {
    slug: 'se-ha-ido-la-luz-que-hacer',
    title: 'Se ha ido la luz en casa: qué comprobar antes de llamar',
    metaTitle: 'Se ha ido la luz en casa: qué hacer paso a paso',
    description: 'Cómo saber si el corte es tuyo o del edificio y qué comprobar antes de llamar. Electricistas de urgencia 24 h en Barcelona, 657 144 186.',
    keyword: 'se ha ido la luz en casa que hacer',
    category: 'Urgencias 24h',
    readTime: '7 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/se-ha-ido-la-luz-que-hacer.webp',
    alt: 'Persona iluminando con el móvil el cuadro eléctrico de una vivienda a oscuras',
    author: 'Guardia 24h Electricistas Barcelona',
    intro: [
      'Cuando se va la luz, los primeros dos minutos deciden si el problema se resuelve solo o necesitas a alguien. La secuencia de comprobaciones es siempre la misma y no requiere conocimientos técnicos, solo hacerla en el orden correcto.'
    ],
    commercialCallout: {
      title: '¿Corte de luz persistente o avería en el cuadro?',
      text: 'Si el automático no sube o el cuadro huele a quemado, solicita asistencia inmediata con nuestros',
      linkText: 'electricistas de urgencia 24h',
      linkHref: '/'
    },
    tableOfContents: [
      { id: '1-comprueba-si-el-corte-es-solo-tuyo', title: '1. Comprueba si el corte es solo tuyo' },
      { id: '2-mira-que-interruptor-se-ha-bajado', title: '2. Mira qué interruptor se ha bajado' },
      { id: '3-desconecta-antes-de-rearmar', title: '3. Desconecta antes de rearmar' },
      { id: '4-sube-los-interruptores-en-el-orden-correcto', title: '4. Sube los interruptores en el orden correcto' },
      { id: '5-si-no-sube-no-insistas', title: '5. Si no sube, no insistas' },
      { id: 'cuando-solo-se-va-la-luz-en-una-habitacion', title: 'Cuando solo se va la luz en una habitación' },
      { id: 'cuando-es-una-urgencia-real', title: 'Cuándo es una urgencia real' }
    ],
    sections: [
      {
        id: '1-comprueba-si-el-corte-es-solo-tuyo',
        h2: '1. Comprueba si el corte es solo tuyo',
        paragraphs: [
          'Asómate a la escalera o mira las ventanas de los vecinos. Si el edificio entero está a oscuras, es un corte de la distribuidora o del suministro general y no hay nada que puedas hacer en tu cuadro. Si solo estás tú a oscuras, el problema está dentro de tu vivienda.'
        ]
      },
      {
        id: '2-mira-que-interruptor-se-ha-bajado',
        h2: '2. Mira qué interruptor se ha bajado',
        paragraphs: [
          'Abre el cuadro y observa cuál está en posición de apagado. Si es el interruptor ancho con botón de prueba, es el diferencial y hay una fuga de corriente; tienes el diagnóstico completo en el artículo sobre por qué salta el diferencial. Si es uno de los estrechos, hay sobrecarga o cortocircuito en ese circuito concreto. Si el que se ha bajado es el general, el problema afecta a toda la instalación.'
        ]
      },
      {
        id: '3-desconecta-antes-de-rearmar',
        h2: '3. Desconecta antes de rearmar',
        paragraphs: [
          'Antes de volver a subir nada, desenchufa lo que estuvieras usando cuando se fue la luz. Rearmar con el aparato defectuoso todavía conectado provoca un nuevo disparo inmediato y, en algunos casos, daña la protección.'
        ]
      },
      {
        id: '4-sube-los-interruptores-en-el-orden-correcto',
        h2: '4. Sube los interruptores en el orden correcto',
        paragraphs: [
          'Primero el general, después el diferencial y por último los magnetotérmicos, de uno en uno y esperando unos segundos entre cada uno. Si al subir uno concreto vuelve a caer todo, ya sabes qué circuito está afectado.'
        ]
      },
      {
        id: '5-si-no-sube-no-insistas',
        h2: '5. Si no sube, no insistas',
        paragraphs: [
          'Un interruptor que no se queda arriba está indicando que el defecto sigue presente. Forzarlo repetidamente no lo arregla y puede empeorar la avería. Ese es el momento de llamar.'
        ]
      },
      {
        id: 'cuando-solo-se-va-la-luz-en-una-habitacion',
        h2: 'Cuando solo se va la luz en una habitación',
        paragraphs: [
          'Suele deberse a un magnetotérmico bajado o a una conexión defectuosa en una caja de registro del circuito. Si el magnetotérmico está arriba y esa zona sigue sin corriente, hay un corte en el recorrido del cable y hace falta localizarlo con instrumentos.'
        ]
      },
      {
        id: 'cuando-es-una-urgencia-real',
        h2: 'Cuándo es una urgencia real',
        paragraphs: [
          'Llama sin esperar si hay olor a quemado o humo en el cuadro, si el corte se repite varias veces al día, si algún elemento está caliente al tacto o si notas calambre al tocar grifos o electrodomésticos.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Por qué no sube el automático de la luz?',
        answer: 'Porque el defecto que lo hizo saltar sigue activo: un aparato con derivación, un cortocircuito en el circuito o un fallo de la propia protección. Insistir en subirlo no resuelve la causa.'
      },
      {
        question: '¿Puede irse la luz por culpa de un solo electrodoméstico?',
        answer: 'Sí, y es lo más habitual. Un termo, una lavadora o una nevera con una derivación interna hacen saltar el diferencial de toda la vivienda.'
      },
      {
        question: '¿Se puede vivir con un circuito desconectado hasta que venga el electricista?',
        answer: 'De forma temporal sí, siempre que el circuito afectado quede bajado y nadie intente rearmarlo. No es una solución, es una medida provisional.'
      }
    ],
    ctaText: 'Si la luz no vuelve o el problema se repite, atendemos urgencias las 24 horas en Barcelona y área metropolitana. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['por-que-salta-el-diferencial', 'cambio-de-cuadro-electrico', 'revision-instalacion-electrica']
  },
  {
    slug: 'reformar-instalacion-electrica-sin-picar-paredes',
    title: '¿Se puede reformar la instalación eléctrica sin picar todas las paredes?',
    metaTitle: 'Reformar la instalación eléctrica sin picar paredes',
    description: 'Cuándo se puede renovar la instalación aprovechando los tubos existentes, qué zonas obligan a picar y cuánto dura la obra. Te lo contamos.',
    keyword: 'cambiar instalacion electrica sin picar paredes',
    category: 'Reformas Eléctricas',
    readTime: '8 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/reforma-instalacion-electrica-sin-obra.webp',
    alt: 'Electricista pasando cable nuevo por un tubo corrugado existente en la pared',
    author: 'Equipo de Reformas Barcelona',
    intro: [
      'Es la primera pregunta que hace casi todo el mundo, y la respuesta corta es que en muchos casos sí. La respuesta larga depende de cómo se ejecutó la instalación original, y eso solo se sabe abriendo un par de cajas de registro y comprobándolo.'
    ],
    commercialCallout: {
      title: '¿Quieres renover tus cables sin destruir tus paredes?',
      text: 'Infórmate sobre cómo realizamos la',
      linkText: 'reforma de instalación eléctrica limpia en Barcelona',
      linkHref: '/reforma-instalacion-electrica/'
    },
    tableOfContents: [
      { id: 'de-que-depende-que-haya-que-picar-o-no', title: 'De qué depende que haya que picar o no' },
      { id: 'las-zonas-que-casi-siempre-obligan-a-intervenir', title: 'Las zonas que casi siempre obligan a intervenir' },
      { id: 'alternativas-cuando-no-se-puede-pasar-por-dentro', title: 'Alternativas cuando no se puede pasar por dentro' },
      { id: 'cuanto-dura-una-reforma-electrica', title: 'Cuánto dura una reforma eléctrica' },
      { id: 'hay-que-vaciar-la-casa', title: '¿Hay que vaciar la casa?' }
    ],
    sections: [
      {
        id: 'de-que-depende-que-haya-que-picar-o-no',
        h2: 'De qué depende que haya que picar o no',
        paragraphs: [
          'La clave está en los tubos corrugados. Si la instalación original se hizo empotrando los cables dentro de tubos y esos tubos están en buen estado y llegan a donde necesitas, se puede sustituir el cableado completo tirando del viejo y pasando el nuevo, sin tocar la pared. Es el escenario ideal y es frecuente en viviendas construidas a partir de los años ochenta.',
          'Si los cables van directamente empotrados en el yeso, sin tubo, no hay manera de renovarlos sin abrir. Esta es la situación habitual en viviendas más antiguas, y es una de las razones por las que la reforma de la instalación eléctrica en pisos del casco antiguo de Barcelona requiere plantearse de otra forma.'
        ]
      },
      {
        id: 'las-zonas-que-casi-siempre-obligan-a-intervenir',
        h2: 'Las zonas que casi siempre obligan a intervenir',
        paragraphs: [
          'Aunque los tubos estén en buen estado, hay puntos que suelen requerir obra: los nuevos circuitos que no existían antes, como el de la cocina de inducción o el del aire acondicionado; los enchufes añadidos en ubicaciones nuevas; y el recorrido desde el cuadro hasta las primeras cajas si se amplía el número de circuitos.'
        ]
      },
      {
        id: 'alternativas-cuando-no-se-puede-pasar-por-dentro',
        h2: 'Alternativas cuando no se puede pasar por dentro',
        paragraphs: [
          'Cuando pasar cables por el interior de las paredes resulta imposible sin picar rozas, existen soluciones alternativas muy eficaces:'
        ]
      },
      {
        h3: 'Canalización por falso techo o por moldura',
        paragraphs: [
          'En reformas donde ya se va a instalar falso techo, el cableado discurre por él y baja solo en los puntos necesarios. Las molduras perimetrales son otra opción, menos discreta pero mucho menos invasiva que picar.'
        ]
      },
      {
        h3: 'Aprovechar el rodapié técnico',
        paragraphs: [
          'Existen rodapiés preparados para alojar canalización eléctrica. Permiten llevar circuitos nuevos por todo el perímetro de la vivienda sin abrir rozas.'
        ]
      },
      {
        h3: 'Reforma por fases',
        paragraphs: [
          'Si la obra completa no es viable ahora, se puede empezar por el cuadro eléctrico y los circuitos críticos, y dejar el resto para una segunda fase, siempre que el conjunto quede en condiciones seguras al terminar cada etapa.'
        ]
      },
      {
        id: 'cuanto-dura-una-reforma-electrica',
        h2: 'Cuánto dura una reforma eléctrica',
        paragraphs: [
          'En un piso estándar en el que se aprovechan los tubos existentes, el trabajo suele completarse en unos días. Cuando hay que abrir rozas, el plazo se alarga porque entran en juego el picado, el cierre y el pintado, que ya no dependen solo del electricista.'
        ]
      },
      {
        id: 'hay-que-vaciar-la-casa',
        h2: '¿Hay que vaciar la casa?',
        paragraphs: [
          'No necesariamente. Se trabaja por zonas, dejando siempre circuitos operativos en el resto de la vivienda, de modo que se pueda seguir viviendo en ella salvo en las jornadas de mayor polvo.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Cómo sé si mi instalación tiene tubo corrugado?',
        answer: 'Se comprueba abriendo una caja de registro o un mecanismo. Es una verificación de cinco minutos que hacemos en la visita previa.'
      },
      {
        question: '¿Se puede renovar solo una parte de la casa?',
        answer: 'Sí, siempre que la parte renovada quede correctamente protegida desde el cuadro y el resto de la instalación no comprometa la seguridad del conjunto.'
      },
      {
        question: '¿Hay que rehacer también la toma de tierra?',
        answer: 'Si la vivienda no la tiene, sí. Es un elemento sin el cual el resto de protecciones pierde buena parte de su eficacia.'
      }
    ],
    ctaText: 'Vamos a tu casa, comprobamos si se puede renovar sin obra y te lo decimos con claridad antes de empezar nada. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['reforma-instalacion-electrica', 'cambio-de-cuadro-electrico', 'senales-instalacion-electrica-obsoleta']
  },
  {
    slug: 'toma-de-tierra-vivienda',
    title: 'Toma de tierra: para qué sirve y cómo saber si tu casa la tiene',
    metaTitle: 'Toma de tierra: para qué sirve y cómo saber si la tienes',
    description: 'Qué hace la toma de tierra, cómo comprobar si tu vivienda la tiene y qué riesgos asumes si no existe. Explicado sin tecnicismos.',
    keyword: 'toma de tierra',
    category: 'Protección Eléctrica',
    readTime: '7 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/toma-de-tierra-vivienda.webp',
    alt: 'Detalle de un enchufe con contacto de toma de tierra en una vivienda',
    author: 'Técnicos de Mantenimiento Barcelona',
    intro: [
      'La toma de tierra es el elemento de protección más ignorado de una vivienda, en parte porque no se ve y en parte porque, cuando falta, no pasa nada durante años. Hasta que pasa.'
    ],
    commercialCallout: {
      title: '¿Tu piso no dispone de puesta a tierra?',
      text: 'Modernizamos tu instalación y tendemos la red de tierra con nuestra',
      linkText: 'reforma de instalación eléctrica en Barcelona',
      linkHref: '/reforma-instalacion-electrica/'
    },
    tableOfContents: [
      { id: 'que-hace-exactamente', title: 'Qué hace exactamente' },
      { id: 'como-saber-si-tu-vivienda-la-tiene', title: 'Cómo saber si tu vivienda la tiene' },
      { id: 'que-pasa-si-tu-casa-no-tiene-tierra', title: 'Qué pasa si tu casa no tiene tierra' },
      { id: 'el-mito-del-enchufe-con-tierra-sin-cable', title: 'El mito del enchufe con tierra sin cable' }
    ],
    sections: [
      {
        id: 'que-hace-exactamente',
        h2: 'Qué hace exactamente',
        paragraphs: [
          'Cuando un electrodoméstico sufre una derivación interna, la corriente busca un camino hacia tierra. Si existe conductor de protección, esa corriente circula por él, el diferencial la detecta y corta el suministro en milésimas de segundo. Si no existe, el camino disponible es el cuerpo de quien toque la carcasa del aparato.',
          'Esa es toda la diferencia. La toma de tierra no evita el fallo: hace que el fallo se convierta en un corte de luz en lugar de en una descarga.'
        ]
      },
      {
        id: 'como-saber-si-tu-vivienda-la-tiene',
        h2: 'Cómo saber si tu vivienda la tiene',
        paragraphs: [
          'La comprobación visual más rápida son los enchufes: los que tienen láminas metálicas en los laterales están preparados para tierra. Ojo, porque estar preparados no significa que el conductor esté realmente conectado; en muchas reformas parciales se cambiaron los mecanismos sin llevar el cable de tierra hasta ellos.',
          'La comprobación fiable es una medición con instrumento, que además verifica que la resistencia de tierra está dentro de los valores correctos. Forma parte de cualquier revisión de la instalación.'
        ]
      },
      {
        id: 'que-pasa-si-tu-casa-no-tiene-tierra',
        h2: 'Qué pasa si tu casa no tiene tierra',
        paragraphs: [
          'Además del riesgo evidente, hay consecuencias prácticas. Sin toma de tierra no es posible obtener un certificado de instalación eléctrica, lo que bloquea altas de suministro y ampliaciones de potencia. Los fabricantes de electrodomésticos condicionan la garantía a una conexión correcta. Y los equipos electrónicos sufren más, porque muchos sistemas de filtrado de interferencias necesitan la referencia de tierra.',
          'Corregirlo implica llevar un conductor de protección desde el cuadro hasta cada punto, lo que en la práctica forma parte de una reforma de la instalación eléctrica.'
        ]
      },
      {
        id: 'el-mito-del-enchufe-con-tierra-sin-cable',
        h2: 'El mito del enchufe con tierra sin cable',
        paragraphs: [
          'Sustituir un enchufe antiguo por uno con contactos de tierra sin conectar nada crea una falsa sensación de seguridad. El aparato se conecta pensando que está protegido y no lo está. Es más honesto un enchufe antiguo, porque al menos no engaña.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Es obligatoria la toma de tierra en una vivienda?',
        answer: 'Es obligatoria en toda instalación que se ejecute o se reforme conforme a la normativa vigente, y es imprescindible para obtener el certificado de instalación eléctrica.'
      },
      {
        question: '¿Se puede instalar tierra en un piso antiguo?',
        answer: 'Sí. En edificios con toma de tierra general se conecta a ella; cuando no existe, hay que valorar la solución con la comunidad, porque la instalación de puesta a tierra del edificio es un elemento común.'
      },
      {
        question: '¿El diferencial sustituye a la toma de tierra?',
        answer: 'No. Son complementarios: el diferencial detecta la fuga, pero necesita que exista un camino a tierra para actuar con la rapidez y en las condiciones previstas.'
      }
    ],
    ctaText: 'Comprobamos si tu vivienda tiene toma de tierra y si funciona realmente, con medición incluida. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['reforma-instalacion-electrica', 'revision-instalacion-electrica', 'boletin-electrico-barcelona']
  },
  {
    slug: 'diferencia-magnetotermico-diferencial',
    title: 'Magnetotérmico y diferencial: cuál es cuál y qué protege cada uno',
    metaTitle: 'Magnetotérmico o diferencial: cuál es cuál y qué protege',
    description: 'Aprende a distinguir los interruptores de tu cuadro eléctrico y entiende qué protege cada uno. Guía visual y sencilla para cualquier vivienda.',
    keyword: 'diferencia entre magnetotermico y diferencial',
    category: 'Conceptos Eléctricos',
    readTime: '7 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/magnetotermico-vs-diferencial.webp',
    alt: 'Fila de interruptores en un cuadro eléctrico con el diferencial y los magnetotérmicos',
    author: 'Ingeniería Técnica de Instalaciones',
    intro: [
      'Casi todo el mundo llama «los plomos» o «los automáticos» a todo lo que hay en el cuadro. Pero esos interruptores no hacen lo mismo, y saber distinguirlos cambia por completo el diagnóstico cuando se va la luz.'
    ],
    commercialCallout: {
      title: '¿Necesitas actualizar las protecciones de tu cuadro?',
      text: 'Reemplazamos dispositivos obsoletos en nuestro servicio de',
      linkText: 'cambio de cuadro eléctrico',
      linkHref: '/cambio-de-cuadro-electrico/'
    },
    tableOfContents: [
      { id: 'como-distinguirlos-a-simple-vista', title: 'Cómo distinguirlos a simple vista' },
      { id: 'que-protege-el-diferencial', title: 'Qué protege el diferencial' },
      { id: 'que-protege-el-magnetotermico', title: 'Qué protege el magnetotérmico' },
      { id: 'que-protege-el-interruptor-general', title: 'Qué protege el interruptor general' },
      { id: 'por-que-importa-saber-cual-ha-saltado', title: 'Por qué importa saber cuál ha saltado' },
      { id: 'cuando-hay-que-cambiarlos', title: 'Cuándo hay que cambiarlos' }
    ],
    sections: [
      {
        id: 'como-distinguirlos-a-simple-vista',
        h2: 'Cómo distinguirlos a simple vista',
        paragraphs: [
          'El diferencial es más ancho que los demás, ocupa el espacio de dos módulos y tiene un pequeño botón, normalmente marcado con una T, que sirve para probarlo. Los magnetotérmicos son estrechos y hay uno por cada circuito de la vivienda. El interruptor general suele estar en el extremo, separado del resto.'
        ]
      },
      {
        id: 'que-protege-el-diferencial',
        h2: 'Qué protege el diferencial',
        paragraphs: [
          'Protege a las personas. Vigila que la corriente que entra sea igual a la que sale y, si detecta que se escapa una parte, corta. Su sensibilidad habitual en viviendas es de 30 miliamperios, un valor muy por debajo de lo que resulta peligroso para el cuerpo humano.',
          'Si el que salta es este, hay una fuga: humedad, un aparato con derivación o un cable dañado. El diagnóstico completo está en nuestro artículo sobre por qué salta el diferencial.'
        ]
      },
      {
        id: 'que-protege-el-magnetotermico',
        h2: 'Qué protege el magnetotérmico',
        paragraphs: [
          'Protege los cables. Salta cuando circula más corriente de la que el conductor puede soportar, ya sea por un exceso de aparatos conectados a la vez o por un cortocircuito. Sin él, el cable se calentaría hasta degradar el aislamiento, que es como empiezan la mayoría de los incendios de origen eléctrico.',
          'Por eso su calibre debe corresponderse con la sección del cable que protege. Sustituir un magnetotérmico por otro de mayor amperaje «para que no salte» es exactamente el error que desactiva esa protección.'
        ]
      },
      {
        id: 'que-protege-el-interruptor-general',
        h2: 'Qué protege el interruptor general',
        paragraphs: [
          'Es la protección global de la vivienda y el punto desde el que se corta todo el suministro. En las instalaciones actuales, el control de la potencia contratada se realiza desde el contador, no desde este interruptor.'
        ]
      },
      {
        id: 'por-que-importa-saber-cual-ha-saltado',
        h2: 'Por qué importa saber cuál ha saltado',
        paragraphs: [
          'Porque cada uno apunta a un problema distinto. Diferencial significa fuga de corriente y exige localizar dónde. Magnetotérmico significa exceso de consumo o cortocircuito en un circuito concreto. General significa que el problema afecta a toda la instalación. Llegar con ese dato a la llamada ahorra tiempo y acota la avería desde el primer minuto.'
        ]
      },
      {
        id: 'cuando-hay-que-cambiarlos',
        h2: 'Cuándo hay que cambiarlos',
        paragraphs: [
          'Cuando el botón de prueba del diferencial no lo dispara, cuando un magnetotérmico salta sin motivo aparente o no se queda arriba, y siempre que el cuadro tenga décadas de antigüedad. En ese último caso lo razonable no es sustituir piezas sueltas, sino plantear un cambio de cuadro eléctrico completo.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Cada cuánto hay que probar el botón del diferencial?',
        answer: 'Una vez al mes. Al pulsarlo debe dispararse de inmediato. Si no lo hace, el diferencial ha dejado de proteger y hay que sustituirlo.'
      },
      {
        question: '¿Puedo poner un magnetotérmico más grande para que no salte?',
        answer: 'No. El magnetotérmico se dimensiona según la sección del cable, no según lo que quieras enchufar. Aumentarlo permite que el cable se caliente por encima de lo seguro.'
      },
      {
        question: '¿Cuántos diferenciales debe tener una vivienda?',
        answer: 'Depende del número de circuitos. Repartirlos entre dos o más diferenciales evita que un fallo en un punto deje sin luz toda la casa.'
      }
    ],
    ctaText: '¿Tu cuadro no tiene diferencial o el botón de prueba no responde? Lo revisamos y lo adecuamos a la normativa. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['cambio-de-cuadro-electrico', 'normativa-cuadro-electrico-vivienda', 'por-que-salta-el-diferencial']
  },
  {
    slug: 'instalacion-electrica-local-comercial',
    title: 'Instalación eléctrica de un local comercial: qué se te va a exigir',
    metaTitle: 'Instalación eléctrica de un local comercial: qué te exigen',
    description: 'Requisitos eléctricos para abrir un local: circuitos, alumbrado de emergencia, certificados y licencia de actividad. Lo que debes prever antes.',
    keyword: 'instalacion electrica local comercial',
    category: 'Servicios B2B',
    readTime: '9 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/instalacion-electrica-local-comercial.webp',
    alt: 'Local comercial en obra con instalación eléctrica vista en el techo',
    author: 'Departamento Técnico B2B Barcelona',
    intro: [
      'La instalación eléctrica de un local no es la de una vivienda con más metros. Cambian las exigencias documentales, aparecen obligaciones que en casa no existen y, sobre todo, el resultado condiciona la licencia de actividad. Conviene saberlo antes de firmar el alquiler, no después.'
    ],
    commercialCallout: {
      title: '¿Vas a abrir o reformar un negocio en Barcelona?',
      text: 'Diseñamos y ejecutamos la',
      linkText: 'instalación eléctrica para locales y oficinas',
      linkHref: '/electricista-locales-y-oficinas/'
    },
    tableOfContents: [
      { id: 'lo-primero-que-tipo-de-local-es', title: 'Lo primero: qué tipo de local es' },
      { id: 'los-elementos-que-no-pueden-faltar', title: 'Los elementos que no pueden faltar' },
      { id: 'documentacion-certificado-memoria-o-proyecto', title: 'Documentación: certificado, memoria o proyecto' },
      { id: 'inspecciones-periodicas', title: 'Inspecciones periódicas' },
      { id: 'el-error-mas-caro-dejar-la-electrica-para-el-final', title: 'El error más caro: dejar la eléctrica para el final' }
    ],
    sections: [
      {
        id: 'lo-primero-que-tipo-de-local-es',
        h2: 'Lo primero: qué tipo de local es',
        paragraphs: [
          'La normativa distingue entre locales ordinarios y locales de pública concurrencia, categoría que incluye bares, restaurantes, gimnasios, clínicas, salas y comercios a partir de cierto aforo o superficie. Los de pública concurrencia tienen requisitos bastante más estrictos y casi siempre exigen documentación técnica adicional.',
          'Esta clasificación determina desde el principio el alcance del trabajo y es lo primero que comprobamos al valorar una instalación para locales y oficinas.'
        ]
      },
      {
        id: 'los-elementos-que-no-pueden-faltar',
        h2: 'Los elementos que no pueden faltar',
        paragraphs: [
          'En cualquier adecuación comercial deben implementarse de forma obligatoria los siguientes sistemas:'
        ]
      },
      {
        h3: 'Cuadro eléctrico dimensionado para la actividad',
        paragraphs: [
          'No basta con replicar el de una vivienda. Hay que prever los consumos reales del negocio, con circuitos independientes para climatización, cocina, escaparate, iluminación general y tomas de fuerza.'
        ]
      },
      {
        h3: 'Alumbrado de emergencia y señalización',
        paragraphs: [
          'Es obligatorio en recorridos de evacuación, salidas y cuadros eléctricos. Es uno de los puntos que más incidencias genera en las inspecciones, tanto por ausencia como por una ubicación incorrecta.'
        ]
      },
      {
        h3: 'Protección diferencial adecuada',
        paragraphs: [
          'En locales con público se refuerza la protección de personas, y es habitual sectorizarla para que un fallo no deje todo el local a oscuras en plena actividad.'
        ]
      },
      {
        h3: 'Instalación de puesta a tierra verificable',
        paragraphs: [
          'Debe estar ejecutada y medida, no supuesta. Es requisito para certificar la instalación.'
        ]
      },
      {
        id: 'documentacion-certificado-memoria-o-proyecto',
        h2: 'Documentación: certificado, memoria o proyecto',
        paragraphs: [
          'Según la potencia y el tipo de local, la documentación exigible va desde el certificado de instalación eléctrica hasta una memoria técnica de diseño o un proyecto firmado por técnico competente. En locales de pública concurrencia el listón sube y conviene planificarlo desde el inicio, porque condiciona plazos.',
          'En todos los casos necesitarás el certificado de instalación eléctrica para dar de alta el suministro con la potencia que la actividad requiere.'
        ]
      },
      {
        id: 'inspecciones-periodicas',
        h2: 'Inspecciones periódicas',
        paragraphs: [
          'Muchos locales quedan sujetos a inspecciones periódicas por un organismo de control autorizado, con una periodicidad habitual de cinco años. El titular de la actividad es el responsable de encargarlas y de conservar los certificados, y su ausencia puede aparecer en cualquier comprobación administrativa.'
        ]
      },
      {
        id: 'el-error-mas-caro-dejar-la-electrica-para-el-final',
        h2: 'El error más caro: dejar la eléctrica para el final',
        paragraphs: [
          'En la mayoría de las aperturas que se retrasan, el cuello de botella es eléctrico: se descubre tarde que la potencia disponible no da para la actividad prevista, y ampliarla implica plazos de compañía que nadie había contemplado. Comprobar la potencia disponible en el local antes de comprometerse ahorra semanas.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Puedo abrir el local con la instalación que ya tenía el anterior inquilino?',
        answer: 'Solo si la actividad es la misma y la instalación está certificada y en condiciones. Un cambio de actividad normalmente obliga a adecuar la instalación y a certificarla de nuevo.'
      },
      {
        question: '¿Cuánta potencia necesita un local?',
        answer: 'Depende por completo de la actividad: no es lo mismo una tienda de ropa que una cocina profesional. Se calcula sumando los equipos previstos con sus coeficientes de simultaneidad.'
      },
      {
        question: '¿El alumbrado de emergencia es obligatorio en cualquier local?',
        answer: 'Es exigible en los recorridos de evacuación, salidas y puntos señalados por la normativa. En locales de pública concurrencia los requisitos son más amplios.'
      }
    ],
    ctaText: 'Nos encargamos de la instalación eléctrica de tu local y de toda la documentación para la licencia. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['electricista-locales-y-oficinas', 'boletin-electrico-barcelona', 'mantenimiento-electrico']
  },
  {
    slug: 'domotica-sin-obra',
    title: 'Domótica sin obra: qué puedes automatizar y qué no',
    metaTitle: 'Domótica sin obra: qué puedes automatizar en tu casa',
    description: 'Qué se puede automatizar sin reformar, qué necesita cableado y cómo evitar montar una casa llena de aparatos que no se hablan entre sí.',
    keyword: 'domotica sin obra',
    category: 'Automatización del Hogar',
    readTime: '8 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/domotica-sin-obra.webp',
    alt: 'Salón de vivienda con persianas motorizadas e iluminación regulable',
    author: 'Especialistas en Domótica Barcelona',
    intro: [
      'La domótica dejó de ser un lujo reservado a las casas grandes, pero sigue arrastrando dos malentendidos: que obliga a reformar y que consiste en comprar aparatos sueltos. Ni una cosa ni la otra.'
    ],
    commercialCallout: {
      title: '¿Quieres automatizar la iluminación o clima de tu casa?',
      text: 'Descubre todas las posibilidades de nuestro servicio de',
      linkText: 'domótica inteligente en Barcelona',
      linkHref: '/domotica-barcelona/'
    },
    tableOfContents: [
      { id: 'que-se-puede-hacer-sin-tocar-la-instalacion', title: 'Qué se puede hacer sin tocar la instalación' },
      { id: 'que-si-requiere-intervencion', title: 'Qué sí requiere intervención' },
      { id: 'el-error-mas-comun-comprar-antes-de-decidir-el-sistema', title: 'El error más común: comprar antes de decidir el sistema' },
      { id: 'que-pasa-si-se-cae-internet', title: 'Qué pasa si se cae internet' }
    ],
    sections: [
      {
        id: 'que-se-puede-hacer-sin-tocar-la-instalacion',
        h2: 'Qué se puede hacer sin tocar la instalación',
        paragraphs: [
          'Existen múltiples soluciones domóticas avanzadas que no exigen ninguna obra ni rozas:'
        ]
      },
      {
        h3: 'Iluminación regulable y por escenas',
        paragraphs: [
          'Sustituyendo los mecanismos existentes por módulos que se alojan en la propia caja del interruptor, se consigue regulación, encendidos programados y escenas, sin abrir la pared. Es la intervención con mejor relación entre esfuerzo y resultado.'
        ]
      },
      {
        h3: 'Persianas motorizadas',
        paragraphs: [
          'Existen motores que se instalan en el eje de la persiana aprovechando el cajón existente. Si ya hay cable hasta el interruptor de la persiana, la instalación es directa.'
        ]
      },
      {
        h3: 'Control de la climatización',
        paragraphs: [
          'Los termostatos y controladores de aire acondicionado se integran sin obra y son, en la práctica, la automatización que más ahorro genera.'
        ]
      },
      {
        h3: 'Enchufes y circuitos controlados',
        paragraphs: [
          'Permiten apagar de verdad los equipos en espera, programar el termo o cortar la alimentación de un circuito completo al salir de casa. Si alguno de esos puntos no existe todavía, se resuelve al instalar los enchufes necesarios.'
        ]
      },
      {
        id: 'que-si-requiere-intervencion',
        h2: 'Qué sí requiere intervención',
        paragraphs: [
          'La automatización de accesos, el riego, la detección de fugas de agua con corte automático y cualquier sistema cableado tipo bus necesitan llevar cable hasta puntos donde ahora no hay nada. Si la vivienda va a pasar por una reforma de la instalación eléctrica, es el momento de dejarlo previsto: hacerlo después cuesta el doble.'
        ]
      },
      {
        id: 'el-error-mas-comun-comprar-antes-de-decidir-el-sistema',
        h2: 'El error más común: comprar antes de decidir el sistema',
        paragraphs: [
          'Llenar la casa de dispositivos de marcas distintas que no se comunican entre sí acaba en una colección de aplicaciones y en una automatización que solo funciona cuando el wifi va bien. Lo sensato es decidir primero qué quieres automatizar y con qué criterio, y elegir después los componentes, priorizando que todo pueda convivir bajo un mismo control.'
        ]
      },
      {
        id: 'que-pasa-si-se-cae-internet',
        h2: 'Qué pasa si se cae internet',
        paragraphs: [
          'Es la pregunta correcta. Un sistema bien planteado mantiene el control local: los interruptores de la pared siguen funcionando y las automatizaciones esenciales no dependen de un servidor externo. Si al caerse el wifi te quedas sin poder encender una luz, el sistema está mal diseñado.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Puedo domotizar solo una habitación?',
        answer: 'Sí, y suele ser la mejor forma de empezar. Permite comprobar si el sistema encaja con tu forma de vivir antes de extenderlo al resto.'
      },
      {
        question: '¿La domótica sin obra es menos fiable?',
        answer: 'No necesariamente. La diferencia está en la elección de componentes y en el diseño, no en si hay obra. Un sistema inalámbrico bien planteado es perfectamente estable.'
      },
      {
        question: '¿Sirve mi instalación actual?',
        answer: 'Si es moderna y tiene neutro en las cajas de los interruptores, casi siempre sí. En instalaciones antiguas sin neutro hay soluciones, pero condicionan qué componentes se pueden usar.'
      }
    ],
    ctaText: 'Te decimos qué se puede automatizar en tu casa sin obra y qué conviene dejar previsto. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['domotica-barcelona', 'reforma-instalacion-electrica', 'enchufes-e-interruptores']
  },
  {
    slug: 'punto-de-recarga-garaje-comunidad',
    title: 'Punto de recarga en el garaje de la comunidad: qué necesitas saber',
    metaTitle: 'Punto de recarga en el garaje de la comunidad: cómo hacerlo',
    description: 'Qué dice la ley sobre instalar un cargador en tu plaza, qué hay que comunicar a la comunidad y cómo se organiza la instalación del garaje.',
    keyword: 'punto de recarga garaje comunidad',
    category: 'Movilidad Eléctrica',
    readTime: '8 min de lectura',
    date: '21 de Septiembre, 2026',
    image: '/images/blog/punto-de-recarga-garaje-comunidad.webp',
    alt: 'Punto de recarga instalado en la pared de una plaza de garaje comunitario',
    author: 'Instaladores Autorizados ITC-BT-52',
    intro: [
      'Instalar un cargador en tu plaza genera muchas más dudas de las necesarias, casi todas relacionadas con la comunidad. La buena noticia es que la normativa es bastante más favorable de lo que la mayoría de los propietarios cree.'
    ],
    commercialCallout: {
      title: '¿Buscas instalar tu cargador de coche eléctrico en el garaje?',
      text: 'Conoce cómo trabajamos el montaje para',
      linkText: 'comunidades de vecinos en Barcelona',
      linkHref: '/electricista-comunidades-de-vecinos/'
    },
    tableOfContents: [
      { id: 'hace-falta-permiso-de-la-comunidad', title: '¿Hace falta permiso de la comunidad?' },
      { id: 'las-dos-formas-de-plantearlo', title: 'Las dos formas de plantearlo' },
      { id: 'el-limite-real-la-potencia-disponible', title: 'El límite real: la potencia disponible' },
      { id: 'que-documentacion-genera-la-instalacion', title: 'Qué documentación genera la instalación' },
      { id: 'protecciones-especificas', title: 'Protecciones específicas' }
    ],
    sections: [
      {
        id: 'hace-falta-permiso-de-la-comunidad',
        h2: '¿Hace falta permiso de la comunidad?',
        paragraphs: [
          'No hace falta autorización. La Ley de Propiedad Horizontal establece que la instalación de un punto de recarga para vehículo eléctrico en una plaza individual solo requiere comunicación previa a la comunidad, siempre que el consumo se individualice y lo asuma el propietario que lo instala.',
          'Esto significa que la junta no puede impedirlo, aunque sí puede indicar por dónde debe discurrir la canalización para no comprometer otros elementos comunes. En la práctica, las instalaciones que se hacen de acuerdo con el administrador y con un trazado ordenado evitan casi todos los conflictos posteriores.'
        ]
      },
      {
        id: 'las-dos-formas-de-plantearlo',
        h2: 'Las dos formas de plantearlo',
        paragraphs: [
          'A la hora de llevar energía hasta la plaza de garaje existen dos enfoques:'
        ]
      },
      {
        h3: 'Instalación individual',
        paragraphs: [
          'Se lleva una línea desde el contador del propietario o desde un contador propio hasta la plaza. Es la solución más rápida cuando solo hay un interesado.'
        ]
      },
      {
        h3: 'Preinstalación colectiva del garaje',
        paragraphs: [
          'Se ejecuta una canalización general a la que se van conectando los vecinos según la vayan necesitando. Requiere una decisión de la comunidad, pero es mucho más barata por plaza y evita que el garaje acabe lleno de tubos improvisados. Es la opción que recomendamos en las actuaciones para comunidades de vecinos cuando hay varios propietarios interesados a medio plazo.'
        ]
      },
      {
        id: 'el-limite-real-la-potencia-disponible',
        h2: 'El límite real: la potencia disponible',
        paragraphs: [
          'Este es el punto técnico que decide todo. Si varios vecinos cargan a la vez, la potencia del suministro puede quedarse corta. Se resuelve de dos formas: con un sistema de gestión de carga que reparte la potencia disponible entre los puntos activos, o con una ampliación de potencia del suministro correspondiente.',
          'Los sistemas de gestión de carga son la solución más razonable en la mayoría de los garajes, porque aprovechan que rara vez todos los vehículos cargan simultáneamente.'
        ]
      },
      {
        id: 'que-documentacion-genera-la-instalacion',
        h2: 'Qué documentación genera la instalación',
        paragraphs: [
          'La instalación debe ejecutarla una empresa instaladora habilitada y requiere certificado de instalación eléctrica (CIE). En instalaciones colectivas o de cierta potencia puede exigirse documentación técnica adicional. Conviene conservarla: es lo que acredita que la instalación es conforme ante la comunidad y ante el seguro del edificio.'
        ]
      },
      {
        id: 'protecciones-especificas',
        h2: 'Protecciones específicas',
        paragraphs: [
          'Un punto de recarga no se conecta a un circuito cualquiera. Necesita línea propia, protección diferencial específica para este uso y protección contra sobrecargas dimensionada para cargas prolongadas, ya que un vehículo puede estar consumiendo a plena potencia durante horas.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿La comunidad puede negarse a que instale un cargador?',
        answer: 'No puede impedir la instalación en una plaza de uso privativo cuando se cumple el procedimiento de comunicación previa y el propietario asume el coste y el consumo. Sí puede indicar condiciones razonables sobre el trazado.'
      },
      {
        question: '¿Puedo cargar el coche con un enchufe normal del garaje?',
        answer: 'No es una solución válida como instalación permanente. Un enchufe convencional no está pensado para entregar corriente elevada durante horas y es una causa frecuente de sobrecalentamiento.'
      },
      {
        question: '¿Y si más adelante otros vecinos quieren instalarlo?',
        answer: 'Por eso conviene dejar prevista una canalización general desde el principio. Añadir plazas después sobre una preinstalación bien hecha es sencillo; hacerlo sobre instalaciones individuales improvisadas, no.'
      }
    ],
    ctaText: 'Estudiamos tu garaje, calculamos la potencia disponible y planteamos la instalación individual o colectiva que encaje. Llámanos al 657 144 186 o escríbenos por WhatsApp.',
    relatedSlugs: ['electricista-comunidades-de-vecinos', 'instalaciones-electricas-barcelona', 'ampliacion-de-potencia-electrica']
  }
];
