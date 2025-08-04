
import React from 'react';
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Navbar1() {
  return (
    <nav className="nav-1 bg-slate-200 p-2 text-sm hidden md:block ">
      <ul className="flex justify-between items-center px-1">
        
        <div className="contact">
          <li className="flex items-center gap-1">
            <IoCall />
            <a href="tel:+923224044443">+92322-4044443</a>
          </li>
          <li className="flex items-center gap-1">
            <MdOutlineMail />
            <a href="mailto:m.hashimali@gmail.com">m.hashimali@gmail.com</a>
          </li>
        </div>

        <div className="social flex items-center gap-4 text-xl">
          <li className="p-1 border border-transparent rounded-4xl hover:bg-yellow-400 group transition">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-[#2a314b] group-hover:text-white transition text-2xl" />
            </a>
          </li>
          <li className="p-1 border border-transparent rounded-4xl hover:bg-yellow-400 group transition">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="text-[#2a314b] group-hover:text-white transition text-2xl" />
            </a>
          </li>
          <li className="p-1 border border-transparent rounded-4xl hover:bg-yellow-400 group transition">
            <a href="https://wa.me/923224044443" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className="text-[#2a314b] group-hover:text-white transition text-2xl" />
            </a>
          </li>
        </div>

        <li className="flex items-center gap-1">
          <IoLocationSharp />
          <span>Amir Town, near The Trust School</span>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar1;
// import React from 'react';

// // Mock icons since react-icons isn't available
// const IoCall = () => (
//   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//   </svg>
// );

// const MdOutlineMail = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   </svg>
// );

// const IoLocationSharp = () => (
//   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//     <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//   </svg>
// );

// const FaFacebookF = () => (
//   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//   </svg>
// );

// const AiFillInstagram = () => (
//   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.901 8.246 7.052 7.756 8.349 7.756s2.448.49 3.324 1.297c.897.897 1.387 2.048 1.387 3.345s-.49 2.448-1.387 3.345c-.876.807-2.027 1.297-3.324 1.297zm7.718 0c-1.297 0-2.448-.49-3.324-1.297c-.897-.897-1.387-2.048-1.387-3.345s.49-2.448 1.387-3.345c.876-.807 2.027-1.297 3.324-1.297s2.448.49 3.324 1.297c.897.897 1.387 2.048 1.387 3.345s-.49 2.448-1.387 3.345c-.876.807-2.027 1.297-3.324 1.297z"/>
//   </svg>
// );

// const IoLogoWhatsapp = () => (
//   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
//   </svg>
// );

// function Navbar1() {
//   return (
//     <nav className="nav-1 bg-slate-200 p-2 text-sm hidden md:block">
//       {/* Desktop Layout */}
//       <ul className="flex justify-between items-center px-1">
//         <div className="contact">
//           <li className="flex items-center gap-1 mb-1">
//             <IoCall />
//             <a href="tel:+923224044443" className="hover:text-blue-600 transition-colors">
//               +92322-4044443
//             </a>
//           </li>
//           <li className="flex items-center gap-1">
//             <MdOutlineMail />
//             <a href="mailto:m.hashimali@gmail.com" className="hover:text-blue-600 transition-colors">
//               m.hashimali@gmail.com
//             </a>
//           </li>
//         </div>

//         <div className="social flex items-center gap-4 text-xl">
//           <li className="p-1 border border-transparent rounded-full hover:bg-yellow-400 group transition-colors">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <FaFacebookF className="text-[#2a314b] group-hover:text-white transition-colors text-2xl" />
//             </a>
//           </li>
//           <li className="p-1 border border-transparent rounded-full hover:bg-yellow-400 group transition-colors">
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <AiFillInstagram className="text-[#2a314b] group-hover:text-white transition-colors text-2xl" />
//             </a>
//           </li>
//           <li className="p-1 border border-transparent rounded-full hover:bg-yellow-400 group transition-colors">
//             <a href="https://wa.me/923224044443" target="_blank" rel="noopener noreferrer">
//               <IoLogoWhatsapp className="text-[#2a314b] group-hover:text-white transition-colors text-2xl" />
//             </a>
//           </li>
//         </div>

//         <li className="flex items-center gap-1">
//           <IoLocationSharp />
//           <span>Amir Town, near The Trust School</span>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar1;