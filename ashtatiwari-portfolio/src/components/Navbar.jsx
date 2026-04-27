import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
      
      <div className="flex justify-center md:justify-center gap-5 md:gap-10 py-3 md:py-4 px-4 text-sm md:text-base font-medium">
        
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`relative transition duration-300 whitespace-nowrap
              ${
                location.pathname === link.path
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }
            `}
          >
            {link.name}

            {/* Active underline */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-gray-900 rounded-full transition-all duration-300
                ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }
              `}
            ></span>
          </Link>
        ))}

      </div>
    </nav>
  );
}