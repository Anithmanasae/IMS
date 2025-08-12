import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const { id } = params
  try {
    const updated = await prisma.prayer.update({
      where: { id },
      data: { prayedBy: { increment: 1 } }
    })
    return NextResponse.json(updated)
  } catch (error) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
}