import Link from 'next/link'
import React from 'react'

const AddBotButton = () => {
  return (
    <Link href={process.env.NEXT_PUBLIC_BOTAUTHURL as string} className=" bg-blue-600 p-3 rounded-lg">
      <h1 className="font-bold text-xl">Add bot to server</h1>
    </Link>
  )
}

export default AddBotButton
