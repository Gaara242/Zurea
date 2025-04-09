"user client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";
import { IoClose } from "react-icons/io5";



const MODAL_ANIMATIONS = {
  overlay: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  },
  modal: {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  },
  image: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};

export function ProductModal({ article, isOpen, onClose }) {
  if (!article) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            variants={MODAL_ANIMATIONS.overlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl 
                     bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            variants={MODAL_ANIMATIONS.modal}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/80 rounded-full p-2
                       hover:bg-white transition-colors"
            >
              <IoClose size={24} className="text-gray-600 cursor-pointer" />
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                variants={MODAL_ANIMATIONS.image}
                className="relative h-[300px] md:h-full"
              >
                <Image
                  height={400}
                  width={400}
                  src={`https://backgi.eces-code.com/${article.image}`}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="p-4 space-y-2">
                <h2 className="text-2xl font-bold text-gray-800">{article.title}</h2>
                
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-purple-600">
                    {article.price} XAF
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {article.content || 
                       "Aucune description disponible pour ce produit."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}