import Image from "next/image";

export default function Marquee() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
      <div className="md:flex items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Livraison Gratuite</h2>
          <p className="text-indigo-100">Sur toutes les commandes de plus de $50</p>
        </div>
        <button className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-300">
          Acheter maintenant
        </button>
      </div>
    </div>
  </section>
  );
}