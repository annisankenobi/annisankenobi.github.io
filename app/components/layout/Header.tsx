import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-black">
            Schätzle &amp; Schätzle GmbH
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/immos" className="text-gray-600 hover:text-gray-900">
            Unterkünfte
          </Link>
          <Link href="/kontakt" className="text-gray-600 hover:text-gray-900">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
