'use client'

import { Modules } from '@/types/Modules'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const MinMaxXp = ({ modules }: { modules: Modules }) => {
  const [min, setMin] = useState(modules.leveling.minXp)
  const [max, setMax] = useState(modules.leveling.maxXp)

  const [saving, setSaving] = useState(false)

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMin(parseInt(e.target.value))
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(parseInt(e.target.value))
  }

  const handleSave = async () => {
    try {
      setSaving(true)

      const payload = {
        [`leveling.minXp`]: min,
        [`leveling.maxXp`]: max,
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
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-between">
        <label htmlFor="min">Min</label>
        <input id="min" type="number" value={min} min={0} max={10000} onChange={handleMinChange} />
      </div>
      <div className="flex flex-col items-center justify-between">
        <label htmlFor="max">Max</label>
        <input id="max" type="number" value={max} min={1} max={20000} onChange={handleMaxChange} />
      </div>
      <button onClick={handleSave} className="button h-1/2" disabled={(!min && !max) || saving}>
        {saving ? 'Saving...' : 'Save'}
      </button>
    </div>
  )
}

export default MinMaxXp
