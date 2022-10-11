const path = require('path');

module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'custom'
  },
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  },
  webpack: (config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@comp': path.resolve(__dirname, 'src/components'),
      '@css': path.resolve(__dirname, 'src/assets/css'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
    };
    return config;
  }
};
