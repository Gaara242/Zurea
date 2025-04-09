export default function TestimonialsSection() {
  return (
    <div className="py-20 bg-purple-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-500">Ce que disent nos clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-600 italic">Zurea propose des produits de qualité exceptionnelle. Je suis ravie de mes achats !</p>
          <h4 className="mt-4 font-semibold text-purple-400">- Marie L.</h4>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-600 italic">Livraison rapide et service client au top. Je recommande vivement !</p>
          <h4 className="mt-4 font-semibold text-purple-400">- Paul D.</h4>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-600 italic">Des créations uniques et élégantes. Merci Zurea !</p>
          <h4 className="mt-4 font-semibold text-purple-400">- Sophie T.</h4>
        </div>
      </div>
    </div>
  );
}