import os
from PIL import Image, ImageDraw

output_dir = "public/images/blog"
os.makedirs(output_dir, exist_ok=True)

images = [
    ("por-que-salta-el-diferencial.webp", "Por Qué Salta el Diferencial", "Averías y Seguridad"),
    ("normativa-cuadro-electrico-vivienda.webp", "Normativa Cuadro Eléctrico", "Normativa REBT"),
    ("revision-instalacion-electrica.webp", "Revisión de Instalación Eléctrica", "Mantenimiento"),
    ("instalacion-electrica-obsoleta.webp", "Instalación Eléctrica Obsoleta", "Seguridad en el Hogar"),
    ("que-es-el-boletin-electrico.webp", "Qué es el Boletín Eléctrico", "Certificados CIE"),
    ("certificado-instalacion-electrica-cie.webp", "Certificado de Instalación (CIE)", "Gestiones y Trámites"),
    ("ampliacion-de-potencia-electrica.webp", "Ampliación de Potencia Eléctrica", "Suministro Eléctrico"),
    ("por-que-se-calienta-un-enchufe.webp", "Por Qué se Calienta un Enchufe", "Prevención de Averías"),
    ("se-ha-ido-la-luz-que-hacer.webp", "Se ha Ido la Luz: Qué Hacer", "Urgencias 24h"),
    ("reforma-instalacion-electrica-sin-obra.webp", "Reformar Instalación sin Picar", "Reformas Eléctricas"),
    ("toma-de-tierra-vivienda.webp", "Toma de Tierra en Viviendas", "Protección Eléctrica"),
    ("magnetotermico-vs-diferencial.webp", "Magnetotérmico vs Diferencial", "Conceptos Eléctricos"),
    ("instalacion-electrica-local-comercial.webp", "Instalación Local Comercial", "Servicios B2B"),
    ("domotica-sin-obra.webp", "Domótica sin Obra", "Automatización del Hogar"),
    ("punto-de-recarga-garaje-comunidad.webp", "Punto de Recarga en Comunidad", "Movilidad Eléctrica")
]

width, height = 1200, 675

for filename, title, category in images:
    filepath = os.path.join(output_dir, filename)
    
    img = Image.new("RGB", (width, height), "#0f172a")
    draw = ImageDraw.Draw(img)
    
    for i in range(0, height, 40):
        draw.line([(0, i), (width, i + 200)], fill="#1e293b", width=1)
        
    draw.rectangle([60, 60, width - 60, height - 60], outline="#334155", width=2)
    draw.rectangle([100, 100, 360, 145], fill="#f59e0b")
    draw.rectangle([100, 180, 115, height - 100], fill="#f59e0b")
    
    img.save(filepath, "WEBP", quality=85)
    print(f"Generated {filepath}")

print("All 15 blog images generated successfully!")
