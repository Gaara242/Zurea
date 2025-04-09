"use client";

import { useState, useEffect } from 'react';
import { Navbar } from "@/Components/HeroComponents/navbar";
import { CartItem } from "@/Components/BasketComponents/CartItem";
import { CartSummary } from "@/Components/BasketComponents/CartSummary";
import Link from "next/link";

export default function Basket() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const loadCart = () => {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                try {
                    const parsedCart = JSON.parse(savedCart);
                    setCartItems(parsedCart);
                } catch (error) {
                    console.error('Erreur lors du chargement du panier:', error);
                }
            }
        };
        loadCart();
        window.addEventListener('storage', loadCart);
        return () => window.removeEventListener('storage', loadCart);
    }, []);

    useEffect(() => {
        const newTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotal(newTotal);
    }, [cartItems]);

    const removeItem = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('storage'));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon Panier</h1>
                
                {cartItems.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                        <img 
                            src="/empty-cart.png" 
                            alt="Panier vide"
                            className="w-32 h-32 mx-auto mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Votre panier est vide</h2>
                        <p className="text-gray-500 mb-6">Découvrez nos produits et commencez vos achats</p>
                        <Link 
                            href="/Boutique"
                            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            Continuer mes achats
                        </Link>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <CartItem 
                                    key={item.id}
                                    item={item}
                                    onRemove={removeItem}
                                />
                            ))}
                        </div>
                        <div className="md:col-span-1">
                            <CartSummary total={total} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}