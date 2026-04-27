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
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm">
      <div className="flex justify-center gap-10 py-4 font-medium">

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`relative transition duration-300 
              ${location.pathname === link.path
                ? "text-gray-900"
                : "text-gray-600 hover:text-gray-900"}
            `}
          >
            {link.name}

            {/* Active underline */}
            {location.pathname === link.path && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-900 rounded-full"></span>
            )}
          </Link>
        ))}

      </div>
    </nav>
  );
}