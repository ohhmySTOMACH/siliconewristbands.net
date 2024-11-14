/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.[jt]sx?$/,
        include: /node_modules\/merchi_cart/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["next/babel"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    );
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "merchi-production.s3-accelerate.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "merchi-staging.s3-accelerate.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
