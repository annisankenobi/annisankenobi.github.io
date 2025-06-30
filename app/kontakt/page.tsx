import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactPage from '../components/ui/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <main className="flex-grow">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
