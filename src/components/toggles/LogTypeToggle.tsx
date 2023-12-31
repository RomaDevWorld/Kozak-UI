'use client'

import { LogTypes, Modules } from '@/types/Modules'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import names from '@/constants/LogNames'

const LogTypeToggle = ({ modules, type }: { modules: Modules; type: keyof LogTypes }) => {
  const [active, setActive] = useState(modules.log.types[type])
  const [saving, setSaving] = useState(false)

  const handleToggle = async () => {
    setSaving(true)

    try {
      const payload = {
        [`log.types.${type}`]: !active,
      }

      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${modules.guildId}/admin/modules`, payload, { withCredentials: true })

      toast.success('Setting applied!')

      setActive(!active)
    } catch (error) {
      toast.error('Request failed!')
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  if (saving)
    return (
      <div className="flex gap-32 justify-center p-3 rounded-md min-w-full bg-slate-400">
        <h3 className="font-bold">{names[type].name}</h3>
      </div>
    )

  if (active)
    return (
      <div className="flex gap-32 justify-center p-3 rounded-md min-w-full bg-green-700 cursor-pointer" onClick={handleToggle}>
        <h3 className="font-bold">{names[type].name} </h3>
      </div>
    )

  return (
    <div className="flex gap-32 justify-center p-3 rounded-md min-w-full bg-red-700 cursor-pointer" onClick={handleToggle}>
      <h3 className="font-bold">{names[type].name}</h3>
    </div>
  )
}

export default LogTypeToggle
