import { Geist, Poppins, Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import {  ArticlesContext } from "@/Components/Context/ArticlesContext";
import Footer from "@/Components/GeneralComponents/Footer";
import { Suspense } from "react";
import Loader from "@/Components/GeneralComponents/Loader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight:['300', '400', '500', '600', '700']
});

export const metadata = {
  title: "ZUREA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/* <Head>

      </Head> */}
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        <ArticlesContext>
          <Suspense fallback={ <Loader/> }>
          {children}
          <Footer/>
          </Suspense>
        </ArticlesContext>
      </body>
    </html>
  );
}
