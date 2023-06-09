import { NextResponse } from 'next/server'

type Feedback = {
  name?: string
  email?: string
  mesaage?: string
}

export async function POST(request: Request) {
  const data: Feedback = await request.json()
  console.log('data: ', data)

  const { name, email, mesaage } = data

  return NextResponse.json({ name, email, mesaage })
}
