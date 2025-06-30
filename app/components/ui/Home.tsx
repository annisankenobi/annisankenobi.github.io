import Link from 'next/link';

export default function Home() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
        Bequem wie zuhause.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Wir bieten flexible, vollständig möblierte Firmenapartments, die ideal für Geschäftsreisende sind, die eine Woche, einen Monat, oder länger bleiben.

        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/immos"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Wohnung finden
          </Link>
          <Link
            href="/kontakt"
            className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Kontaktieren
          </Link>
        </div>
      </div>
    </section>
  );
} 