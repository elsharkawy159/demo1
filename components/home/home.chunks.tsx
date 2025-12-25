import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Property } from './home.constants'
import { formatPrice, formatPropertyType, getPropertyImageUrl } from './home.lib'
import { PROPERTY_TYPES } from './home.constants'

export function HeroSection () {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Find Your Dream Property
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover the perfect home, apartment, villa, or commercial space
        </p>
        <Link href="/listings">
          <Button size="lg" className="text-lg px-8 py-6">
            Browse Properties
          </Button>
        </Link>
      </div>
    </section>
  )
}

export function PropertyCategories () {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PROPERTY_TYPES.map((type) => (
            <Link
              key={type.value}
              href={`/listings?type=${type.value}`}
              className="group"
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">
                    {type.value === 'apartment' && '🏢'}
                    {type.value === 'house' && '🏠'}
                    {type.value === 'villa' && '🏖️'}
                    {type.value === 'commercial' && '🏪'}
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {type.label}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturedListings ({ properties }: { properties: Property[] }) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Featured Properties
          </h2>
          <Link href="/listings">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  )
}

