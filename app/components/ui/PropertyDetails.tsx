'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Property } from '@/lib/data/immos';

interface PropertyDetailsProps {
  property: Property;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  const [current, setCurrent] = useState(0);
  const images = property.images ?? [property.imageUrl || "/images/product-1.png"];

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <section className="md:section-sm px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10">
        {/* Image Carousel */}
        <div className="w-full lg:w-1/2 relative">
          <Image
            src={images[current]}
            alt={property.title}
            width={722}
            height={623}
            className="w-full h-auto object-cover rounded-md"
          />
          <button
            onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white dark:bg-white p-2 rounded-full text-black border"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            onClick={() => setCurrent((current + 1) % images.length)}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white dark:bg-white p-2 rounded-full text-black border"
            aria-label="Next image"
          >
            →
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-gray-400 dark:bg-gray-600 border' : 'bg-primary border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{property.title}</h1>

          <p className="text-gray-400 mb-4">{property.location}</p>

          <div className="flex gap-6 my-6">
            <div className="text-center">
              <span className="block text-2xl font-bold">{property.beds}</span>
              <span className="text-gray-500">Schlafzimmer</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold">{property.bathrooms}</span>
              <span className="text-gray-500">Badezimmer</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold">{property.size}</span>
              <span className="text-gray-500">qm</span>
            </div>
          </div>

          <div className="my-6">
            <h3 className="text-xl font-semibold mb-2">Beschreibung</h3>
            <p className="text-gray-500">{property.description}</p>
          </div>

          <div className="my-6">
            <h3 className="text-xl font-semibold mb-2">Lage</h3>
            <p className="text-gray-500 mb-8">{property.locationDescription}</p>
          </div>

          <div className="my-6">
            <h3 className="text-xl font-semibold mb-2">Merkmale</h3>
            <div className="flex flex-wrap gap-2">
              {property.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 rounded-md text-sm text-white"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
