import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const isProd = process.env.NODE_ENV === 'production';
const repoBasePath = '/maksimdolgonosov-REACT2026Q2';

const nextConfig: NextConfig = {
  ...(isProd ? { output: 'export' as const } : {}),
  distDir: './dist',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? repoBasePath : ''),
  assetPrefix: isProd ? `${repoBasePath}/` : undefined,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/sprites/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
