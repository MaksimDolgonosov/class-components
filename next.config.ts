import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const isProd = process.env.NODE_ENV === 'production';
const isVercel = Boolean(process.env.VERCEL);
const isGhPages = isProd && !isVercel;
const repoBasePath = '/maksimdolgonosov-REACT2026Q2';

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isGhPages ? repoBasePath : '');

const assetPrefix =
  process.env.NEXT_PUBLIC_ASSET_PREFIX ??
  (isGhPages ? `${repoBasePath}/` : undefined);

const nextConfig: NextConfig = {
  distDir: './dist',
  basePath,
  assetPrefix,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  images: {
    unoptimized: isGhPages,
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
