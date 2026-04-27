import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        formRef.current.reset();

        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pt-28 px-6 md:px-20 bg-[#f8f5f2] min-h-screen text-gray-800 overflow-y-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-serif">
          Let’s Connect
        </h1>

        <p className="mt-2 text-gray-600">
          Feel free to reach out for collaborations, commissions, or just to say hello.
        </p>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center gap-8 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {[
          { icon: <FaInstagram />, link: "https://www.instagram.com/astha_tiwari3006?igsh=bmZ3YW15c3hwYmE2" },
          { icon: <FaEnvelope />, link: "mailto:asthatiwari498@gmail.com" },
        ].map((item, i) => (
          <a key={i} href={item.link} target="_blank" className="group">
            <motion.div
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-2xl text-gray-600 group-hover:text-black transition relative"
            >
              {item.icon}

              {/* Glow effect */}
              <div className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-30 bg-gray-400 rounded-full"></div>
            </motion.div>
          </a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="mt-6 max-w-xl mx-auto bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-sm"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-[#f5f1ec] outline-none focus:ring-2 focus:ring-gray-300"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-[#f5f1ec] outline-none focus:ring-2 focus:ring-gray-300"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="p-3 h-15 rounded-lg bg-[#f5f1ec] outline-none focus:ring-2 focus:ring-gray-300"
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-gray-800 text-white py-3 rounded-full hover:bg-gray-700 transition"
          >
            Send Message
          </button>

          {/* ✅ Success Message */}
          {success && (
            <motion.p
              className="text-green-600 text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}

        </form>
      </motion.div>

      <div className="h-20"></div>
    </div>
  );
}