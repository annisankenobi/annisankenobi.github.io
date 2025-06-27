import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/ui/Home";
import PropertyPreview from "./components/ui/PropertyPreview";
import ValueAdd from "./components/ui/ValueAdd";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PropertyPreview />
        <ValueAdd />
      </main>
      <Footer />
    </div>
  );
}
