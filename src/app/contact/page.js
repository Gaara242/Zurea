"use client";

import { HeroSection1 } from "@/Components/GeneralComponents/HeroSection1"; 
import { Navbar } from "@/Components/HeroComponents/navbar";
import { useRef } from "react"; 
import { ContactInfo } from "./contactInfos";
import { ContactForm } from "./contactForm";


export default function ContactPage() {
  const containerRef = useRef(null)

    // useEffect(() => {
    //     const ctx = SlidIn(containerRef);
    //     return () => ctx.revert();

    // }, []);

    return (
        <>
            <Navbar/>
            <HeroSection1 
                title="Contactez-Nous" 
                description="Nous sommes là pour vous aider et répondre à vos questions"
            />
            
            <section ref={containerRef} className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Comment pouvons-nous vous aider ?
                        </h2>
                        <p className="text-gray-600">
                            Choisissez le moyen de communication qui vous convient le mieux. 
                            Notre équipe est prête à vous répondre.
                        </p>
                    </div>
                    
                    <ContactInfo />
                    
                    <div className="mt-16">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    );
}