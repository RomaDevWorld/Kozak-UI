'use client'

import { Modules } from '@/types/Modules'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const CounterNameInput = ({ modules }: { modules: Modules }) => {
  const guildId = modules.guildId

  const [channelName, setChannelName] = useState(modules.counter?.label || '')
  const [saving, setSaving] = useState(false)

  const saveSelection = async () => {
    try {
      setSaving(true)
      await axios.post(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { 'counter.label': channelName }, { withCredentials: true })

      toast.success('Setting applied!')
    } catch (err) {
      toast.error('Request failed!')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex gap-2">
      <input type="text" onChange={(e) => setChannelName(e.target.value)} value={channelName} placeholder="Members: ON/MEM" maxLength={50} />
      <button onClick={saveSelection} className="button" disabled={saving || channelName === modules.counter?.label || channelName.length === 0}>
        {saving ? 'Saving...' : 'Save'}
      </button>
    </div>
  )
}

export default CounterNameInput
