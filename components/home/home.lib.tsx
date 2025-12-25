import { Property } from './home.constants'

export function formatPrice (price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

export function formatPropertyType (type: Property['type']): string {
  const types: Record<Property['type'], string> = {
    apartment: 'Apartment',
    house: 'House',
    villa: 'Villa',
    commercial: 'Commercial'
  }
  return types[type] || type
}

export function getPropertyImageUrl (property: Property, index: number = 0): string {
  return property.images[index] || property.images[0] || ''
}

