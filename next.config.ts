import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const isVercel = Boolean(process.env.VERCEL);
const isGhPages = process.env.GITHUB_PAGES === 'true';
const repoBasePath = '/maksimdolgonosov-REACT2026Q2';

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isGhPages ? repoBasePath : '');

const assetPrefix =
  process.env.NEXT_PUBLIC_ASSET_PREFIX ??
  (isGhPages ? `${repoBasePath}/` : undefined);

const nextConfig: NextConfig = {
  basePath,
  assetPrefix,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  images: {
    unoptimized: !isVercel,
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
