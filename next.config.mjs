/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Brief DevZeppelin: páginas geográficas casi-duplicadas eliminadas → 301 a home
      { source: "/contadores-en-cordoba", destination: "/", permanent: true },
      { source: "/contadores-en-buenos-aires", destination: "/", permanent: true },
      // Rutas de la etapa anterior del sitio → su equivalente nuevo (evita 404 si quedaron indexadas)
      { source: "/servicios-monotributo", destination: "/monotributo", permanent: true },
      { source: "/servicios-liquidacion-de-sueldos", destination: "/sueldos", permanent: true },
      { source: "/servicios-ingresos-brutos", destination: "/impuestos", permanent: true },
      { source: "/servicios-convenio-multilateral", destination: "/impuestos", permanent: true },
      { source: "/servicios-responsable-inscripto", destination: "/impuestos", permanent: true },
      { source: "/servicios-contables-pymes", destination: "/estudio-contable", permanent: true },
      { source: "/actualidad", destination: "/", permanent: true },
      { source: "/faq", destination: "/", permanent: true },
      { source: "/contacto", destination: "/estudio-contable", permanent: true },
    ];
  },
};

export default nextConfig;
