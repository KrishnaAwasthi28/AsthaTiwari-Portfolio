import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.location.href =
      "https://api.whatsapp.com/send?phone=918960444768";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">

      {/* Label */}
      <div className="bg-white px-3 py-2 rounded-full shadow-md text-sm text-gray-700 pointer-events-none">
        Chat on WhatsApp
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className="bg-green-500 p-4 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </button>

    </div>
  );
}