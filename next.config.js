/** @type {import('next').NextConfig} */
module.exports = {
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  experimental: { typedRoutes: true },
  generateEtags: false,
  poweredByHeader: false,
  cleanDistDir: true,
};
