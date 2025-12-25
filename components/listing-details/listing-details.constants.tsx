import { Property } from '../home/home.constants'

export function getPropertyById (id: string, properties: Property[]): Property | undefined {
  return properties.find(property => property.id === id)
}

