import type { NextConfig } from 'next';
import { ESLINT_DEFAULT_DIRS } from 'next/dist/lib/constants';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental'
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};



export default nextConfig;
