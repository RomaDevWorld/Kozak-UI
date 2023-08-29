import PartialGuild from '@/types/PartialGuild'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import AddBotButton from '@/components/buttons/AddBotButton'

const DashboardPage = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_APIURL + '/guilds/', { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` }, next: { revalidate: 60 } })
  if (!response.ok) return
  const guilds: PartialGuild[] = await response.json()

  return (
    <div className="flex flex-col w-full h-full items-center gap-5">
      <h1 className="font-bold text-3xl text-center">Please select a Guild</h1>
      <div className="grid gap-3">
        {guilds.map((guild) => (
          <div key={guild.id}>
            <Link href={`/dashboard/${guild.id}`}>
              <Image src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt="Guild icon" width={200} height={200} className="rounded-lg" />
              <h1 className="text-2xl font-bold text-center">{guild.name}</h1>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2>{`Don't see your guilds? Try adding the bot to your server!`}</h2>
        <AddBotButton />
      </div>
    </div>
  )
}

export default DashboardPage
