import { createMDX } from 'fumadocs-mdx/next';
import { remarkImage } from 'fumadocs-core/mdx-plugins';

const withMDX = createMDX({
  mdxOptions: {
    format: "mdx",
    jsx: true,
    remarkPlugins: [
      [remarkImage, {
        external: true,
        useImport: false,
        onError: 'ignore', // Para debug, ignore erros temporariamente
      }]
    ],
  }
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ]
  }
};

export default withMDX(config);