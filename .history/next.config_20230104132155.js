/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  experimental: {
    appDir: true,
  },
};
