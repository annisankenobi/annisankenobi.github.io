import { notFound } from 'next/navigation';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import PropertyDetails from '@/app/components/ui/PropertyDetails';
import { properties } from '@/lib/data/immos';
import Link from 'next/link';

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }: any) {
    const { id } = await params;
  
    const property = properties.find((p) => p.id === id);
  
    if (!property) return notFound();
  
    return (
      <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
        <Header />
        <main className="flex-grow mb-15 mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-left mb-6 ml-49">
            <Link
              href="/immos"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Zurück
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Kontaktieren
            </Link>
          </div>
          <PropertyDetails property={property} />
        </main>
        <Footer />
      </div>
    );
  }
  