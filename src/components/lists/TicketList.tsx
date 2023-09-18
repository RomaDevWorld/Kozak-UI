import { Modules } from '@/types/Modules'
import PartialChannel from '@/types/PartialChannel'
import PartialRole from '@/types/PartialRole'

const TicketList = async ({ channels, roles, modules }: { channels: PartialChannel[]; roles: PartialRole[]; modules: Modules }) => {
  const tickets = modules.tickets

  return (
    <div>
      <div className="flex text-black bg-white gap-4 w-[1000px] py-3 justify-evenly items-center font-bold">
        <p className="w-1/2 h-full text-center">Prefix</p>
        <p className="w-1/2 h-full text-center">Category</p>
        <p className="w-1/2 h-full text-center">Allowed roles</p>
      </div>
      {tickets.map((ticket) => (
        <div key={ticket._id} className="flex bg-inherit w-[1000px] justify-evenly items-center">
          <p className="w-1/2 p-2 h-full border border-white text-center">{ticket.prefix}</p>
          <p className="w-1/2 p-2 h-full border border-white text-center">{channels.find((channel) => channel.id === ticket.channelId)?.name}</p>
          <p className="w-1/2 p-2 h-full border border-white text-center">{ticket.allowedRoles.map((role) => roles.find((r) => r.id === role)?.name).join(', ') || 'None'}</p>
          <div className=" w-32 bg-black text-white border border-white px-1 absolute z-10 left-1/2 ml-10">
            <p>{ticket.allowedRoles.map((role) => roles.find((r) => r.id === role)?.name).join(', ') || 'None'}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TicketList
