'use client'

import { Modules } from '@/types/Modules'
import PartialChannel from '@/types/PartialChannel'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Select, { SingleValue } from 'react-select'
import { darkSelectStyles } from '@/constants/Select-Styles'
import channelTypes from '@/constants/ChannelTypes'

const PrivatesLobbySelector = ({ channels, modules }: { channels: PartialChannel[]; modules: Modules }) => {
  const [isLoading, setIsLoading] = useState(false)
  const guildId = modules.guildId

  const handleChange = async (
    newValue: SingleValue<{
      value: string
      label: string
    }>
  ) => {
    try {
      setIsLoading(true)

      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { 'counter.channelId': newValue?.value || null }, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (err) {
      toast.error('Request failed!')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const channelOptions = channels
    .filter((channel) => [2, 4].includes(channel.type))
    .map((channel) => {
      return {
        value: channel.id,
        label: `${channelTypes[channel.type]}: ${channel.name}`,
      }
    })

  const selectedChannel = channels.find((channel) => channel.id === modules.counter.channelId)
  const defaultValue = selectedChannel ? { value: selectedChannel.id, label: `${channelTypes[selectedChannel.type]}: ${selectedChannel.name}` } : { value: '0', label: 'N/A' }

  return <Select styles={darkSelectStyles} closeMenuOnSelect={true} isMulti={false} options={channelOptions} onChange={handleChange} isClearable={true} isLoading={isLoading} defaultValue={defaultValue} />
}

export default PrivatesLobbySelector
