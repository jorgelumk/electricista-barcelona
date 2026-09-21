declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5RM8QMRR';

export const sendGTMEvent = (data: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};

export const trackPhoneClick = () => {
  sendGTMEvent({
    event: 'clic_telefono'
  });
};

export const trackWhatsAppClick = () => {
  sendGTMEvent({
    event: 'Click to Chat',
    event_category: 'whatsapp'
  });
  sendGTMEvent({
    event: 'clic_whatsapp'
  });
};

export const trackFormSubmit = (name: string, phone: string, email: string = '') => {
  sendGTMEvent({
    event: 'formulario_enviado',
    name,
    phone,
    email
  });
};
