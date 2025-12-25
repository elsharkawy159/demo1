'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Property } from '../home/home.constants'
import { formatPrice, formatPropertyType, getPropertyImageUrl } from './listings.lib'
import { PROPERTY_TYPES } from '../home/home.constants'

export function PropertyFilters ({ onFilterChange }: { onFilterChange: (type: Property['type'] | 'all') => void }) {
  const searchParams = useSearchParams()
  const selectedType = (searchParams.get('type') as Property['type'] | 'all') || 'all'

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedType === 'all' ? 'default' : 'outline'}
        onClick={() => onFilterChange('all')}
        size="sm"
      >
        All Properties
      </Button>
      {PROPERTY_TYPES.map((type) => (
        <Button
          key={type.value}
          variant={selectedType === type.value ? 'default' : 'outline'}
          onClick={() => onFilterChange(type.value)}
          size="sm"
        >
          {type.label}
        </Button>
      ))}
    </div>
  )
}

export function PropertyGrid ({ properties }: { properties: Property[] }) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-muted-foreground">No properties found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Link key={property.id} href={`/listings/${property.id}`}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden h-full flex flex-col">
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={getPropertyImageUrl(property)}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-lg line-clamp-1">
                  {property.title}
                </h3>
                <Badge variant="secondary">
                  {formatPropertyType(property.type)}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {property.location}
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-2xl font-bold text-primary">
                {formatPrice(property.price)}
              </p>
              {property.bedrooms && property.bathrooms && (
                <p className="text-sm text-muted-foreground mt-2">
                  {property.bedrooms} bed • {property.bathrooms} bath
                  {property.area && ` • ${property.area.toLocaleString()} sq ft`}
                </p>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

