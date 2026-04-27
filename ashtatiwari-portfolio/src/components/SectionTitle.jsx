import { motion } from "framer-motion";

export default function SectionTitle({ title }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-serif inline-block relative">
        {title}

        {/* Animated underline */}
        <motion.span
          className="absolute left-0 -bottom-2 h-[2px] bg-gray-800 w-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          style={{ transformOrigin: "left" }}
        />
      </h2>
    </div>
  );
}