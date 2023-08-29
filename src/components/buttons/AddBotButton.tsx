import Link from 'next/link'
import React from 'react'

const AddBotButton = () => {
  return (
    <Link href={process.env.NEXT_PUBLIC_BOTAUTHURL as string} className=" bg-blue-600 p-2 rounded-lg">
      Authorize bot on server
    </Link>
  )
}

export default AddBotButton
