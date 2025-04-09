import CategoriesComponent from "@/Components/HomeCoponents/Categories";
import HeroSection from "../Components/HeroComponents/heroComponent";
import FeaturesSection from "@/Components/HomeCoponents/FeaturesSection";
import NouveauteSection from "@/Components/HomeCoponents/NauveauteComponets";
import Marquee from "../Components/HomeCoponents/marquue";
import NewsletterSection from "../Components/HomeCoponents/NewsletterSection";
import TestimonialsSection from "@/Components/HomeCoponents/TestimonialsSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <CategoriesComponent />
      <NouveauteSection />
      <Marquee />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}