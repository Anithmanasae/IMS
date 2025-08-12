const SAMPLE = [
  { id: 1, title: "Trust in the Lord", reference: "Proverbs 3:5-6", content: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths." },
  { id: 2, title: "God is our refuge", reference: "Psalm 46:1", content: "God is our refuge and strength, a very present help in trouble." }
]

export default function DevotionalsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Devotionals</h1>
      <ul className="space-y-3">
        {SAMPLE.map(d => (
          <li key={d.id} className="rounded-lg border bg-white p-4">
            <h3 className="font-semibold">{d.title}</h3>
            <p className="text-sm text-gray-500">{d.reference}</p>
            <p className="mt-2 text-gray-700">{d.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}