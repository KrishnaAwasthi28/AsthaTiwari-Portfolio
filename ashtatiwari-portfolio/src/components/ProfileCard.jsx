import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <motion.div
      className="mt-20 max-w-5xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl shadow-md p-6 md:p-10 hover:shadow-lg transition"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {/* GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT: NAME + CONTACT */}
        <div>

          {/* Name */}
          <h2 className="text-4xl font-serif text-gray-800 text-center md:text-left">
            Astha Tiwari
          </h2>

          <p className="mt-2 text-gray-500 text-center md:text-left">
            BFA (2024) | MFA (2026)
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-4 text-gray-600">

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <FaEnvelope className="text-gray-500" />
              <span>asthatiwari498@gmail.com</span>
            </div>

            {/* <div className="flex items-center gap-3 justify-center md:justify-start">
              <FaPhone className="text-gray-500" />
              <span>8960444768</span>
            </div> */}

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <FaInstagram className="text-gray-500" />
              <span>@astha_tiwari3006</span>
            </div>

          </div>
        </div>

        {/* RIGHT: EDUCATION */}
        <div className="space-y-5">

          <div className="p-5 rounded-xl bg-[#f5f1ec]">
            <p className="text-sm text-gray-500">Bachelor of Fine Arts</p>
            <p className="font-medium text-gray-800">
              Banaras Hindu University, Varanasi
            </p>
            <p className="text-sm text-gray-500">2024</p>
          </div>

          <div className="p-5 rounded-xl bg-[#f5f1ec]">
            <p className="text-sm text-gray-500">Master of Fine Arts</p>
            <p className="font-medium text-gray-800">
              Banaras Hindu University, Varanasi
            </p>
            <p className="text-sm text-gray-500">2026</p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}