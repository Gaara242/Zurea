import Image from 'next/image';

const PromotionTable = [
    {title: '-30% sur les accessoires', content:"Profitez de cette offre limitée sur notre collection d'accessoires.", image:'/Images/slider3.png'},
    {title: 'Livraison gratuite', content:"Pour toute commande supérieure à 50€", image:'/Images/portrait-demenagement.jpg'}
]

export default function PromotionsSection() {
  return (
    <div className="py-30 bg-purple-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-500">Offres spéciales</h2>
      <div className="flex flex-wrap justify-center gap-6 sm:flex-row">
        {PromotionTable.map((element, index) => (
            <PromotionComponent key={index} props={element} />
        ))}
      </div>
    </div>
  );
}

const PromotionComponent = ({props}) => {
  return (
    <div className="w-80 bg-white shadow-lg rounded-lg p-4 transition-all duration-200 hover:scale-101">
      <Image 
      src={props.image} 
      alt={props.title}
      height={400}
      width={400}

      className="w-full h-58 bg-center object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-purple-300">{props.title}</h3>
      <p className="text-gray-600">{props.content}</p>
    </div>
  );
}