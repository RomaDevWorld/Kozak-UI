import Navbar from '@/components/Navbar'
import fetchGuild from '@/utils/api/fetchGuild'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export async function generateMetadata({ params }: { params: { guildId: string } }): Promise<Metadata> {
  const guild = await fetchGuild(params.guildId)

  return {
    title: `Kozak Dashboard | ${guild.name}`,
  }
}
export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { guildId: string } }) {
  const guild = await fetchGuild(params.guildId)

  return (
    <div className="flex-1">
      <Navbar guild={guild} />
      {children}
      <ToastContainer position="bottom-right" theme="dark" autoClose={1500} newestOnTop={true} />
    </div>
  )
}
