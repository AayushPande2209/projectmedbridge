import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'
import userConfigImport from './next.user-config'

const __v0_turbopack_root = path.dirname(fileURLToPath(import.meta.url))

type UserConfig = NextConfig | ((phase: string, ctx: { defaultConfig: NextConfig }) => NextConfig | Promise<NextConfig>)

const userConfigModule = userConfigImport as UserConfig

export default async function nextConfig(
  phase: string,
  { defaultConfig }: { defaultConfig: NextConfig },
): Promise<NextConfig> {
  const userConfig =
    typeof userConfigModule === 'function'
      ? await userConfigModule(phase, { defaultConfig })
      : userConfigModule

  return {
    ...userConfig,
    output: 'standalone',
    distDir: '.next',
    devIndicators: false,
    images: {
      ...userConfig.images,
      unoptimized:
        userConfig.images?.unoptimized ?? process.env.NODE_ENV === 'development',
    },
    logging: {
      ...userConfig.logging,
      fetches: { fullUrl: true, hmrRefreshes: true },
      browserToTerminal: true,
    },
    turbopack: {
      ...userConfig.turbopack,
      root: __v0_turbopack_root,
    },
    experimental: {
      ...userConfig.experimental,
      transitionIndicator: true,
      turbopackFileSystemCacheForDev:
        process.env.TURBOPACK_PERSISTENT_CACHE !== 'false' &&
        process.env.TURBOPACK_PERSISTENT_CACHE !== '0',
      serverActions: {
        ...userConfig.experimental?.serverActions,
        allowedOrigins: [
          ...(userConfig.experimental?.serverActions?.allowedOrigins || []),
          '*.vusercontent.net',
        ],
      },
    },
    allowedDevOrigins: [
      ...(userConfig.allowedDevOrigins || []),
      '*.vusercontent.net',
      '*.dev-vm.vusercontent.net',
    ],
  }
}
