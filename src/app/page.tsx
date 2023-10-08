import DashboardButton from '@/components/buttons/DashboardButton'
import DiscordLoginButton from '@/components/buttons/DiscordLoginButton'
import features from '@/constants/Features'
import { cookies } from 'next/headers'
import Image from 'next/image'

const Home = () => {
  const isLogged = cookies().has('connect.sid')

  return (
    <main className="flex flex-col items-center gap-5 ">
      <div className="text-3xl font-bold flex flex-col items-center gap-5 p-2">
        <Image src={'/avatar.webp'} priority={true} alt="Bot's avatar" height={200} width={200} className="rounded-full" />
        <h1 className="text-4xl">Say hello to Kozak</h1>
        <h2 className="text-2xl text-center">A completely free and open-source Discord bot for your server</h2>
        {isLogged ? (
          <div className="flex flex-col gap-3 items-center">
            <DashboardButton />
          </div>
        ) : (
          <DiscordLoginButton />
        )}
      </div>
      <section className="section flex flex-col items-center justify-between gap-10">
        <h1 className="text-center text-5xl font-bold">Features</h1>
        {features.map((i) => (
          <div key={i.title} className="flex flex-col items-center  gap-2 md:flex-row w-full h-full">
            <Image className="rounded-md flex-1 object-cover" src={i.image} alt={i.title} height={1000} width={1000} />
            <div className="flex flex-col items-center flex-1">
              <h2 className="font-bold text-xl text-center md:text-2xl lg:text-3xl">{i.title}</h2>
              <h3 className="text-lg text-center md:text-xl lg:text-2xl">{i.description}</h3>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Home
