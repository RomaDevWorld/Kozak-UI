'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PartialGuild from '@/types/PartialGuild'

const NavBar = ({ guild }: { guild: PartialGuild }) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <nav className="border-b-2 flex items-center justify-between p-2 mb-2">
        <button onClick={() => setOpen(!open)}>
          <Image className="invert" src="/sidebar.svg" width={30} height={30} alt="Open side menu" />
        </button>
        <Link href={`/dashboard/${guild.id}`} className="flex justify-center items-center gap-3">
          <span className="text-center text-xl font-bold">{guild.name}</span>
          <Image src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} width={45} className="rounded-full" height={45} alt="Guild icon" />
        </Link>
      </nav>
      {open && (
        <div className="flex flex-col items-center fixed w-full h-full bg-black text-2xl z-10">
          <Link href="/dashboard/">Back to Guild selector</Link>
        </div>
      )}
    </div>
  )
}

export default NavBar
