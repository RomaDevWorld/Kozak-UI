'use client'

import { Modules } from '@/types/Modules'
import PartialRole from '@/types/PartialRole'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AutoRoleSelector = ({ roles, modules }: { roles: PartialRole[]; modules: Modules }) => {
  const guildId = modules.guildId

  const [selectedRole, setSelectedRole] = useState(modules.roles?.autorole || '')
  const [saving, setSaving] = useState(false)

  const handleSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      setSaving(true)
      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { 'roles.autorole': e.target.value }, { withCredentials: true })

      toast.success('Setting applied!')

      setSelectedRole(e.target.value)
    } catch (err) {
      toast.error('Request failed!')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <select id="autoRoleSelect" value={selectedRole} disabled={saving} onChange={handleSelect}>
        <option value="">None</option>
        {roles
          .filter((role) => role.id !== modules.guildId && !role.managed && (parseInt(role.permissions) & 0x08) !== 0x08)
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((role) => (
            <option key={role.id} value={role.id}>{`${role.name} (ID: ${role.id})`}</option>
          ))}
      </select>
    </div>
  )
}

export default AutoRoleSelector
