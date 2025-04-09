"use client";

import Link from "next/link";
import { useState } from "react";
import { useUserStore } from "@/Components/Context/localSorageGestion";
import { useRouter } from "next/navigation"; 
import { Navbar } from "@/Components/HeroComponents/navbar";

export default function Logg() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const setUser = useUserStore((state) => state.setUser);

    async function Login(email, password) {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://backgi.eces-code.com/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError("Échec de la connexion. Vérifiez vos identifiants.");
                return;
            }

            const data = await response.json();
            const token = data.token;

            localStorage.setItem("token", token);
            setUser(token); 
            alert("Connexion réussie !");
            router.push("/");

        } catch (err) {
            setError("Erreur lors de la connexion : " + err.message);
        } 
        
        finally {
            setLoading(false);
        }
    }

    function submit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");

        Login(email, password);
    }

    return (
        <> 
            <Navbar/>
            <br/><br/>
            <div className="flex justify-center items-center  m-8">
            <div className="bg-white p-8 rounded-lg shadow-md border w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Se connecter</h2>
                <form onSubmit={submit} className="space-y-4">
                    {error && (
                        <div className="text-red-600 text-sm text-center bg-red-100 p-2 rounded">
                            {error}
                        </div>
                    )}
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
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 text-white font-semibold cursor-pointer rounded-md shadow-sm ${
                            loading ? "bg-purple-400" : "bg-purple-600 hover:bg-purple-800"
                        }`}
                    >
                        {loading ? "Connexion en cours..." : "Se connecter"}
                    </button>
                    <p className="text-center text-sm text-gray-600">
                        Pas de compte ?{" "}
                        <Link href="/Sigin-up" className="text-purple-600 hover:text-purple-500">
                            S'inscrire
                        </Link>
                    </p>
                </form>
            </div>
        </div>
        </>
    );
}