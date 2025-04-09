import { FaTruck, FaCheckCircle, FaHeadset } from 'react-icons/fa';

const FearturesTable = [
    {title: 'Livraison rapide', content: 'Recevez vos commandes en un temps record.', icones: <FaTruck size={40} />},
    {title: 'Qualité garantie', content: 'Des produits soigneusement sélectionnés pour vous.', icones: <FaCheckCircle size={40} />},
    {title: 'Support 24/7', content: 'Une assistance disponible à tout moment.', icones: <FaHeadset size={40} />},
];

export default function FeaturesSection() {
  return (
    <div className="py-10 bg-gray-800 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Pourquoi choisir Zurea ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {FearturesTable.map((element, index) => (
            <FeaturesComponent key={index} props={element}/>
        ))}
      </div>
    </div>
  );
}

const FeaturesComponent = ({props}) => {
    return (
        <div className="text-center">
            <div className="flex justify-center mb-4 text-purple-400 animate-pulse">{props.icones}</div>
            <h3 className="text-xl font-semibold text-white">{props.title}</h3>
            <p className='text-white'>{props.content}</p>
        </div>
    );
}