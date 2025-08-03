import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useUserStore } from "../Context/localSorageGestion";
import { useRouter } from "next/navigation";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { ProductModal } from "./ProductModal";
import Image from "next/image";

const ANIMATIONS = {
  card: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  },
  button: {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  }
};


const useCartManager = () => {
  const addToCart = (article) => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = cart.find(item => item.id === article.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: article.id,
          name: article.title,
          price: parseFloat(article.price),
          image: `https://backgi.eces-code.com/${article.image}`,
          quantity: 1
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('storage', { bubbles: true }));
      alert('Article ajouté au panier !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout au panier:', error);
    }
  };

  return { addToCart };
};


const ActionButton = ({ variants, className, onClick, children }) => (
  <motion.button
    variants={variants}
    initial="rest"
    whileHover="hover"
    whileTap="tap"
    className={className}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

export function Card({ article }) {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { addToCart } = useCartManager();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    user ? addToCart(article) : router.push('/Sigin');
  };

  return (<>
    <motion.div
        ref={ref}
        variants={ANIMATIONS.card}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover="hover"
        className="bg-white border-4 border-black rounded-lg shadow-md max-w-60 overflow-hidden"
      >
        <Image
          height={500}
          width={500}
          src={`https://backgi.eces-code.com/${article.image}`}
          alt={article.title}
          className="h-[230px] w-full object-cover"
        />
        
        <div className="p-4 ">
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold truncate">{article.title}</h4>
            <p className="text-gray-600 font-medium">{article.price} XAF</p>
          </div>
          
          <div className="flex justify-around gap-2 items-center">
            <ActionButton
              variants={ANIMATIONS.button}
              className="py-2 px-2 rounded-lg bg-green-700 text-white font-medium cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Detail
            </ActionButton>
            <ActionButton
              variants={ANIMATIONS.button}
              className="py-2 px-4 rounded-lg bg-black text-white cursor-pointer"
              onClick={handleAddToCart}
            >
              <FaShoppingCart size={25} />
            </ActionButton>
          </div>
        </div>
      </motion.div>
      <ProductModal 
        article={article}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
  </>

  );
}