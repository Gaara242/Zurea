import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);


export const createHeroAnimation1 = (contentRef) => {
    const ctx = gsap.context(() => {
      // Animation du fond
      gsap.fromTo(contentRef.current,
        {
          opacity: 0,
          scale: 1.1
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out"
        }
      );
  
      // Animation du titre avec effet machine à écrire
      const title = contentRef.current.querySelector('h1');
      gsap.fromTo(title,
        {
          text: "",
          opacity: 1
        },
        {
          duration: 1,
          text: title.textContent,
          ease: "none",
          delay: 0.5
        }
      );
  
      // Animation de la description avec effet machine à écrire
      const description = contentRef.current.querySelector('p');
  
      gsap.fromTo(description,
        {
          text: '',
        },
        {
          text: description.textContent,
          duration: 3,
          delay: 1.7,
          ease:'none'
  
        }
      )
    });
  
    return ctx;
  };



  