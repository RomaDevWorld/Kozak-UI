'use client'

import { darkSelectStyles } from '@/constants/Select-Styles'
import { Modules } from '@/types/Modules'
import PartialChannel from '@/types/PartialChannel'
import axios from 'axios'
import React, { useState } from 'react'
import Select, { MultiValue } from 'react-select'
import { toast } from 'react-toastify'

const LogIgnoredChannelsSelector = ({ modules, channels }: { modules: Modules; channels: PartialChannel[] }) => {
  const [isLoading, setIsLoading] = useState(false)
  const guildId = modules.guildId

  const handleChange = async (newValue: MultiValue<{ value: string; label: string }>) => {
    try {
      setIsLoading(true)

      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { 'log.ignoredChannels': newValue.map((i) => i.value) }, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (err) {
      toast.error('Request failed!')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const channelOptions = channels
    .filter((channel) => [0, 11, 5, 10].includes(channel.type))
    .map((channel) => {
      return {
        value: channel.id,
        label: channel.name,
      }
    })

  return (
    <Select
      styles={darkSelectStyles}
      closeMenuOnSelect={false}
      isMulti
      defaultValue={modules.log.ignoredChannels.map((channelId) => {
        return {
          value: channelId,
          label: channels.find((channel) => channel.id === channelId)?.name || 'N/A',
        }
      })}
      isLoading={isLoading}
      options={channelOptions}
      onChange={handleChange}
      placeholder="Select channels..."
    />
  )
}

export default LogIgnoredChannelsSelector
