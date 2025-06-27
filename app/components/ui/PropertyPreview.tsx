import React from "react";
import Link from "next/link";
import PropertyCard from "@/app/components/ui/PropertyCard"; // Assumes you have a reusable PropertyCard component
import { properties } from "@/lib/data/immos";

export default function FeaturedProperties({ layout = "grid", searchValue = "" }) {
  const filteredProperties = searchValue
    ? properties.filter(
        (property) =>
          property.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          property.description.toLowerCase().includes(searchValue.toLowerCase()) ||
          property.location.toLowerCase().includes(searchValue.toLowerCase())
      )
    : properties;

  const displayedProperties = filteredProperties.slice(0, 3);

  return (
    <section className="w-full py-12 px-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Erkunden Sie verschiedene Lösungen für möblierte Firmenwohnungen</h1>
        <p className="text-text-light dark:text-darkmode-text-light max-w-l mx-auto">
        Wir teilen Ihnen einen individuell abgestimmten Mietpreis mit – abhängig von Personenzahl, Bedarf und Aufenthaltsdauer.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
            ))}
        </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/immos"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Mehr sehen →
          </Link>
        </div>
    </section>
  );
}
