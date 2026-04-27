import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProfileCard from "../components/ProfileCard";

export default function About() {
  const exhibitions = [
    "2026 - Group Exhibition 'Fragmented Narratives', Bharat Kala Bhawan Museum, Varanasi, UP, India",
    "2025–2026 - Kochi Muziris Biennale Exhibition (6th Edition) 'For the time being', Kerala, India",
    "2025–2026 - Dera Community’s 'Sanjhiya Zameen' Exhibition, U.P., India",
    "2025 - 90th All India Exhibition of Art, Indian Academy of Arts, Amritsar, India",
    "2025 - 11th Annual Women Artist’s Exhibition, Punjab Kala Bhawan Museum, Chandigarh",
    "2025 - 16th International Rangmalhar Exhibition, Ahivasi Art Gallery, B.H.U.",
    "2024 - BHU Visual Voices for Peace, International Exhibition, Ahivasi Art Gallery, BHU",
    "2024 - 'Celebration', Group Exhibition, Ahivasi Art Gallery, B.H.U.",
    "2023 - 'Buniyaad' by 'Purpose NGO', documented Exhibition, Hotel Golden Tulip, Charbagh, Lucknow",
    "2022 - 'Gadkari' Miniature Exhibition, Ka Art Gallery, Varanasi, UP, India",
    "2020 - Solo Exhibition 'Visuals', School Art Gallery, Varanasi, UP, India",
  ];

  const workshops = [
    "2026 - Cyanotype Workshop by Dera Art Community, Varanasi",
    "2025 - International workshop on “Peace” by Prof. Chawky Frenn (USA), Fulbright Scholar and artist at Faculty of Visual Arts, BHU",
    "2024 - Mural Workshop, Skill Development Initiative, Faculty of Visual Arts, BHU",
    "2024 - Pahari Miniature Workshop mentored Raja Ram Sharma at B.H.U ,Varanasi ",
    "2023 - Worked under Suresh K. Nair in wall mural project titled “Kashi Darpan” at Lal Bahadur Shastri International Airport, Varanasi",
    "2023 - International Workshop on Forms in painting, architecture and calligraphy by Prof. Joyce Plath (California, USA) at Faculty of Visual Arts, BHU",
    "2023 - Volunteered in Brick Kiln Project with “PURPOSE” (NGO) titled “BUNIYAAD”",
    "2022 - “Gadkari” – A miniature painting workshop mentored by Rajat Pandey",
    "2022 - “Water, Plant and Sunlight” – performance art workshop mentored by German artist Lena Mallann",
    "2022 - IAW, UP workshop – “Kashi ke rang vasi ke sang” ",
    "2022 - Urban Sketchers in Varanasi workshop",
  ];

  const awards = [
    "2025 – Awardee in 11th Annual Women Artist’s Exhibition, Chandigarh, India",
    "2024 – Memento from Eurasia World Record for largest wall mural under the guidance of Suresh K. Nair “Kashi Darpan” at Lal Bahadur Shastri International Airport, Varanasi",
  ];

  return (
    <div className="pt-28 px-6 md:px-20 bg-[#f8f5f2] text-gray-800">
      {/* <motion.h1
        className="text-4xl md:text-5xl font-serif text-center text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About
      </motion.h1> */}
      {/* ================= ARTIST STATEMENT ================= */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Image */}
        <motion.img
          src="/asthatiwari-2.jpeg"
          alt="artist"
          className="
            w-full 
            max-w-[260px] sm:max-w-[300px] md:max-w-[380px]
            md:w-[35%]
            rounded-xl shadow-md mx-auto
          "
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Statement */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-4xl font-serif">Artist Statement</h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Absence, for me, is not empty—it carries a quiet, lingering
            presence. It exists in fragments of memory and in the spaces between
            what is seen and felt, shaping subtle mental landscapes.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Insects, particularly ants, function as metaphors for persistence,
            vulnerability, and unseen labor. They embody repetition and
            invisible movement, much like thoughts and emotions beneath the
            surface.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            The work explores the tension between presence and absence, holding
            space for what quietly remains beyond what is seen.
          </p>
        </motion.div>
      </div>

      {/* ================= PROFILE ================= */}
      {/* <motion.div
        className="mt-20 text-center max-w-xl mx-auto bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-serif tracking-wide">Astha Tiwari</h2>
        <p className="text-gray-600 mt-2">BFA (2024) | MFA (2026)</p>

        <div className="mt-4 text-gray-500 space-y-1">
          <p>Email: asthatiwari498@gmail.com</p>
          <p>Phone: 8960444768</p>
          <p>Instagram: @yourhandle</p>
        </div>
      </motion.div> */}
      <ProfileCard />

     {/* ================= EXHIBITIONS ================= */}
<motion.div className="mt-16 max-w-6xl mx-auto px-2">
  <SectionTitle title="Exhibitions" />

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    {exhibitions.map((item, i) => {
      const [year, ...rest] = item.split(" - ");

      return (
        <motion.div
          key={i}
          className="group relative w-full max-w-sm bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ delay: i * 0.05 }}
        >
          {/* 🔥 Top Hover Line */}
          <div className="absolute top-0 left-0 h-[3px] w-full bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

          {/* Year */}
          <p className="text-sm text-gray-500 mb-2 font-medium">{year}</p>

          {/* Content */}
          <p className="text-gray-800 font-semibold leading-relaxed">
            🖼 {rest.join(" - ")}
          </p>
        </motion.div>
      );
    })}
  </div>
</motion.div>

      {/* ================= WORKSHOPS ================= */}
      <motion.div className="mt-20 max-w-5xl mx-auto px-2">
        <SectionTitle title="Workshops" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-stretch">
          {workshops.map((item, i) => {
            const [year, ...rest] = item.split(" - ");

            return (
              <motion.div
                key={i}
                className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-sm flex items-start gap-4 hover:shadow-md transition group min-h-[110px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {/* Left Accent */}
                <div className="w-[3px] bg-gray-800 h-full rounded-full scale-y-0 group-hover:scale-y-100 transition origin-top"></div>

                {/* Content */}
                <div>
                  {/* Year */}
                  <p className="text-sm text-gray-500 mb-2 font-medium">
                    {year}
                  </p>

                  {/* Text */}
                  <p className="text-gray-800 font-medium leading-relaxed">
                    🎨 {rest.join(" - ")}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ================= AWARDS ================= */}
      <motion.div className="mt-24 max-w-3xl mx-auto text-center">
        <SectionTitle title="Awards" />

        <div className="space-y-6">
          {awards.map((item, i) => (
            <motion.div
              key={i}
              className="relative bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-2xl shadow-md overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* 🔥 TOP LINE ANIMATION */}
              <span className="absolute top-0 left-0 h-[2px] w-full bg-white/70 scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left"></span>

              {/* ✨ SHIMMER EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>

              {/* 🌟 GLOW */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition"></div>

              {/* CONTENT */}
              <p className="relative z-10 text-lg flex items-center justify-center gap-3">
                🏆 {item}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="h-20"></div>
    </div>
  );
}
