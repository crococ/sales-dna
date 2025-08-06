// URL validation and sanitization utilities
export function isValidUrl(string: string): boolean {
  try {
    const url = new URL(string)
    return ['http:', 'https:'].includes(url.protocol)
  } catch {
    return false
  }
}

export function sanitizeUrl(url: string): string {
  // Remove any potential XSS characters and normalize
  const sanitized = url.trim().toLowerCase()
  
  // Add https:// if no protocol is specified
  if (!sanitized.startsWith('http://') && !sanitized.startsWith('https://')) {
    return `https://${sanitized}`
  }
  
  return sanitized
}

export function validateUrlInput(input: string): { isValid: boolean; error?: string; sanitizedUrl?: string } {
  if (!input.trim()) {
    return { isValid: false, error: 'URL ist erforderlich' }
  }

  const sanitized = sanitizeUrl(input)
  
  if (!isValidUrl(sanitized)) {
    return { isValid: false, error: 'Bitte geben Sie eine gültige URL ein (z.B. https://example.com)' }
  }

  // Basic domain validation
  try {
    const url = new URL(sanitized)
    if (!url.hostname.includes('.')) {
      return { isValid: false, error: 'Bitte geben Sie eine gültige Domain ein' }
    }
  } catch {
    return { isValid: false, error: 'Ungültige URL-Format' }
  }

  return { isValid: true, sanitizedUrl: sanitized }
}