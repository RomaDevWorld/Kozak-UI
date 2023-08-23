'use client'

import React from 'react'
import Image from 'next/image'

const DashboardLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image className="invert" src="/loading.webp" alt="Loading" width={100} height={100} />
      <h1 className="text-4xl font-bold">Loading...</h1>
    </div>
  )
}

export default DashboardLoading
