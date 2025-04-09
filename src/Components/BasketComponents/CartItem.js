import { FaTrash } from "react-icons/fa"
import { motion } from "framer-motion"

export function CartItem({ item, onRemove }) {

    const variant = {
        button: {
            rest: { scale: 1 },
            hover: { scale: 1.1 },
            tap: { scale: 0.95 }
          }
    }

    return (
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
                <div className="flex-grow">
                    <div className="flex items-center justify-between mt-2">
                        <div>
                            <p className="text-purple-600 font-bold">{item.price.toLocaleString()} XAF</p>
                            <p className="text-gray-500">Quantité: {item.quantity}</p>
                        </div>
                        <h3 className="hidden sm:block font-semibold text-lg text-gray-900">{item.name}</h3>
                        <motion.button 
                            onClick={() => onRemove(item.id)}
                            variant={variant.button}
                            className="p-2 text-red-500 hover:text-red-700 transition-colors"
                        >
                            <FaTrash size={20}  />
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}