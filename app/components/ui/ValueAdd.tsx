import { CheckCircle, Link, Filter } from "lucide-react";

const values = [
  {
    icon: <CheckCircle className="text-primary w-8 h-8 mb-4" />,
    title: "Flexibilität",
    description:
      "Nutzen Sie maximale Flexibilität mit unkomplizierten Buchungs- und Vertragsbedingungen – ob täglich, wöchentlich, oder monatlich. Unsere Firmenapartments passen sich Ihren individuellen Bedürfnissen an und sind ideal für jede Aufenthaltsdauer.",
  },
  {
    icon: <Link className="text-primary w-8 h-8 mb-4" />,
    title: "Komfort",
    description:
      "Genießen Sie Komfort und Privatsphäre ohne den üblichen Umzugsstress, denn alles ist bereits für Sie vorbereitet: Möbel, WLAN, Handtücher und Nebenkosten inklusive. Unsere voll-möblierten Apartments schaffen ein wohnliches Umfeld, das Produktivität und Wohlbefinden fördert.",
  },
  {
    icon: <Filter className="text-primary w-8 h-8 mb-4" />,
    title: "Kosten­effizient",
    description:
      "Profitieren Sie von kosteneffizientem Wohnen mit transparenten Preisen (auf Anfrage), da unsere Firmenwohnungen um 20-50% günstiger sind als Hotels oder Airbnbs, ohne Kompromisse bei der Qualität einzugehen.",
  },
];

export default function ValueAdd() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-700">Wieso Firmenapartments mit uns buchen?</h2>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-3 justify-items-center">
        {values.map((item, index) => (
          <div key={index} className="max-w-sm">
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-600">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
