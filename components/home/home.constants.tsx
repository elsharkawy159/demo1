export interface Property {
  id: string;
  title: string;
  type: "apartment" | "house" | "villa" | "commercial";
  price: number;
  location: string;
  images: string[];
  description: string;
  ownerName: string;
  whatsappNumber: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
}

export const PROPERTY_TYPES = [
  { value: "apartment", label: "Apartments" },
  { value: "house", label: "Houses" },
  { value: "villa", label: "Villas" },
  { value: "commercial", label: "Commercial" },
] as const;

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    type: "apartment",
    price: 450000,
    location: "Downtown District",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800",
    ],
    description:
      "Stunning modern apartment in the heart of downtown with city views and premium finishes.",
    ownerName: "John Smith",
    whatsappNumber: "+1234567890",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
  },
  {
    id: "2",
    title: "Luxury Family House",
    type: "house",
    price: 850000,
    location: "Suburban Heights",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    ],
    description:
      "Spacious family home with large backyard, modern kitchen, and excellent neighborhood.",
    ownerName: "Sarah Johnson",
    whatsappNumber: "+1234567891",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
  },
  {
    id: "3",
    title: "Beachfront Villa",
    type: "villa",
    price: 1200000,
    location: "Coastal Bay",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    ],
    description:
      "Exclusive beachfront villa with private pool, direct beach access, and panoramic ocean views.",
    ownerName: "Michael Chen",
    whatsappNumber: "+1234567892",
    bedrooms: 5,
    bathrooms: 4,
    area: 4000,
  },
  {
    id: "4",
    title: "Prime Office Space",
    type: "commercial",
    price: 650000,
    location: "Business District",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    ],
    description:
      "Premium commercial space in prime business district, perfect for offices or retail.",
    ownerName: "Emily Rodriguez",
    whatsappNumber: "+1234567893",
    area: 3000,
  },
];
