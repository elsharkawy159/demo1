import { Suspense } from 'react'
import { ListingsPageContent } from './listings-content'
import { getAllProperties } from '@/components/listings/listings.chunks.server'

export default function ListingsPage () {
  const allProperties = getAllProperties()

  return (
    <main className="min-h-screen py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            All Properties
          </h1>
          <p className="text-muted-foreground">
            Browse our complete collection of properties
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ListingsPageContent allProperties={allProperties} />
        </Suspense>
      </div>
    </main>
  )
}

