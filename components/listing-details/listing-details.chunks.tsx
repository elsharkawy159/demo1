'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Property } from '../home/home.constants'
import { formatPrice, formatPropertyType } from './listing-details.lib'
import { generateWhatsAppLink, formatArea } from './listing-details.lib'
import { MessageCircle, MapPin, Building2, BedDouble, Bath, Square } from 'lucide-react'

export function PropertyGallery ({ property }: { property: Property }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-2 md:row-span-2">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Image
            src={property.images[0] || ''}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      {property.images.slice(1, 5).map((image, index) => (
        <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={`${property.title} ${index + 2}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export function PropertyHeader ({ property }: { property: Property }) {
  return (
    <div className="mb-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {property.title}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{property.location}</span>
          </div>
        </div>
        <Badge variant="secondary" className="text-lg px-4 py-2">
          {formatPropertyType(property.type)}
        </Badge>
      </div>
      <p className="text-3xl font-bold text-primary">
        {formatPrice(property.price)}
      </p>
    </div>
  )
}

export function PropertyInfo ({ property }: { property: Property }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-semibold">Property Details</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {property.bedrooms && (
            <div className="flex items-center gap-2">
              <BedDouble className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Bedrooms</p>
                <p className="text-lg font-semibold">{property.bedrooms}</p>
              </div>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Bathrooms</p>
                <p className="text-lg font-semibold">{property.bathrooms}</p>
              </div>
            </div>
          )}
          {property.area && (
            <div className="flex items-center gap-2">
              <Square className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Area</p>
                <p className="text-lg font-semibold">{formatArea(property.area)}</p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Type</p>
              <p className="text-lg font-semibold">{formatPropertyType(property.type)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function PropertyDescription ({ property }: { property: Property }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-semibold">Description</h2>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {property.description}
        </p>
      </CardContent>
    </Card>
  )
}

export function ContactOwner ({ property }: { property: Property }) {
  const whatsappLink = generateWhatsAppLink(property.whatsappNumber, property.title)

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-semibold">Contact Owner</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Owner</p>
          <p className="text-lg font-semibold">{property.ownerName}</p>
        </div>
        <Separator />
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button className="w-full" size="lg">
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact via WhatsApp
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

