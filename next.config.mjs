/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    // Rutas viejas que competían por las mismas keywords que las páginas nuevas del brief (canibalización SEO)
    return [
      { source: "/contadores-en-mendoza", destination: "/", permanent: true },
      { source: "/monotributo", destination: "/servicios-monotributo", permanent: true },
      { source: "/sueldos", destination: "/servicios-liquidacion-de-sueldos", permanent: true },
    ];
  },
};

export default nextConfig;
