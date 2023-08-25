import Link from 'next/link'

type TileProps = {
  label: string
  href: string
}

const GuildOverviewTile = ({ label, href }: TileProps) => {
  return (
    <Link href={href.toString()} className="bg-neutral-400 py-4 px-5 rounded-lg">
      <div className="text-xl">{label}</div>
    </Link>
  )
}

export default GuildOverviewTile
