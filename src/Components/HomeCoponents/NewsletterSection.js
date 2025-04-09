import Link from "next/link";

export default function NewsletterSection() {
  return (
    <div className="py-12 text-black text-center" style={{backgroundImage: "url('/Images/background.webp')", backgroundSize: 'cover', backgroundPosition: 'center', height:'250px', width:'100%'}}>	
      <h2 className="text-3xl font-bold mb-4">Restez informé(e)</h2>
      <p className="mb-6">Inscrivez-vous à notre newsletter pour recevoir des offres exclusives et les dernières nouveautés.</p>
      <form className="flex justify-center gap-4">
      <Link href={'/contact'} className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-400 hover:text-black">
          Contact
        </Link>

      </form>
    </div>
  );
}