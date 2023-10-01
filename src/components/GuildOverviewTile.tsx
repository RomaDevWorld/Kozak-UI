import Link from 'next/link'
import Image from 'next/image'

type TileProps = {
  label: string
  href: string
  icon: string
}

const GuildOverviewTile = ({ label, icon, href }: TileProps) => {
  return (
    <Link prefetch={false} href={href.toString()} className="bg-neutral-400 w-full flex items-center justify-center gap-5 md:w-auto py-4 px-5 rounded-lg flex-grow">
      <Image src={icon} alt={label} width={20} height={20} className="invert" />
      <div className="text-xl">{label}</div>
    </Link>
  )
}

export default GuildOverviewTile
