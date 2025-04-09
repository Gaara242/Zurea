

const categories = [
    { name: "Électronique", image: "/images/slider3.png" },
    { name: "Mode", image: "/images/vendre-vetements.webp" },
    { name: "Sport", image: "/images/p6.png" },
    { name: "Beauté", image: "/images/ecologique.jpeg" }
  ]

export default function CategoriesComponent() {

    return(
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-gray-600">Catégories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden shadow-md">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover transition duration-300 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}