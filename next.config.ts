import createMDX from '@next/mdx';
import path from 'path';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'md', 'ts', 'tsx'],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);