import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FiShoppingCart,  FiStar, FiChevronRight } from 'react-icons/fi'

const Products = [
    {
      name: "Casque Audio Sans Fil",
      price: 129.99,
      oldPrice: 159.99,
      style: '0',
      Image: "/images/Bluetooth-a-reduction-de-bruit-768x480.webp"
    },
    {
      name: "Vetements",
      price: 199.99,
      oldPrice: 249.99,
      style: '100px',
      Image: "/images/vendre-vetements.webp"
    },
    {
      name: "Iphone 16",
      price: 899.99,
      style: '0',
      Image: "/images/Capture_decran_2024-09-09_a_19.42.06.png"
    }
  ]


export default function NouveauteSection (){

    return(
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-gray-600">Nouveautés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Products.map((element, index) => (
            <Nouveaute key={index} props={element}/>
          ))}
        </div>
      </section>

    )
} 


const Nouveaute = ({props}) => {

    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-1000 hover:transform hover:-translate-y-5 " style={{marginTop:props.style}}>
              <div className="h-64 bg-gray-300">
                <Image
                  height={400}
                  width={400}
                  src={props.Image}
                  alt={props.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-2">
                  Nouveau
                </span>
                <h3 className="text-xl font-bold mb-2 text-purple-300">{props.name}</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez notre dernier produit avec des fonctionnalités révolutionnaires.
                </p>
                <button className="text-indigo-600 font-medium hover:text-indigo-800 ">
                  <Link href='/Boutique' className='flex items-center hover:gap-2'>Découvrir <FiChevronRight className="ml-1" /></Link>
                </button>
              </div>
        </div>
    )
}