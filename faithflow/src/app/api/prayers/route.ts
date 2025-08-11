import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const prayers = await prisma.prayer.findMany({
    orderBy: { createdAt: "desc" }
  })
  return NextResponse.json(prayers)
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { name?: string; request?: string } | null
  if (!body || !body.request || typeof body.request !== "string") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 })
  }

  const created = await prisma.prayer.create({
    data: {
      request: body.request.slice(0, 2000),
      author: body.name ? { create: { email: `${Date.now()}@anonymous.invalid`, name: body.name } } : undefined,
    }
  })

  return NextResponse.json(created, { status: 201 })
}