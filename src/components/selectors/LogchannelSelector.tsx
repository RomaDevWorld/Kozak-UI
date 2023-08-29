'use client'

import { Modules } from '@/types/Modules'
import PartialChannel from '@/types/PartialChannel'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'

const LogchannelSelector = ({ channels, modules }: { channels: PartialChannel[]; modules: Modules }) => {
  const guildId = modules.guildId

  const [selectedChannel, setSelectedChannel] = useState(modules.log?.channel || '')
  const [saving, setSaving] = useState(false)

  const handleChannelSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChannel(event.target.value)

    try {
      setSaving(true)
      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { 'log.channel': selectedChannel }, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (err) {
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-col">
      <select disabled={saving} id="logChannelSelect" value={selectedChannel} onChange={handleChannelSelect}>
        {channels
          .filter((channel) => channel.type === 0)
          .map((channel) => (
            <option key={channel.id} value={channel.id}>{`#${channel.name} (ID: ${channel.id})`}</option>
          ))}
      </select>
    </div>
  )
}

export default LogchannelSelector
