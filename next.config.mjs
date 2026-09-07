// @ts-check
import { fileURLToPath } from 'url'
import path from 'path'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://www.projectmedbridge.org'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is a static export served from GitHub Pages behind the custom domain.
  output: 'export',
  trailingSlash: true,
  distDir: '.next',
  devIndicators: false,
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  images: {
    // Static hosting has no image optimizer, so serve the files as-is.
    unoptimized: true,
  },
  turbopack: {
    root: projectRoot,
  },
}

export default nextConfig
