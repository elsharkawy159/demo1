import { getPropertyById } from './listing-details.constants'
import { ALL_PROPERTIES } from '../listings/listings.constants'
import { Property } from '../home/home.constants'

export function getPropertyDetails (id: string): Property | null {
  const property = getPropertyById(id, ALL_PROPERTIES)
  return property || null
}

