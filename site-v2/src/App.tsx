import { Coffee, QrCode, Sparkles, Ticket } from "lucide-react"

import { ProgramTimelineShowcase } from "@/components/program-timeline"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(210,230,255,0.9),transparent_26%),radial-gradient(circle_at_84%_12%,rgba(255,221,188,0.9),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(182,214,255,0.35),transparent_25%)]" />
      <Spotlight className="left-[12%] top-[-32rem] opacity-100" fill="rgba(120,171,255,0.22)" />
      <Spotlight className="right-[-10%] top-[-20rem] opacity-70" fill="rgba(255,214,176,0.18)" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 rounded-[36px] border border-white/70 bg-white/58 p-5 shadow-[0_24px_80px_rgba(43,86,160,0.12)] backdrop-blur-2xl sm:p-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge className="rounded-full bg-[#e9f3ff] px-3 py-1 text-[#3567b0]">FRUEFRUE v2 Rebuild</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#173f86] sm:text-5xl lg:text-6xl">
              Proper React rebuild for the event experience.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4d6ea5] sm:text-base">
              This sandbox replaces the hacked static timeline path. It is the new foundation for premium event program UI, reusable components and later Supabase-backed event editing.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:w-[420px]">
            <Card className="rounded-[28px] border border-white/80 bg-white/72 backdrop-blur-xl">
              <CardContent className="p-4">
                <Coffee className="size-5 text-[#3567b0]" />
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[#7a9acc]">Mood</p>
                <p className="mt-2 text-sm font-medium text-[#173f86]">Cozy brunch editorial</p>
              </CardContent>
            </Card>
            <Card className="rounded-[28px] border border-white/80 bg-white/72 backdrop-blur-xl">
              <CardContent className="p-4">
                <Sparkles className="size-5 text-[#3567b0]" />
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[#7a9acc]">Stack</p>
                <p className="mt-2 text-sm font-medium text-[#173f86]">Vite, React, Tailwind, shadcn</p>
              </CardContent>
            </Card>
            <Card className="rounded-[28px] border border-white/80 bg-white/72 backdrop-blur-xl">
              <CardContent className="p-4">
                <Ticket className="size-5 text-[#3567b0]" />
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[#7a9acc]">Next</p>
                <p className="mt-2 text-sm font-medium text-[#173f86]">Wire real event data and admin editing</p>
              </CardContent>
            </Card>
          </div>
        </header>

        <ProgramTimelineShowcase />

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
          <Card className="rounded-[32px] border border-white/70 bg-white/58 shadow-[0_24px_80px_rgba(43,86,160,0.1)] backdrop-blur-2xl">
            <CardContent className="p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[#7d9dce]">Why this rebuild</p>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-[#4c6da6] sm:grid-cols-2">
                <p>The old event page was patched repeatedly and hit the limit where premium UI and reliability started fighting each other.</p>
                <p>This new app gives a clean component model for timelines, mobile states, future Supabase sync and stronger visual iteration.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-[32px] border border-white/70 bg-white/58 shadow-[0_24px_80px_rgba(43,86,160,0.1)] backdrop-blur-2xl">
            <CardContent className="p-5 sm:p-6">
              <QrCode className="size-6 text-[#3567b0]" />
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-[#7d9dce]">Status</p>
              <p className="mt-3 text-sm leading-7 text-[#4c6da6]">
                Build-first foundation is in place. Next step is wiring the real FRUEFRUE event state into this new shell and replacing the old production view.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}

export default App
