'use client'

import { darkSelectStyles } from '@/constants/Select-Styles'
import { Modules } from '@/types/Modules'
import PartialRole from '@/types/PartialRole'
import axios from 'axios'
import React, { useState } from 'react'
import Select, { MultiValue } from 'react-select'
import { toast } from 'react-toastify'

const XpIgnoredRolesSelector = ({ modules, roles }: { modules: Modules; roles: PartialRole[] }) => {
  const [isLoading, setIsLoading] = useState(false)
  const guildId = modules.guildId

  const handleChange = async (newValue: MultiValue<{ value: string; label: string }>) => {
    try {
      setIsLoading(true)

      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { 'leveling.ignoredRoles': newValue.map((i) => i.value) }, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (err) {
      toast.error('Request failed!')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const rolesOptions = roles
    .filter((role) => role.id !== guildId)
    .map((role) => {
      return {
        value: role.id,
        label: role.name,
      }
    })

  return (
    <Select
      styles={darkSelectStyles}
      closeMenuOnSelect={false}
      isMulti
      defaultValue={modules.leveling.ignoredRoles.map((roleId) => {
        return {
          value: roleId,
          label: roles.find((role) => role.id === roleId)?.name || 'N/A',
        }
      })}
      isLoading={isLoading}
      options={rolesOptions}
      onChange={handleChange}
      placeholder="Select roles..."
    />
  )
}

export default XpIgnoredRolesSelector
