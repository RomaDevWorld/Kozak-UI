'use client'

import { Modules } from '@/types/Modules'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const RoleRestoreToggle = ({ modules }: { modules: Modules }) => {
  const [active, setActive] = useState(modules.roles.restore.status)
  const [saving, setSaving] = useState(false)

  const handleToggle = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSaving(true)

    setActive(!active)

    try {
      const payload = {
        [`roles.restore.status`]: event.target.checked,
      }

      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${modules.guildId}/admin/modules`, payload, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (error) {
      toast.error('Request failed!')
      console.error(error)
    } finally {
      setSaving(false)
    }

    setActive(event.target.checked)
  }

  return <input type="checkbox" disabled={saving} name="checkbox" checked={active} onChange={handleToggle} />
}

export default RoleRestoreToggle
