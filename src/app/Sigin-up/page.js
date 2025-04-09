"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/Components/HeroComponents/navbar";

export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    async function Register(name, email, password, password_confirmation) {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://backgi.eces-code.com/api/register", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ name, email, password, password_confirmation })
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Échec de l'inscription. Vérifiez vos informations.");
                return;
            }
            alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
            router.push("/Sigin");
        } 
        catch (err) {
            setError("Erreur lors de l'inscription : " + err.message);
        } 
        finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");
        const password_confirmation = data.get("confirm");  

        if (password !== password_confirmation) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }
        if (password.length < 8) {
            setError("Mot de passe trop court, minimum 8 caractères.");
            return;
        }

        Register(name, email, password, password_confirmation); 
    };

    // bg-gradient-to-r from-purple-600 to-purple-800

    return (
        <>
            <Navbar></Navbar>
            <div className="flex justify-center items-center min-h-screen mx-4">
            <div className="bg-white p-8 rounded-lg shadow-lg border w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Créer un compte</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="text-red-600 text-sm text-center bg-red-100 p-2 rounded">
                            {error}
                        </div>
                    )}
                    <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                            Nom
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Votre nom"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Votre email"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Votre mot de passe"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">
                            Confirmer le mot de passe
                        </label>
                        <input
                            type="password"
                            name="confirm"
                            id="confirm"
                            placeholder="Confirmez votre mot de passe"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 px-4 text-white font-semibold rounded-md cursor-pointer shadow-sm transition-all duration-300 ${
                            loading ? "bg-purple-400 animate-pulse" : "bg-purple-600 hover:bg-purple-700"
                        }`}
                    >
                        {loading ? "Inscription en cours..." : "S'inscrire"}
                    </button>
                    <p className="text-center text-sm text-gray-600">
                        Déjà un compte ?{" "}
                        <a href="/Sigin" className="text-purple-600 hover:text-purple-500">
                            Se connecter
                        </a>
                    </p>
                </form>
            </div>
        </div>
        </>
    );
}