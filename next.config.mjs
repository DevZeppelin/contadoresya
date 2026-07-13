/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    // statusCode 301 explícito: el brief DevZeppelin exige 301 (permanent:true emitiría 308)
    return [
      // Brief DevZeppelin: páginas geográficas casi-duplicadas eliminadas → 301 a home
      { source: "/contadores-en-cordoba", destination: "/", statusCode: 301 },
      { source: "/contadores-en-buenos-aires", destination: "/", statusCode: 301 },
      // Rutas de la etapa anterior del sitio → su equivalente nuevo (evita 404 si quedaron indexadas)
      { source: "/servicios-monotributo", destination: "/monotributo", statusCode: 301 },
      { source: "/servicios-liquidacion-de-sueldos", destination: "/sueldos", statusCode: 301 },
      { source: "/servicios-ingresos-brutos", destination: "/impuestos", statusCode: 301 },
      { source: "/servicios-convenio-multilateral", destination: "/impuestos", statusCode: 301 },
      { source: "/servicios-responsable-inscripto", destination: "/impuestos", statusCode: 301 },
      { source: "/servicios-contables-pymes", destination: "/estudio-contable", statusCode: 301 },
      { source: "/actualidad", destination: "/", statusCode: 301 },
      { source: "/faq", destination: "/", statusCode: 301 },
      { source: "/contacto", destination: "/estudio-contable", statusCode: 301 },
    ];
  },
};

export default nextConfig;
