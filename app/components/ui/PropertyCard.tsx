import React from "react";
import Link from "next/link";
import { Bed, Bath, Ruler, Car } from "lucide-react";
import Image from "next/image";

// Define the property type
type Property = {
  id: string;
  title: string;
  imageUrl: string;
  beds: number;
  bathrooms: number;
  size: number;
  parking?: string;
};

type PropertyCardProps = {
  property: Property;
  layout?: "grid" | "list";
};

export default function PropertyCard({ property, layout = "grid" }: PropertyCardProps) {
  return (
    <Link href={`/immos/${property.id}`} passHref>
      <div className="rounded-xl overflow-hidden bg-white dark:bg-darkmode-dark cursor-pointer hover:shadow-lg transition-shadow duration-200">
        <Image
          src={property.imageUrl}
          alt={property.title}
          width={400}
          height={192}
          className="object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-darkmode-text-light">
            <div className="flex items-center gap-1">
              <Bed size={16} /> {property.beds} Schlafzimmer
            </div>
            <div className="flex items-center gap-1">
              <Bath size={16} /> {property.bathrooms} Bäder
            </div>
            <div className="flex items-center gap-1">
              <Ruler size={16} /> {property.size} m²
            </div>
            <div className="flex items-center gap-1">
              <Car size={16} /> {property.parking || "Öffentlich"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
