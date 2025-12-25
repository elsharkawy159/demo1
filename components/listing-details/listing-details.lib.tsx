import { formatPrice, formatPropertyType } from '../home/home.lib'

export { formatPrice, formatPropertyType }

export function generateWhatsAppLink (phoneNumber: string, propertyTitle: string): string {
  const message = encodeURIComponent(`Hi! I'm interested in your property: ${propertyTitle}`)
  const cleanPhone = phoneNumber.replace(/[^\d+]/g, '')
  return `https://wa.me/${cleanPhone}?text=${message}`
}

export function formatArea (area?: number): string {
  if (!area) return 'N/A'
  return `${area.toLocaleString()} sq ft`
}

