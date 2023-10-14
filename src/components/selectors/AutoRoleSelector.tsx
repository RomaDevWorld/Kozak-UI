'use client'

import { Modules } from '@/types/Modules'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Select, { SingleValue } from 'react-select'
import { darkSelectStyles } from '@/constants/Select-Styles'
import PartialRole from '@/types/PartialRole'

const LogChannelSelector = ({ roles, modules }: { roles: PartialRole[]; modules: Modules }) => {
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

      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { 'roles.autorole': newValue?.value || null }, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (err) {
      toast.error('Request failed!')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const rolesOptions = roles
    .filter((role) => role.id !== modules.guildId && !role.managed && (parseInt(role.permissions) & 0x08) !== 0x08)
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((role) => {
      return {
        value: role.id,
        label: role.name,
      }
    })

  return (
    <Select
      styles={darkSelectStyles}
      closeMenuOnSelect={true}
      isMulti={false}
      options={rolesOptions}
      onChange={handleChange}
      isClearable={true}
      isLoading={isLoading}
      defaultValue={{ value: modules.roles.autorole || 'N/A', label: roles.find((role) => role.id === modules.roles.autorole)?.name || 'N/A' }}
    />
  )
}

export default LogChannelSelector
