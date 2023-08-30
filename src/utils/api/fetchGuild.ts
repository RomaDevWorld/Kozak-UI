import { cookies } from 'next/headers'

const fetchGuild = (id: string) => fetch(process.env.NEXT_PUBLIC_APIURL + '/guilds/' + id, { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` }, next: { revalidate: 60 } })

export default fetchGuild
