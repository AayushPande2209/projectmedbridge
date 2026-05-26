/** Prefix for static assets when deployed under a subpath (e.g. GitHub Pages). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function withBasePath(path: string): string {
  if (!path.startsWith('/')) return path
  return `${basePath}${path}`
}
