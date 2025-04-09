
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const ContactInfo = () => {
    const contactDetails = [
        {
            icon: <FaPhone className="text-2xl" />,
            title: "Téléphone",
            info: "+000 655 555 ",
            detail: "Lun-Ven de 8h à 18h"
        },
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: "Email",
            info: "contact@zurea.com",
            detail: "Réponse sous 24h"
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            title: "Adresse",
            info: "123 Avenue Centrale",
            detail: "Brazzaville, Congo"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 animate-slide">
            {contactDetails.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-purple-600 mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-purple-600 font-medium mb-1">{item.info}</p>
                    <p className="text-gray-500 text-sm">{item.detail}</p>
                </div>
            ))}
        </div>
    );
};