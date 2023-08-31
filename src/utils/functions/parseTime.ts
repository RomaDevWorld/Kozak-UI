const parseTime = (time: number): { days: number; hours: number; minutes: number; seconds: number } => {
  const totalSeconds = Math.floor(time / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)
  const totalDays = Math.floor(totalHours / 24)

  const seconds = totalSeconds % 60
  const minutes = totalMinutes % 60
  const hours = totalHours % 24

  return {
    days: totalDays,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}

export default parseTime
