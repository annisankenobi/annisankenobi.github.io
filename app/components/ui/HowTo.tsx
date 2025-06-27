import React from "react";
import Image from "next/image";

const steps = [
  {
    title: "Browse our selection of accommodations",
    description:
      "Explore our wide range of properties, from cozy apartments to luxurious villas. Find the perfect place to stay for your next trip.",
    image: "/images/step-1.png",
  },
  {
    title: "Secure and reliable",
    description:    
      "Rest assured that your personal and financial information is safe with us. We use the latest encryption technology to protect your data.",
    image: "/images/step-2.png",
  },
  {
    title: "Transactions drill down",
    description:
      "Drill down into transaction-level details, filtered by legal entities, accounts, date, category, amount, and more.",
    image: "/images/step-3.png",
  },
];

export default function HowToBooking() {
  return (
    <section className="bg-[#F5F5F5] py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Experience hassle-free booking
      </h2>
      <div className="grid gap-16 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2">
              <Image
                src={step.image}
                alt={step.title}
                width={600}
                height={400}
                className="rounded-xl shadow"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}