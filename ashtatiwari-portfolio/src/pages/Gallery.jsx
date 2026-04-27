import { useEffect, useState, useMemo } from "react";
import { client } from "../sanity/client";
import { motion } from "framer-motion";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch data (runs ONLY once ✅)
  useEffect(() => {
    client
      .fetch(`*[_type == "artwork"]{
        _id,
        title,
        category,
        image{
          asset->{
            url
          }
        }
      }`)
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  // Optimized filtering ✅
  const filteredImages = useMemo(() => {
    return filter === "all"
      ? images
      : images.filter((item) => item.category === filter);
  }, [images, filter]);

  return (
    <div className="pt-28 px-6 md:px-20 bg-[#f8f5f2] min-h-screen">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-10">
        Gallery
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["all", "paintings", "installations", "collaborations"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-5 py-2 rounded-full border transition capitalize
              ${
                filter === tab
                  ? "bg-gray-800 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {filteredImages.map((item) => (
          <motion.div
            key={item._id} // ✅ FIXED KEY
            className="relative overflow-hidden rounded-xl group cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            {/* Image */}
            <img
              src={item.image?.asset?.url}
              alt={item.title}
              loading="lazy"
              onClick={() => setSelectedImage(item.image?.asset?.url)}
              className="w-full h-64 object-cover rounded-xl transition duration-500 group-hover:scale-110"
            />

            {/* 🔥 Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white text-lg font-medium text-center px-4">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="preview"
            className="max-w-[90%] max-h-[90%] rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />
        </div>
      )}

      <div className="h-20"></div>
    </div>
  );
}