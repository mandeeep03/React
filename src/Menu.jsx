import { useState, useEffect, useRef } from "react";
import menuPng from "./assets/menus.png";
import './index.css' ;

function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <img
        src={menuPng}
        alt="menu"
        className="w-5 h-5 cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div
          className=" md:hidden
            absolute right-0 mt-4 w-40
            bg-white/10 backdrop-blur-xl
            border border-white/20
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            rounded-xl p-4
            flex flex-col gap-3
            slide-down
            z-50
          "
        >
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            Projects
          </a>
          <a href="#" className="">
            Contact Me
          </a>
          <a href="#" className="">
            About
          </a>
          <div className="border-t border-black/20 my-1"></div>

          <button
            className="
            px-5 py-2 rounded-xl font-semibold    bg-white/10 border border-black/20 backdrop-blur-xl      hover:bg-black/5 active:scale-95      transition-all duration-200      
    "
          >
            Login
          </button>

          <button
            className="
            px-6 py-2 rounded-xl font-semibold text-white  bg-black/90 shadow-lg hover:bg-black/80   hover:opacity-90 active:scale-95      transition-all duration-200    
    "
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
