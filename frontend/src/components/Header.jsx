import React from 'react'
import { useState,useRef,useEffect } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {

 const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

   useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
    <header> 
    <nav className=' bg-blue-600 h-20 flex justify-between items-center'>
    <div className='text-white font-mono font-extrabold text-xl ml-12'><h1>Expense Tracker</h1></div>
     <div className="relative inline-block mr-12" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-md text-2xl text-center  transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
      >
        <FaRegUserCircle />
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute right-0 mt-2 z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5  shadow-sm focus:outline-none"
        >
          <li role="menuitem" className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100">
            Menu Item 1
          </li>
          <li role="menuitem" className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100">
            Menu Item 2
          </li>
          <li role="menuitem" className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100">
            Menu Item 3
          </li>
        </ul>
      )}
    </div>
    </nav>
    </header> 
    </>
  )
}

export default Header
