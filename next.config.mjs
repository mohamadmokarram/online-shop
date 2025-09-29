/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mohammadsaedinia.com",
        port: "",
        pathname: "/Uploads/Images/**",
      },
    ],
  },
};

export default nextConfig;
