export default function HomePage() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <a className="rounded-lg border bg-white p-6 shadow-sm" href="/devotionals">
        <h3 className="mb-2 text-lg font-semibold">Devotionals</h3>
        <p className="text-sm text-gray-600">Biblical reflections to encourage your day.</p>
      </a>
      <a className="rounded-lg border bg-white p-6 shadow-sm" href="/prayers">
        <h3 className="mb-2 text-lg font-semibold">Prayer Requests</h3>
        <p className="text-sm text-gray-600">Share requests and pray for others.</p>
      </a>
      <a className="rounded-lg border bg-white p-6 shadow-sm" href="/verse">
        <h3 className="mb-2 text-lg font-semibold">Daily Verse</h3>
        <p className="text-sm text-gray-600">Meditate on a verse each day.</p>
      </a>
    </section>
  )
}