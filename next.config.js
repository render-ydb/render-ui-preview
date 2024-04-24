/** @type {import('next').NextConfig} */
require.extensions['.css'] = () => {}
const withTM = require('next-transpile-modules')([
  '@x.render/render-pullrefresh',
  '@x.render/render-scrollview',
  '@x.render/render-text',
  '@x.render/render-video',
  '@x.render/render-view',
  '@x.render/render-picture',
  '@x.render/render-waterfall',
]);
const nextConfig = withTM({
  reactStrictMode: true,

});

module.exports = nextConfig;
