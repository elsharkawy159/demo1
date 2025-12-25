'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { PropertyFilters, PropertyGrid } from '@/components/listings/listings.chunks'
import { filterPropertiesByType } from '@/components/listings/listings.lib'
import { Property } from '@/components/home/home.constants'
import { useEffect, useState } from 'react'

export function ListingsPageContent ({ allProperties }: { allProperties: Property[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [filterType, setFilterType] = useState<Property['type'] | 'all'>('all')

  useEffect(() => {
    const typeParam = searchParams.get('type') as Property['type'] | null
    if (typeParam && ['apartment', 'house', 'villa', 'commercial'].includes(typeParam)) {
      setFilterType(typeParam)
    } else {
      setFilterType('all')
    }
  }, [searchParams])

  const handleFilterChange = (type: Property['type'] | 'all') => {
    setFilterType(type)
    if (type === 'all') {
      router.push('/listings')
    } else {
      router.push(`/listings?type=${type}`)
    }
  }

  const filteredProperties = filterPropertiesByType(allProperties, filterType)

  return (
    <>
      <PropertyFilters onFilterChange={handleFilterChange} />
      <PropertyGrid properties={filteredProperties} />
    </>
  )
}

