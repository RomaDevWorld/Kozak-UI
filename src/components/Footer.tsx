import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full mt-10 px-5 flex justify-between items-center py-5 border-t-2 border-t-white">
      <Link href={'/'} className="flex items-center gap-2">
        <Image src={'/avatar.webp'} alt="Kozak logo" width={40} height={40} className="rounded-md" />
        <h1 className="font-bold">kozakbot.xyz</h1>
      </Link>
      <div className="flex gap-2">
        <Link href={process.env.LINKS_GITHUB as string}>
          <Image className="invert" src="/github.svg" alt="github social" height={25} width={25} />
        </Link>
        <Link href={process.env.LINKS_DISCORD as string}>
          <Image className="invert" src="/discord.svg" alt="discord social" height={25} width={25} />
        </Link>
      </div>
      <Link href={'https://u24.gov.ua/about'} className="flex gap-2 items-center">
        <p>Stand with Ukraine</p>
        <Image src="/Ukraine.svg" width={25} height={25} alt="Ukrainian donation link" className="rounded-sm" />
      </Link>
    </footer>
  )
}

export default Footer
