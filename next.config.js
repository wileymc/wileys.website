/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["images-na.ssl-images-amazon.com", "m.media-amazon.com", "upload.wikimedia.org", "img1.od-cdn.com", "i.harperapps.com", "kbimages1-a.akamaihd.net", "books.google.com"],
  }
}

module.exports = nextConfig
