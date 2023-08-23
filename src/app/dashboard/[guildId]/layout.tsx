import Navbar from '@/components/Navbar'
import PartialGuild from '@/types/PartialGuild'
import axios from 'axios'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

export async function generateMetadata({ params }: { params: { guildId: string } }): Promise<Metadata> {
  const { data } = await axios.get<PartialGuild>(process.env.NEXT_PUBLIC_APIURL + '/guilds/' + params.guildId, { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` } })

  return {
    title: `Cossack Dashboard | ${data.name}`,
  }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
