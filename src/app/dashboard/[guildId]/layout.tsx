import Navbar from '@/components/Navbar'
import PartialGuild from '@/types/PartialGuild'
import fetchGuild from '@/utils/api/fetchGuild'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export async function generateMetadata({ params }: { params: { guildId: string } }): Promise<Metadata> {
  const response = await fetchGuild(params.guildId)

  if (!response.ok) return { title: 'Cossack Dashboard' }
  const data: PartialGuild = await response.json()

  return {
    title: `Cossack Dashboard | ${data.name}`,
  }
}
export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { guildId: string } }) {
  const response = await fetchGuild(params.guildId)
  const data: PartialGuild = await response.json()

  return (
    <div>
      <Navbar guild={data} />
      {children}
      <ToastContainer position="bottom-right" theme="dark" autoClose={1500} newestOnTop={true} />
    </div>
  )
}
