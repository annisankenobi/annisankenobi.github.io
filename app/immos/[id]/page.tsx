import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import PropertyDetails from "@/app/components/ui/PropertyDetails";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/lib/data/immos"; // ✅ your source of truth

// For static generation of all [id] pages
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}

// Page component
export default async function PropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Find the property matching the id
  const property = properties.find((p) => p.id === id);

  if (!property) return notFound(); // ✅ prevents undefined from reaching child

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <main className="flex-grow mb-15 mt-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-start mb-6 ml-12">
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
