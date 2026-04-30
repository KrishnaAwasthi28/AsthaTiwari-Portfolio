import { useEffect, useState, useMemo } from "react";
import { client } from "../sanity/client";
import { motion } from "framer-motion";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch data
  useEffect(() => {
    client
      .fetch(`*[_type == "artwork"]{
        _id,
        title,
        category,
        image{
          asset->{url}
        }
      }`)
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  // Filter logic
  const filteredImages = useMemo(() => {
    return filter === "all"
      ? images
      : images.filter((item) => item.category === filter);
  }, [images, filter]);

  // Tabs (IMPORTANT FIX)
  const tabs = [
    { label: "All", value: "all" },
    { label: "Paintings", value: "paintings" },
    { label: "Installations", value: "installations" },
    { label: "Collaborations", value: "collaborations" }, // ✅ matches Sanity
  ];

  return (
    <div className="pt-28 px-6 md:px-20 bg-[#f8f5f2] min-h-screen">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-10">
        Gallery
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`px-5 py-2 rounded-full border transition
              ${
                filter === tab.value
                  ? "bg-gray-800 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Collaboration Description */}
      {filter === "collaborations" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800">
            “Between Rooms”
          </h2>

          <p className="text-gray-500 mt-1 italic">
            Collaborative Installation • Variable • 2025–26
          </p>

          <p className="mt-3 text-gray-600">
            A collaborative installation in Student's Biennale, Kochi, with
            Sagarika Sarkar and Shubham Das.
          </p>

          <p className="mt-3 text-gray-600 leading-relaxed">
            Exploring middle class domestic life and emotional complexity.
            Everyday objects like beds, mosquito nets, ants and insects become
            carriers of memory and tension. The work highlights layered domestic
            and ecological narratives.
          </p>

          <div className="w-20 h-[2px] bg-gray-800 mx-auto mt-6"></div>
        </motion.div>
      )}

      {/* Grid */}
      <motion.div
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {filteredImages.map((item) => (
          <motion.div
            key={item._id}
            className="relative rounded-xl group cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedImage(item)}
          >
            {/* Image Container */}
            <div className="w-full h-72 flex items-center justify-center bg-[#f5f1ec] rounded-xl overflow-hidden p-2">
              <img
                src={item.image?.asset?.url}
                alt={item.title}
                loading="lazy"
                className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl">
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
          className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            ✕
          </button>

          {/* Image */}
          <motion.img
            src={selectedImage.image?.asset?.url}
            alt="preview"
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />

          {/* Title */}
          <p className="text-white mt-4 text-center text-lg">
            {selectedImage.title}
          </p>
        </div>
      )}

    </div>
  );
}