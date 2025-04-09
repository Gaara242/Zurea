"use client";

import { useState, useEffect, useRef } from "react";
import { Navbar } from "./navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {

    return (
        <>
            <div className="flex justify-end p-1 gap-3 bg-purple-500"></div>
            <div
                className="bg-gray-500 min-h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/Images/background.webp')" }}
            >
                <Navbar />
                <div className="grid grid-cols-1 xl:grid-cols-2">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-col items-center text-center mt-20 px-6"
                    >
                        <h1 className="text-5xl font-bold text-black">
                            Bienvenue chez Zurea <br />{" "}
                            <span className="text-purple-600">Mode & Article</span>
                        </h1>
                        <p className="mt-6 text-gray-700 max-w-xl">
                            Découvrez notre collection exclusive de vêtements et accessoires. Des
                            créations uniques pour un style qui vous ressemble.{" "}
                            <span className="hidden sm:block">
                                Chaque pièce raconte une histoire d&apos;élégance et de raffinement.
                            </span>
                        </p>
                        <div className="flex gap-6 mt-10">
                            <Link
                                href={'/About'}
                                className="px-6 py-3 border bg-purple-600 text-white rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                                aria-label="En savoir plus sur nous"
                            >
                                Qui sommes nous
                            </Link>
                            <Link
                            href={'/contact'}
                                className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                                aria-label="Nous contacter"
                            >
                                Nous contacter
                            </Link>
                        </div>
                        <br />
                    </motion.div>
                    <SliderImages />
                </div>
            </div>
        </>
    );
}

const SliderImages = () => {
    const [slider, setSlider] = useState(1);
    const [visible, setVisible] = useState(true);
    const maxImages = 3;

    useEffect(() => {
        const timer = setInterval(() => {
            setVisible(false);

            setTimeout(() => {
                setSlider((current) => (current >= maxImages ? 1 : current + 1));
                setVisible(true);
            }, 500);
        }, 7000);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center w-[75%] h-[100%] mx-auto mt-6"
        >
            <div className="h-[400px]">
                <Image
                    src={`/Images/slider${slider}.png`}
                    alt={`Slide ${slider}`}
                    width={500}
                    height={500}
                    quality={90}
                    className={`transition-opacity duration-300 ${
                        visible ? "opacity-100" : "opacity-0"
                    }`}
                    priority
                />
            </div>
        </motion.div>
    );
};