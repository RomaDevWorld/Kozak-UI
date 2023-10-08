'use client'

import { Modules } from '@/types/Modules'
import PartialChannel from '@/types/PartialChannel'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { ChannelOption } from './options/ChannelOption'

const PrivatesLobbySelector = ({ channels, modules }: { channels: PartialChannel[]; modules: Modules }) => {
  const guildId = modules.guildId

  const [selectedChannel, setSelectedChannel] = useState(modules.log?.channel || '')
  const [saving, setSaving] = useState(false)

  const handleChannelSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const fallbackValue = selectedChannel

    setSelectedChannel(event.target.value)

    try {
      setSaving(true)
      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { 'lobby.channel': event.target.value }, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (err) {
      toast.error('Request failed!')
      console.error(err)
      setSelectedChannel(fallbackValue)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-col">
      <select disabled={saving} className="max-w-[95vw]" id="logChannelSelect" value={selectedChannel} onChange={handleChannelSelect}>
        <option value="">None</option>
        {channels
          .filter((channel) => channel.type === 2)
          .map((channel) => (
            <ChannelOption key={channel.id} channel={channel} />
          ))}
      </select>
    </div>
  )
}

export default PrivatesLobbySelector
