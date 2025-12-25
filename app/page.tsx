import { HeroSection, PropertyCategories, FeaturedListings } from '@/components/home/home.chunks'
import { getFeaturedProperties } from '@/components/home/home.chunks.server'

export default function HomePage () {
  const featuredProperties = getFeaturedProperties()

  return (
    <main className="min-h-screen">
      <HeroSection />
      <PropertyCategories />
      <FeaturedListings properties={featuredProperties} />
    </main>
  )
}
