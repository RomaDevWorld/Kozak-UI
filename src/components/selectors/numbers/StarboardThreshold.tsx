'use client'

import { Modules } from '@/types/Modules'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const StarboardThreshold = ({ modules }: { modules: Modules }) => {
  const [value, setValue] = useState(modules.starboard.threshold)
  const [saving, setSaving] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value))
  }

  const handleSave = async () => {
    try {
      setSaving(true)

      const payload = {
        [`starboard.threshold`]: value,
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
    <div className="flex items-center gap-2 justify-between md:w-1/5">
      <input type="number" value={value} min={3} max={500} className="" onChange={handleChange} />

      <button onClick={handleSave} className="button" disabled={!value || saving}>
        {saving ? 'Saving...' : 'Save'}
      </button>
    </div>
  )
}

export default StarboardThreshold
