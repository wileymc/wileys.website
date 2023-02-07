/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images-na.ssl-images-amazon.com", "m.media-amazon.com", "upload.wikimedia.org", "img1.od-cdn.com", "i.harperapps.com", "kbimages1-a.akamaihd.net", "books.google.com"],
  }
}

module.exports = nextConfig
