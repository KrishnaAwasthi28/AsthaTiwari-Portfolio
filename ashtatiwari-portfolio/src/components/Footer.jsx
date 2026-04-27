import { FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f5f1ec] border-t border-gray-200 py-8 mt-10">
      
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4">
        
        <a href="https://www.instagram.com/astha_tiwari3006?igsh=bmZ3YW15c3hwYmE2" target="_blank" className="group">
          <FaInstagram className="text-xl text-gray-600 group-hover:text-black transition transform group-hover:scale-110" />
        </a>

        <a href="mailto:asthatiwari498@gmail.com" className="group">
          <FaEnvelope className="text-xl text-gray-600 group-hover:text-black transition transform group-hover:scale-110" />
        </a>

      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Astha Tiwari. All rights reserved.
      </p>

    </footer>
  );
}