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
    setSelectedChannel(event.target.value)

    try {
      setSaving(true)
      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { 'counter.channelId': selectedChannel }, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (err) {
      toast.error('Request failed!')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-col">
      <select disabled={saving} id="counterChannelSelect" value={selectedChannel} onChange={handleChannelSelect}>
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
