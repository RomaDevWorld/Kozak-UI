'use client'

import { Modules } from '@/types/Modules'
import parseTime from '@/utils/functions/parseTime'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'

const RoleRestoreTimer = ({ modules }: { modules: Modules }) => {
  const defaultTime = parseTime(modules.roles.restore.expireTime || 0)

  const [days, setDays] = useState(defaultTime.days)
  const [hours, setHours] = useState(defaultTime.hours)
  const [minutes, setMinutes] = useState(defaultTime.minutes)
  const [seconds, setSeconds] = useState(defaultTime.seconds)

  const [saving, setSaving] = useState(false)

  const handleDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDays(parseInt(event.target.value))
  }

  const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHours(parseInt(event.target.value))
  }

  const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(parseInt(event.target.value))
  }

  const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(parseInt(event.target.value))
  }

  const handleSave = async () => {
    try {
      setSaving(true)

      const totalTime = seconds * 1000 + minutes * 60000 + hours * 3600000 + days * 86400000

      const payload = {
        [`roles.restore.expireTime`]: totalTime,
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
    <div className="flex flex-col text-center font-bold">
      <div className="flex items-center justify-between">
        <label htmlFor="days">Days</label>
        <input id="days" type="number" value={days} min={0} max={30} onChange={handleDaysChange} />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="hours">Hours</label>
        <input id="hours" type="number" value={hours} min={0} max={24} onChange={handleHoursChange} />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="minutes">Minutes</label>
        <input id="minutes" type="number" value={minutes} min={0} max={60} onChange={handleMinutesChange} />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="seconds">Seconds</label>
        <input id="seconds" type="number" value={seconds} min={0} max={60} onChange={handleSecondsChange} />
      </div>
      <button onClick={handleSave} className="button" disabled={(!days && !hours && !minutes && !seconds) || saving}>
        {saving ? 'Saving...' : 'Save'}
      </button>
    </div>
  )
}

export default RoleRestoreTimer
