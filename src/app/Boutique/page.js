"use client"

import { useContext } from "react";
import { Card } from "@/Components/BoutiqueComponets/Card";
import { aricleContext } from "@/Components/Context/ArticlesContext";
import Loader from "@/Components/GeneralComponents/Loader";
import { Navbar } from "@/Components/HeroComponents/navbar";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"

export default function Boutique() {
    const { articles, loading, error } = useContext(aricleContext)
    if(loading) return <Loader/>

    if (error) {
        return <p className="flex justify-center items-center min-h-screen bg-gray-100 text-center text-red-500">Veilliez reasayer: {error}</p>;
    }
    return (
        <div className="min-h-screen">

            <Navbar/>
            <section className="container mx-auto px-4 py-8">
                    <>
                        <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Boutique</h1>
                            <p className="text-gray-600 max-w-2xl leading-relaxed">
                                Découvrez notre sélection exclusive d&apos;articles. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            
                            <div className="flex space-x-6 mt-6">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                    <FaFacebook size={28} className="text-blue-600 hover:text-blue-800" />
                                </a>
                                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                    <FaWhatsapp size={28} className="text-green-500 hover:text-green-700" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                    <FaInstagram size={28} className="text-pink-500 hover:text-pink-700" />
                                </a>
                                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                    <FaTiktok size={28} className="text-black hover:text-gray-700" />
                                </a>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
                                Erreur de chargement des articles
                            </div>
                        )}

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
                            {articles.map((article) => (
                                <Card 
                                    key={article.id} 
                                    article={article} 
                                    className="transition-all hover:shadow-lg hover:-translate-y-1"
                                />
                            ))}
                        </div>
                    </>
            </section>
        </div>
    )
}