function getDailyIndex() {
  const date = new Date()
  const dayOfYear = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 86400000)
  return dayOfYear
}

const VERSES = [
  { ref: "John 3:16", text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life." },
  { ref: "Psalm 23:1", text: "The Lord is my shepherd; I shall not want." },
  { ref: "Philippians 4:6", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God." },
  { ref: "Isaiah 41:10", text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand." },
  { ref: "Romans 8:28", text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose." }
]

export default function DailyVersePage() {
  const idx = getDailyIndex() % VERSES.length
  const verse = VERSES[idx]
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">Daily Verse</h1>
      <p className="text-lg">“{verse.text}”</p>
      <p className="text-sm text-gray-500">{verse.ref}</p>
    </div>
  )
}