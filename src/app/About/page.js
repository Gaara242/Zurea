"use client";

import { HeroSection1 } from "@/Components/GeneralComponents/HeroSection1";
import { Navbar } from "@/Components/HeroComponents/navbar";
import { ContactForm } from "../contact/contactForm";

export default function About() {
  return (
    <>
      <Navbar />
      <HeroSection1 
        title={'Notre Histoire'} 
        description={"Zurea été crée pour répondre aux besoins de notre clientèle avec des produits de qualité"} 
      />

      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="md:container mx-auto p-8">
          <h1 className="text-center text-5xl font-bold mt-8 mb-12 text-burlywood relative">
            À propos de nous
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-burlywood mt-2"></span>
          </h1>

          <p className="text-center mb-12 max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Chez ZUREA, nous nous engageons à offrir à nos clients des produits de haute qualité et un service client exceptionnel. 
            Notre boutique propose une large gamme de produits de différentes catégories pour répondre à tous vos besoins. 
            Que vous recherchiez des vêtements tendance, des accessoires élégants, des chaussures confortables ou des montres sophistiquées, 
            vous trouverez tout ce dont vous avez besoin chez nous.
          </p>

          <Section
            title="Notre histoire"
            content="ZUREA a été fondée en 2023 par Dev.Com une équipe de passionnés de la mode et du commerce en ligne. Notre objectif est de proposer à nos clients des produits de haute qualité à des prix compétitifs, avec un service client exceptionnel. Nous sommes fiers de notre sélection de produits et de notre engagement envers la satisfaction de nos clients."
          />
          
          <div className="relative mb-16">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 p-4 min-w-min">
                <TimelineCard 
                  image="/images/group-afro-americans.jpg"
                  year="2023"
                  description="ZUREA a été fondée en 2023 par Dev.Com une équipe de passionnés de la mode et du commerce en ligne."
                />
                <TimelineCard 
                  image="/images/ecologique.jpeg"
                  year="2024"
                  description="En 2024, ZUREA a lancé une nouvelle gamme de produits écologiques pour répondre à la demande croissante."
                />
                <TimelineCard 
                  image="/images/portrait-demenagement.jpg"
                  year="2025"
                  description="En 2025, ZUREA a déménagé dans de nouveaux locaux pour mieux servir nos clients."
                />
                <TimelineCard 
                  image="/images/chef-entreprise.jpeg"
                  year="Jack"
                  description="Jack est le fondateur et PDG de ZUREA. Il est dévoué à l'innovation et à la satisfaction des clients."
                />
              </div>
            </div>
          </div>
          <Section
            title="Notre mission"
            content="Notre mission est de vous offrir des produits de haute qualité à des prix compétitifs, avec un service client exceptionnel. Nous nous engageons à vous offrir une expérience d'achat agréable et satisfaisante."
          />

          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Contactez-nous</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, content }) {
  return (
    <div className="mb-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center relative">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-burlywood mt-2"></span>
      </h2>
      <p className="text-gray-700 leading-relaxed text-center">{content}</p>
    </div>
  );
}



function TimelineCard({ image, year, description }) {
  return (
    <div className="flex-shrink-0 w-[280px] relative  border-black border-2 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
        <div className="relative h-[200px]">
          <img src={image} className="w-full h-full object-cover" alt={year} />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-purple-900 border-black border-2 rounded-full p-1 shadow-lg">
              <div className="bg-burlywood rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{year}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 pt-10">
          <p className="text-gray-700 text-center text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}