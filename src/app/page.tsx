import DashboardButton from "@/components/DashboardButton";
import DiscordLoginButton from "@/components/DiscordLoginButton";
import { cookies } from "next/headers";
import Image from "next/image";

const Home = () => {
  const isLogged = cookies().has("connect.sid");

  return (
    <main className="flex flex-col items-center gap-5 ">
      <div className="text-3xl font-bold flex flex-col items-center gap-5">
        <Image
          src={"/avatar.webp"}
          priority={true}
          alt="Bot's avatar"
          height={200}
          width={200}
          className="rounded-full"
        />
        <h1 className="text-4xl">Say hello to Kozak</h1>
        <h2 className="text-2xl">A free-to-use Discord bot for your server</h2>
        {isLogged ? <DashboardButton /> : <DiscordLoginButton />}
      </div>
    </main>
  );
};

export default Home;
