"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import { useUserStore, deconnexion } from "../Context/localSorageGestion";

const links = [
  { title: "Home", link: "/" },
  { title: "Boutique", link: "/Boutique" },
  { title: "A propos", link: "/About" },
  { title: "Contact", link: "/contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    deconnexion();
    clearUser();
  };
  const menuVariants = {
    hidden: {
      clipPath: "circle(30px at calc(100% - 40px) 40px",
      transition: { duration: 0.4 },
    },
    visible: {
      clipPath: "circle(1500px at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    exit: {
      clipPath: "circle(30px at calc(100% - 40px) 40px)",
      transition: {
        delay: 0.2,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="flex justify-between items-center w-full p-7 relative z-50 bg-base-100">
      <Logo />

      <nav className="hidden sm:flex sm:space-x-10">
        {links.map((element, index) => (
          <div key={index} className="hover:underline text-black hover:text-purple-600">
            <Link href={element.link}>{element.title}</Link>
          </div>
        ))}
      </nav>
      
      <div className="hidden sm:flex items-center gap-4">
        <Link href="/Boutique/Basket" className="relative flex items-center text-purple-600 hover:text-purple-700">
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartCount}
            </span>
          )}
        </Link>

        {user ? (
          <button
            onClick={handleLogout} className="px-4 py-2 border rounded-lg text-red-400 border-red-400 hover:bg-red-600 hover:text-white">Déconnexion
          </button>
        ) : (
          <Link
            href="/Sigin"
            className="px-4 py-2 border rounded-lg text-purple-400 border-purple-400 hover:bg-purple-60 hover:text-black-100">Connexion
          </Link>
        )}
      </div>

      <motion.button
        onClick={toggleMenu}
        className="sm:hidden absolute top-7 right-4 z-50 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
        whileTap={{ scale: 0.9 }}>
        <BurgerIcon isOpen={isMenuOpen} />
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants} className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
          <motion.div
              className="flex flex-col items-center gap-8 text-2xl"
              initial="closed"
              animate="open"
              transition={{ staggerChildren: 0.1 }}>
              {links.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.link}
                    onClick={closeMenu}
                    className="text-gray-800 hover:text-purple-600"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/Boutique/Basket"
                  className="flex items-center gap-2 text-purple-600"
                  onClick={closeMenu}
                >
                  <FaShoppingCart size={24} />
                  <span>Panier ({cartCount})</span>
                </Link>
              </motion.div>

              {user ? (
                <motion.button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  variants={itemVariants}
                  className="px-6 py-3 border rounded-lg text-red-400 border-red-400 hover:bg-red-600 hover:text-white"
                >
                  Déconnexion
                </motion.button>
              ) : (
                <Link
                  href="/Sigin"
                  onClick={closeMenu}
                  className="px-6 py-3 border rounded-lg text-purple-400 border-purple-400 hover:bg-purple-600 hover:text-white"
                >
                  Connexion
                </Link>
              )}

              <motion.div
                variants={itemVariants}
                className="flex space-x-6 mt-8"
              >
                <SocialIcon icon={<FaFacebook size={24} />} color="text-blue-600" />
                <SocialIcon icon={<FaWhatsapp size={24} />} color="text-green-500" />
                <SocialIcon icon={<FaInstagram size={24} />} color="text-pink-500" />
                <SocialIcon icon={<FaTiktok size={24} />} color="text-black" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const BurgerIcon = ({ isOpen }) => (
  <motion.div initial={false} animate={isOpen ? "open" : "closed"} className="relative w-6 h-6">
    <motion.span
      className="absolute block w-6 h-0.5 bg-black"
      variants={{
        closed: { top: "0.25rem", rotate: 0 },
        open: { top: "0.75rem", rotate: 45 }
      }}
    />
    <motion.span
      className="absolute block w-6 h-0.5 bg-black"
      variants={{
        closed: { top: "0.75rem", opacity: 1 },
        open: { opacity: 0 }
      }}
    />
    <motion.span
      className="absolute block w-6 h-0.5 bg-black"
      variants={{
        closed: { top: "1.25rem", rotate: 0 },
        open: { top: "0.75rem", rotate: -45 }
      }}
    />
  </motion.div>
);

const SocialIcon = ({ icon, color }) => (
  <motion.div
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.9 }}
    className={`${color} hover:opacity-80`}
  >
    {icon}
  </motion.div>
);

export const Logo = () => (
  <div className="text-4xl font-bold text-purple-400">
    ZUREA
  </div>
);