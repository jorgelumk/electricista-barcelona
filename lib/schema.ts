export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Electricistas Barcelona',
    url: 'https://electricistasenbarcelona.com',
    logo: 'https://electricistasenbarcelona.com/images/hero_electrician.jpg',
    telephone: '+34657144186',
    email: 'info@electricistasenbarcelona.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+34657144186',
        contactType: 'customer service',
        availableLanguage: ['Spanish', 'Catalan'],
        areaServed: [
          'Barcelona',
          'Hospitalet de Llobregat',
          'Badalona',
          'Terrassa',
          'Sabadell',
          'Mataró',
          'Santa Coloma de Gramenet',
          'Sant Cugat del Vallès',
          'Cornellà de Llobregat',
          'Castelldefels'
        ]
      }
    ]
  };
}

export function generateServiceSchema({ name, description, url, areaServed }: ServiceSchemaProps) {
  const defaultAreas = [
    'Barcelona',
    'Hospitalet de Llobregat',
    'Badalona',
    'Terrassa',
    'Sabadell',
    'Sant Cugat del Vallès',
    'Cornellà de Llobregat',
    'Castelldefels'
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Electricistas Barcelona',
      telephone: '+34657144186',
      url: 'https://electricistasenbarcelona.com'
    },
    areaServed: (areaServed || defaultAreas).map((area) => ({
      '@type': 'City',
      name: area
    })),
    url
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
