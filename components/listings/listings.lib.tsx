import { Property } from '../home/home.constants'
import { formatPrice, formatPropertyType, getPropertyImageUrl } from '../home/home.lib'

export { formatPrice, formatPropertyType, getPropertyImageUrl }

export function filterPropertiesByType (
  properties: Property[],
  type: Property['type'] | 'all'
): Property[] {
  if (type === 'all') {
    return properties
  }
  return properties.filter(property => property.type === type)
}

