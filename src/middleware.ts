import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
  const response = await fetch(process.env.NEXT_PUBLIC_APIURL + '/auth/user', {
    method: 'GET',
    headers: {
      Cookie: `connect.sid=${req.cookies.get('connect.sid')?.value}`,
    },
    next: {
      revalidate: 0,
    },
  })

  return response.ok ? NextResponse.next() : NextResponse.redirect(new URL('/', req.url))
}

export const config = {
  matcher: '/dashboard/:path*',
}
