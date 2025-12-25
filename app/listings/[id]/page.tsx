import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PropertyGallery, PropertyHeader, PropertyInfo, PropertyDescription, ContactOwner } from '@/components/listing-details/listing-details.chunks'
import { getPropertyDetails } from '@/components/listing-details/listing-details.chunks.server'
import { getAllProperties } from '@/components/listings/listings.chunks.server'
import { ArrowLeft } from 'lucide-react'

interface ListingDetailsPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams () {
  const properties = getAllProperties()
  return properties.map((property) => ({
    id: property.id
  }))
}

export default async function ListingDetailsPage ({ params }: ListingDetailsPageProps) {
  const { id } = await params
  const property = getPropertyDetails(id)

  if (!property) {
    notFound()
  }

  return (
    <main className="min-h-screen py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Link href="/listings">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Listings
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <PropertyGallery property={property} />
            <PropertyHeader property={property} />
            <PropertyDescription property={property} />
            <PropertyInfo property={property} />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ContactOwner property={property} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

