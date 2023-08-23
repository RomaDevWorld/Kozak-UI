import Link from 'next/link'
import React from 'react'

const DiscordLoginButton = () => {
  return (
    <Link href={process.env.NEXT_PUBLIC_APIURL + '/auth/discord'} className=" bg-indigo-500 p-4 rounded-lg">
      Login with Discord
    </Link>
  )
}

export default DiscordLoginButton
