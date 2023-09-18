'use client'

import React from 'react'
import { Ring } from '@uiball/loaders'

const DashboardLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <Ring size={35} color="#FFF" />
      <h1 className="text-4xl font-bold">Loading...</h1>
    </div>
  )
}

export default DashboardLoading
