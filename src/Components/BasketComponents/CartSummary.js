import Link from "next/link"

export function CartSummary({ total }) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm sticky top-8">
            <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
            <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                    <span>Sous-total</span>
                    <span>{total.toLocaleString()} XAF</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Livraison</span>
                    <span>Gratuite</span>
                </div>
                <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>{total.toLocaleString()} XAF</span>
                    </div>
                </div>
            </div>
            <button 
                onClick={() => alert('Paiement en cours de développement')}
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
                Procéder au paiement
            </button>
            <Link 
                href="/Boutique"
                className="block text-center mt-4 text-purple-600 hover:text-purple-700 font-medium"
            >
                Continuer mes achats
            </Link>
        </div>
    );
}