'use client'

import { Modules } from '@/types/Modules'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const XpCooldownSelector = ({ modules }: { modules: Modules }) => {
  const [time, setTime] = useState(modules.leveling.cooldown / 1000)
  const [saving, setSaving] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(parseInt(e.target.value))
  }

  const handleSave = async () => {
    try {
      setSaving(true)

      const payload = {
        [`leveling.cooldown`]: time * 1000,
      }

      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${modules.guildId}/admin/modules`, payload, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (err) {
      toast.error('Request failed!')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex items-center justify-between">
      <input type="number" value={time} min={0} max={30} onChange={handleChange} />

      <button onClick={handleSave} className="button" disabled={!time || saving}>
        {saving ? 'Saving...' : 'Save'}
      </button>
    </div>
  )
}

export default XpCooldownSelector
