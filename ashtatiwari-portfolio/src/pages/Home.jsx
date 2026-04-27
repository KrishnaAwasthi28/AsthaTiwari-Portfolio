import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f1ec] px-4 md:px-20 pt-24 md:pt-32 pb-16">

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl w-full">

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-xl"
        >
          {/* Name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-serif text-gray-800 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Astha Tiwari
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="mt-3 text-gray-500 text-base md:text-lg italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            “Art that speaks beyond words”
          </motion.p>

          {/* Description */}
          <motion.p
            className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Varanasi based contemporary visual artist working with themes of
            memory, fragility, and unseen persistence, often through the
            metaphor of insects. My practice traces the subtle presence of what
            is left behind where absence becomes a space of quiet reflection.
            Through delicate forms and repetitive gestures, I explore how
            emotions linger, accumulate, and quietly shape our inner landscapes.
            “What remains, continues to speak.”
          </motion.p>

          {/* BUTTONS (FIXED) */}
          <div className="mt-6 flex flex-row flex-wrap gap-3 justify-center md:justify-start">

            {/* View Works */}
            <motion.button
              onClick={() => navigate("/gallery")}
              className="px-5 py-2.5 md:px-6 md:py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              View Works
            </motion.button>

            {/* View Resume */}
            <motion.a
              href="/resume.jpeg"
              download="Astha_Tiwari_Resume"
              className="px-5 py-2.5 md:px-6 md:py-3 border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              View Resume
            </motion.a>

          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#e8e2dc] to-transparent rounded-full blur-2xl scale-110"></div>

          {/* Image */}
          <motion.img
            src="/asthatiwari-1.jpeg"
            alt="artist"
            className="relative w-52 sm:w-64 md:w-96 object-contain rounded-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}