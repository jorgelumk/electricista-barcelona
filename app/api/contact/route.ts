import { NextResponse } from 'next/server';
import { getResend } from '@/lib/resend';

export const dynamic = 'force-dynamic';

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

    const rawReceiver = process.env.LEAD_RECEIVER_EMAIL || 'jorgelujanmk@gmail.com';
    const recipients = rawReceiver.split(',').map((e) => e.trim()).filter(Boolean);
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'jorge@agenciaiasolutions.com';

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

    const resend = getResend();

    if (resend) {
      const response = await resend.emails.send({
        from: `Electricistas Barcelona <${fromEmail}>`,
        to: recipients,
        subject: `⚡ Lead [${servicio || 'Urgencia'}] - ${nombre} (${poblacion || 'Barcelona'})`,
        text: emailContent,
      });

      if (response.error) {
        console.error('Error enviando email con Resend:', response.error);
        return NextResponse.json(
          { error: response.error.message || 'Error al enviar el correo electrónico.' },
          { status: 500 }
        );
      } else {
        console.log('Lead enviado con éxito a Resend:', response.data);
      }
    } else {
      console.error('RESEND_API_KEY no encontrada en las variables de entorno.');
      return NextResponse.json(
        { error: 'RESEND_API_KEY no está configurada en las variables de entorno de Vercel.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Solicitud enviada correctamente' });
  } catch (error: any) {
    console.error('Error al procesar el lead:', error);
    return NextResponse.json(
      { error: error?.message || 'Error interno del servidor al procesar la solicitud' },
      { status: 500 }
    );
  }
}
