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
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between md:flex-col md:items-start">
        <label htmlFor="min">MIN</label>
        <input className="w-1/2 md:w-1/5" id="min" type="number" value={min} min={0} max={10000} onChange={handleMinChange} />
      </div>
      <div className="flex items-center justify-between md:flex-col md:items-start">
        <label htmlFor="max">MAX</label>
        <input className="w-1/2 md:w-1/5" id="max" type="number" value={max} min={1} max={20000} onChange={handleMaxChange} />
      </div>
      <div className="flex items-center md:items-start">
        <button onClick={handleSave} className="button h-1/2 w-full md:w-1/5" disabled={(!min && !max) || saving}>
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  )
}

export default MinMaxXp
