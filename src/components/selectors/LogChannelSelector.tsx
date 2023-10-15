'use client'

import { Modules } from '@/types/Modules'
import PartialChannel from '@/types/PartialChannel'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Select, { SingleValue } from 'react-select'
import { darkSelectStyles } from '@/constants/Select-Styles'

const LogChannelSelector = ({ channels, modules }: { channels: PartialChannel[]; modules: Modules }) => {
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

      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { 'log.channel': newValue?.value || null }, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (err) {
      toast.error('Request failed!')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const channelOptions = channels
    .filter((channel) => channel.type === 0)
    .map((channel) => {
      return {
        value: channel.id,
        label: channel.name,
      }
    })

  return (
    <Select
      styles={darkSelectStyles}
      closeMenuOnSelect={true}
      isMulti={false}
      options={channelOptions}
      onChange={handleChange}
      isClearable={true}
      isLoading={isLoading}
      defaultValue={modules.log.channel ? { value: modules.log.channel, label: channels.find((channel) => channel.id === modules.log.channel)?.name || 'N/A' } : undefined}
    />
  )
}

export default LogChannelSelector
