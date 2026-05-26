import type { NextConfig } from 'next'

const repoName = 'projectmedbridge'
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGithubPages ? `/${repoName}` : ''
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://www.projectmedbridge.org'

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
