"use client"
import { useEffect, useState } from "react"

type Prayer = { id: string; request: string; prayedBy: number; createdAt: string; authorId?: string | null }

export default function PrayersPage() {
  const [prayers, setPrayers] = useState<Prayer[]>([])
  const [name, setName] = useState("")
  const [request, setRequest] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch("/api/prayers").then(r => r.json()).then(setPrayers).catch(() => {})
  }, [])

  async function addPrayer() {
    if (!request.trim()) return
    setLoading(true)
    try {
      const res = await fetch("/api/prayers", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, request }) })
      if (res.ok) {
        const created: Prayer = await res.json()
        setPrayers(prev => [created, ...prev])
        setName("")
        setRequest("")
      }
    } finally {
      setLoading(false)
    }
  }

  async function increment(id: string) {
    const res = await fetch(`/api/prayers/${id}/pray`, { method: "POST" })
    if (res.ok) {
      const updated: Prayer = await res.json()
      setPrayers(prev => prev.map(p => (p.id === id ? updated : p)))
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Prayer Requests</h1>
      <div className="rounded-lg border bg-white p-4 space-y-3">
        <input className="w-full rounded border p-2" placeholder="Your name (optional)" value={name} onChange={e => setName(e.target.value)} />
        <textarea className="w-full rounded border p-2" rows={3} placeholder="Share a prayer request..." value={request} onChange={e => setRequest(e.target.value)} />
        <button className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50" onClick={addPrayer} disabled={loading}>Submit</button>
      </div>

      <ul className="space-y-3">
        {prayers.map(p => (
          <li key={p.id} className="rounded-lg border bg-white p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-700">{p.request}</p>
              </div>
              <button className="rounded bg-green-600 px-3 py-1 text-white text-sm" onClick={() => increment(p.id)}>
                I prayed ({p.prayedBy})
              </button>
            </div>
          </li>
        ))}
        {prayers.length === 0 && (
          <li className="text-sm text-gray-500">No requests yet. Be the first to share.</li>
        )}
      </ul>
    </div>
  )
}