import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, telefono, poblacion, servicio, mensaje, paginaOrigen } = body;

    if (!nombre || !telefono) {
      return NextResponse.json(
        { error: 'El nombre y el teléfono son obligatorios.' },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.LEAD_RECEIVER_EMAIL || 'jorge@agenciaiasolutions.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const emailContent = `
🚨 NUEVO LEAD DE ELECTRICISTA BARCELONA 🚨

• Nombre: ${nombre}
• Teléfono: ${telefono}
• Población / CP: ${poblacion || 'No especificada'}
• Servicio: ${servicio || 'General / Urgencias'}
• Mensaje: ${mensaje || 'Sin mensaje adicional'}
• Página de Origen: ${paginaOrigen || '/'}
• Fecha y Hora: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
    `.trim();

    if (resend) {
      const response = await resend.emails.send({
        from: `Electricistas Barcelona <${fromEmail}>`,
        to: [receiverEmail],
        subject: `⚡ Lead [${servicio || 'Urgencia'}] - ${nombre} (${poblacion || 'Barcelona'})`,
        text: emailContent,
      });

      if (response.error) {
        console.error('Error enviando email con Resend:', response.error);
      } else {
        console.log('Lead enviado con éxito a Resend:', response.data);
      }
    } else {
      console.log('--- MOCK EMAIL RESEND (API Key no configurada) ---');
      console.log(emailContent);
    }

    return NextResponse.json({ success: true, message: 'Solicitud enviada correctamente' });
  } catch (error) {
    console.error('Error al procesar el lead:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor al procesar la solicitud' },
      { status: 500 }
    );
  }
}
