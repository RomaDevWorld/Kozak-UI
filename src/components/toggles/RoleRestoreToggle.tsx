'use client'

import { Modules } from '@/types/Modules'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const RoleRestoreToggle = ({ modules }: { modules: Modules }) => {
  const [active, setActive] = useState(modules.roles.restore.status)
  const [saving, setSaving] = useState(false)

  const handleToggle = async () => {
    setSaving(true)

    setActive(!active)

    try {
      const payload = {
        [`roles.restore.status`]: active,
      }

      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${modules.guildId}/admin/modules`, payload, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (error) {
      toast.error('Request failed!')
      console.error(error)
    } finally {
      setSaving(false)
    }

    setActive(!active)
  }

  if (saving)
    return (
      <div className="flex justify-center items-center p-3 px-5 rounded-md bg-slate-400">
        <h3 className="capitalize font-bold">{active ? 'ON' : 'OFF'}</h3>
      </div>
    )

  if (active)
    return (
      <div className="flex justify-center items-center p-3 px-5 rounded-md bg-green-700 cursor-pointer" onClick={handleToggle}>
        <h3 className="capitalize font-bold">{active ? 'ON' : 'OFF'}</h3>
      </div>
    )

  return (
    <div className="flex justify-center items-center p-3 px-5 rounded-md bg-red-700 cursor-pointer" onClick={handleToggle}>
      <h3 className="capitalize font-bold">{active ? 'ON' : 'OFF'}</h3>
    </div>
  )
}

export default RoleRestoreToggle
