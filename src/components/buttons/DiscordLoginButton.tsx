import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const DiscordLoginButton = () => {
  return (
    <Link href={process.env.NEXT_PUBLIC_APIURL + '/auth/discord'} className=" bg-indigo-500 p-4 rounded-lg flex gap-5">
      <Image src="/discord.svg" alt="Discord Logo" width={50} height={50} /> Login with Discord
    </Link>
  )
}

export default DiscordLoginButton
