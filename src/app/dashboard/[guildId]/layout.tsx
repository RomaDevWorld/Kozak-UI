import Navbar from '@/components/Navbar'
import PartialGuild from '@/types/PartialGuild'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

export async function generateMetadata({ params }: { params: { guildId: string } }): Promise<Metadata> {
  const response = await fetch(process.env.NEXT_PUBLIC_APIURL + '/guilds/' + params.guildId, { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` }, next: { revalidate: 60 } })

  if (!response.ok) return { title: 'Cossack Dashboard' }
  const data: PartialGuild = await response.json()

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
