import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
<nav className="absolute inset-x-0 top-14 h-20 flex justify-between items-center px-10 z-50">
{/* Logo */}
      <div className="flex items-center h-full">
        <img 
          src="/Grand_Theft_Auto_VI_logo.png" 
          alt="Logo GTA VI" 
          className="h-full object-contain"
        />
      </div>

      <div className="flex gap-6">
        {/* Puedes añadir enlaces más adelante si lo necesitas */}
      </div>
    </nav>
  )
}

export default Navbar
