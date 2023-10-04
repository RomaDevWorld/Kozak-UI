'use client'

import { Modules } from '@/types/Modules'
import PartialChannel from '@/types/PartialChannel'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { ChannelOption } from './options/ChannelOption'

const CounterChannelSelector = ({ channels, modules }: { channels: PartialChannel[]; modules: Modules }) => {
  const guildId = modules.guildId

  const [selectedChannel, setSelectedChannel] = useState(modules.counter.channelId || '')
  const [saving, setSaving] = useState(false)

  const handleChannelSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      setSaving(true)
      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { 'counter.channelId': event.target.value }, { withCredentials: true })

      toast.success('Setting applied!')

      setSelectedChannel(event.target.value)
    } catch (err) {
      toast.error('Request failed!')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-col">
      <select disabled={saving} className="max-w-[95vw]" id="counterChannelSelect" value={selectedChannel} onChange={handleChannelSelect}>
        <option value="">None</option>
        {channels
          .filter((channel) => [2, 4].includes(channel.type))
          .map((channel) => (
            <ChannelOption channel={channel} key={channel.id} showTypes={true} />
          ))}
      </select>
    </div>
  )
}

export default CounterChannelSelector
