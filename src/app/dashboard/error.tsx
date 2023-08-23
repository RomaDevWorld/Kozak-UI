'use client'

import React, { useEffect } from 'react'

const DashboardError = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="font-bold text-2xl">Something went wrong!</h1>
      <h2>
        <b>Error:</b> {error.message}
      </h2>
      <button onClick={reset} className="p-4 bg-red-500 rounded-lg flex items-center justify-center">
        Try again
      </button>
    </div>
  )
}

export default DashboardError
