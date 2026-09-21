export interface ZonaCobertura {
  name: string;
  href: string;
  url: string;
  detail: string;
}

export interface BlogGuide {
  title: string;
  desc: string;
  href: string;
  url: string;
  category: string;
  color: string;
}

export const zonasCobertura: ZonaCobertura[] = [
  { name: 'Barcelona Ciudad', href: '/', url: '/', detail: 'Eixample, Gràcia, Sarrià, Les Corts, Sant Martí, Sants, Horta...' },
  { name: 'Badalona', href: '/electricista-badalona/', url: '/electricista-badalona/', detail: 'Centre, Montigalà, Progrés, Llefià, Gorg' },
  { name: 'Terrassa', href: '/electricista-terrassa/', url: '/electricista-terrassa/', detail: 'Centre, Ca n\'Aurell, Sant Pere, La Grípia' },
  { name: 'Sabadell', href: '/electricista-sabadell/', url: '/electricista-sabadell/', detail: 'Centre, Creu Alta, Eixample, Ca n\'Oriac' },
  { name: 'L\'Hospitalet de Llobregat', href: '/electricista-hospitalet/', url: '/electricista-hospitalet/', detail: 'Bellvitge, Collblanc, Florida, Santa Eulàlia' },
  { name: 'Sant Cugat del Vallès', href: '/electricista-sant-cugat/', url: '/electricista-sant-cugat/', detail: 'Centre, Volpelleres, Valldoreix, Mira-sol' },
  { name: 'Castelldefels', href: '/electricista-castelldefels/', url: '/electricista-castelldefels/', detail: 'Platja, Baixador, Bellamar, Montmar' },
  { name: 'Cornellà de Llobregat', href: '/electricista-cornella/', url: '/electricista-cornella/', detail: 'Centre, Almeda, Sant Ildefons, Gavarra' },
  { name: 'Mataró', href: '/electricista-mataro/', url: '/electricista-mataro/', detail: 'Centre, Cerdanyola, Rocafonda, Peramàs' }
];

export const blogGuides: BlogGuide[] = [
  {
    title: '¿Por qué salta el diferencial de la luz?',
    desc: 'Pautas paso a paso para localizar qué electrodoméstico o derivación a tierra dispara el cuadro.',
    href: '/blog/por-que-salta-el-diferencial/',
    url: '/blog/por-que-salta-el-diferencial/',
    category: 'Averías',
    color: 'amber'
  },
  {
    title: 'Normativa del Cuadro Eléctrico en Viviendas',
    desc: 'Requisitos obligatorios que debe cumplir todo cuadro general (IGA, sobretensiones y diferenciales).',
    href: '/blog/normativa-cuadro-electrico-vivienda/',
    url: '/blog/normativa-cuadro-electrico-vivienda/',
    category: 'Normativa REBT',
    color: 'blue'
  },
  {
    title: 'Revisión de la Instalación Eléctrica',
    desc: 'Cuándo revisar el cableado en pisos antiguos de más de 20 años antes de comprar o reformar.',
    href: '/blog/revision-instalacion-electrica/',
    url: '/blog/revision-instalacion-electrica/',
    category: 'Inspecciones',
    color: 'emerald'
  }
];
