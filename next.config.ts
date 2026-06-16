import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoBasePath = '/maksimdolgonosov-REACT2026Q2';

const nextConfig: NextConfig = {
  ...(isProd ? { output: 'export' as const } : {}),
  distDir: './dist',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? repoBasePath : ''),
  assetPrefix: isProd ? `${repoBasePath}/` : undefined,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;
