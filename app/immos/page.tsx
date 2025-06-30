import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Properties from '@/app/components/ui/AllProperties';

export default function PropertiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <main className="flex-grow">
        <Properties />
      </main>
      <Footer />
    </div>
  );
}
