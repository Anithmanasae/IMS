import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "FaithFlow",
  description: "Christian SaaS for devotionals, prayers, and community",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <Link href="/" className="font-semibold">FaithFlow</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/devotionals">Devotionals</Link>
              <Link href="/prayers">Prayers</Link>
              <Link href="/verse">Daily Verse</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl p-4">{children}</main>
      </body>
    </html>
  )
}