export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "")
}

/** Formats up to 10 US digits as (XXX) XXX-XXXX */
export function formatPhoneDisplay(value: string): string {
  const digits = digitsOnly(value).slice(0, 10)
  if (digits.length === 0) return ""
  if (digits.length <= 3) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase()
}

export function isValidEmail(value: string): boolean {
  const email = normalizeEmail(value)
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
}

export function isValidUSPhone(value: string): boolean {
  const digits = digitsOnly(value)
  return digits.length === 0 || digits.length === 10
}
