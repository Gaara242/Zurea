import { useRef, useEffect } from "react";
import { createHeroAnimation1 } from "./animationGsap";

export function HeroSection1({title, description}){
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const contentRef = useRef(null);
  
    useEffect(() => {
      const ctx = createHeroAnimation1(contentRef);
      return () => ctx.revert();
    }, []);
  
    return(
      <section ref={contentRef} className="relative h-[50vh] bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-center mb-4">
            {title}
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-center max-w-3xl">
            {description}
          </p>
        </div>
      </section>
    )
  }