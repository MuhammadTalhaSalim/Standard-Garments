
// import React, { useState } from "react";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="bg-[#2a314b] h-16 flex items-center sticky top-0 z-50 shadow-lg">
//       <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-6">
//         {/* Logo Section */}
//         <div className="text-white text-2xl md:text-4xl font-bold">
//           <a href="#Home" className="block py-4">
//             Standard Garments
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-white focus:outline-none focus:text-yellow-400 transition-colors duration-300"
//           aria-label="Toggle navigation menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Desktop Navigation Links */}
//         <ul className="hidden md:flex items-center h-16">
//           <li className="h-16 flex items-center">
//             <a
//               href="#Home"
//               className="flex items-center h-16 px-6 text-xl font-medium bg-yellow-400 hover:text-black transition-all duration-300"
//             >
//               Home
//             </a>
//           </li>
//           <li className="h-16 flex items-center">
//             <a
//               href="#AboutUs"
//               className="flex items-center h-16 px-6 text-white text-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
//             >
//               About Us
//             </a>
//           </li>
//           <li className="h-16 flex items-center">
//             <a
//               href="#Services"
//               className="flex items-center h-16 px-6 text-white text-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
//             >
//               Services
//             </a>
//           </li>
//           <li className="h-16 flex items-center">
//             <a
//               href="#ContactUs"
//               className="flex items-center h-16 px-6 text-white text-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
//             >
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={`md:hidden absolute top-16 left-0 w-full bg-[#2a314b] shadow-lg transition-all duration-300 ease-in-out ${
//           isMenuOpen
//             ? "opacity-100 visible transform translate-y-0"
//             : "opacity-0 invisible transform -translate-y-2"
//         }`}
//       >
//         <ul className="flex flex-col">
//           <li>
//             <a
//               href="#Home"
//               onClick={closeMenu}
//               className="block px-6 py-4 text-white text-lg font-medium bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#AboutUs"
//               onClick={closeMenu}
//               className="block px-6 py-4 text-white text-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 border-t border-gray-600"
//             >
//               About Us
//             </a>
//           </li>
//           <li>
//             <a
//               href="#Services"
//               onClick={closeMenu}
//               className="block px-6 py-4 text-white text-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 border-t border-gray-600"
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#ContactUs"
//               onClick={closeMenu}
//               className="block px-6 py-4 text-white text-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 border-t border-gray-600"
//             >
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#2a314b] h-16 flex items-center sticky top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-6">
        {/* Logo Section */}
        <div className="text-white text-2xl md:text-4xl font-bold">
          <Link to="/#Home" className="block py-4">
            Standard Garments
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus:text-yellow-400 transition-colors duration-300"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center h-16">
          <li className="h-16 flex items-center">
            <Link
              to="/#Home"
              className="flex items-center h-16 px-6 text-xl font-medium bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li className="h-16 flex items-center">
            <Link
              to="/#AboutUs"
              className="flex items-center h-16 px-6 text-white text-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              About Us
            </Link>
          </li>
          <li className="h-16 flex items-center">
            <Link
              to="/#Services"
              className="flex items-center h-16 px-6 text-white text-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Services
            </Link>
          </li>
          <li className="h-16 flex items-center">
            <Link
              to="/#ContactUs"
              className="flex items-center h-16 px-6 text-white text-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-[#2a314b] shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible transform translate-y-0"
            : "opacity-0 invisible transform -translate-y-2"
        }`}
      >
        <ul className="flex flex-col">
          <li>
            <Link
              to="/#Home"
              onClick={closeMenu}
              className="block px-6 py-4 text-white text-lg font-medium bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#AboutUs"
              onClick={closeMenu}
              className="block px-6 py-4 text-white text-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 border-t border-gray-600"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/#Services"
              onClick={closeMenu}
              className="block px-6 py-4 text-white text-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 border-t border-gray-600"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/#ContactUs"
              onClick={closeMenu}
              className="block px-6 py-4 text-white text-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 border-t border-gray-600"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;