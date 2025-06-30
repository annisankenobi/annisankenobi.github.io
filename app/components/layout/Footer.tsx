import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 bg-[#D9D9D9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Privatsphäre</h3>
            <p className="text-gray-600">
            Diese Website funktioniert ohne Cookies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/immos" className="text-gray-600 hover:text-gray-900">
                  Unterkünfte
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-600 hover:text-gray-900">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Verbinden</h3>
            <div className="flex space-x-4">
              <a href="mailto:kontakt@schaetzle.de" className="text-gray-600 hover:text-gray-900">
                E-Mail
              </a>
              <a href="https://www.linkedin.com/company/sch%C3%A4tzle-sch%C3%A4tzle-gmbh/" className="text-gray-600 hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Schätzle & Schätzle GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
} 