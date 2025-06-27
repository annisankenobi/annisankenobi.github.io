import React from "react";
import Image from "next/image";

const companies = [
  { name: "Tread", src: "/logos/tread.png" },
  { name: "Tiny", src: "/logos/tiny.png" },
  { name: "Fort", src: "/logos/fort.png" },
  { name: "Kinfolk", src: "/logos/kinfolk.png" },
  { name: "Yoco", src: "/logos/yoco.png" },
  { name: "Localyze", src: "/logos/localyze.png" },
  { name: "Jerry's Artarama", src: "/logos/jerrys.png" },
  { name: "Bridger", src: "/logos/bridger.png" },
  { name: "Enduring Ventures", src: "/logos/enduring.png" },
];

export default function TrustedBySection() {
  return (
    <section className="bg-[#F5F5F5] py-12 px-4 text-center">
      <h2 className="text-lg font-medium text-gray-700 mb-8">
        Trusted by leading companies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
        {companies.map((company) => (
          <div key={company.name} className="flex justify-center items-center">
            <Image
              src={company.src}
              alt={company.name}
              width={120}
              height={40}
              className="object-contain grayscale opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
        <div className="text-gray-500 text-sm mt-2 col-span-full">
          &amp; many more
        </div>
      </div>
    </section>
  );
}
