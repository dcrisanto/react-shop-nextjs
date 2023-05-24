/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'imgv3.fotor.com', 'placeimg.com', 'encrypted-tbn2.gstatic.com', 'api.lorem.space', 'api.escuelajs.co', 'm.media-amazon.com', 'loremflickr.com', 'i.ytimg.com', 'images.pexels.com'],
  }
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA(nextConfig);
