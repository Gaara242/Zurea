import { FaFacebook, FaTwitter, FaTiktok, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Logo } from '../HeroComponents/navbar';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center md:text-left">
                        <Logo />
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            Chez ZUREA, nous nous engageons à offrir des produits de haute qualité et un service client exceptionnel.
                        </p>
                        <div className="mt-6 flex justify-center md:justify-start space-x-4">
                            <SocialLink href="https://www.facebook.com" icon={<FaFacebook size={20} />} />
                            <SocialLink href="https://www.twitter.com" icon={<FaTwitter size={20} />} />
                            <SocialLink href="https://www.tiktok.com" icon={<FaTiktok size={20} />} />
                            <SocialLink href="https://www.instagram.com" icon={<FaInstagram size={20} />} />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
                        <ul className="space-y-2">
                            <FooterLink href="/about" text="À propos" />
                            <FooterLink href="/products" text="Nos produits" />
                            <FooterLink href="/contact" text="Contact" />
                            <FooterLink href="/privacy" text="Politique de confidentialité" />
                        </ul>
                    </div>
                    <div className="text-center md:text-right">
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <div className="space-y-3">
                            <ContactInfo icon={<FaEnvelope />} text="contact@zurea.com" />
                            <ContactInfo icon={<FaPhone />} text="+242 06-123-456" />
                            <ContactInfo icon={<FaMapMarkerAlt />} text="123 Rue du Commerce, Brazzavile" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 my-8"></div>

                <div className="text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} ZUREA. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}

// Composants utilitaires
function SocialLink({ href, icon }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, text }) {
    return (
        <li>
            <a 
                href={href} 
                className="text-gray-400 hover:text-white transition-colors duration-300"
            >
                {text}
            </a>
        </li>
    );
}

function ContactInfo({ icon, text }) {
    return (
        <div className="flex items-center justify-center md:justify-end space-x-2 text-gray-400">
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    );
}