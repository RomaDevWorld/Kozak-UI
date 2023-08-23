'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <nav className="border-b-2 flex items-center content-center p-1 mb-2">
        <button onClick={() => setOpen(!open)}>
          <Image className="invert" src="/sidebar.svg" width={25} height={25} alt="Open side menu" />
        </button>
      </nav>
      {open && (
        <div className="flex flex-col items-center fixed w-full h-full bg-black text-2xl z-10">
          <Link href="/dashboard/">Back to menu</Link>
        </div>
      )}
    </div>
  )
}

export default NavBar
