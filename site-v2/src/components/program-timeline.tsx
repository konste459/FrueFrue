import { useMemo, useState } from "react"
import { motion } from "motion/react"
import {
  ChartColumnBig,
  Coffee,
  Croissant,
  Images,
  MapPin,
  MessageCircleHeart,
  Sparkles,
  SunMedium,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MagicCard } from "@/components/ui/magic-card"
import { Spotlight } from "@/components/ui/spotlight"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { cn } from "@/lib/utils"
import { brunchProgram, type ProgramEntry, variantDescriptions } from "@/data/program"

const iconMap = {
  Coffee,
  MessageCircleHeart,
  Croissant,
  Sparkles,
  ChartColumnBig,
  Images,
  SunMedium,
} as const


function ProgramNode({
  entry,
  activeId,
  onSelect,
  className,
}: {
  entry: ProgramEntry
  activeId: string
  onSelect: (id: string) => void
  className?: string
}) {
  const Icon = iconMap[entry.icon as keyof typeof iconMap] ?? Coffee
  const isActive = activeId === entry.id

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(entry.id)}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={cn(
        "w-full rounded-[28px] border border-[#a6c8ff]/60 bg-white/70 p-4 text-left shadow-[0_12px_36px_rgba(57,104,180,0.12)] backdrop-blur-xl transition-all duration-300",
        isActive && "border-[#4f84d9] bg-[#f7fbff] shadow-[0_18px_48px_rgba(57,104,180,0.18)]",
        className
      )}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#7298cf]">{entry.timeLabel}</p>
          <h3 className="mt-2 text-lg font-semibold text-[#1d458f]">{entry.title}</h3>
        </div>
        <span className="rounded-full bg-[#edf5ff] p-2 text-[#3a6dbe]">
          <Icon className="size-4" />
        </span>
      </div>
      <p className="text-sm leading-6 text-[#40629f]">{entry.description}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-[#6b88ba]">
          <MapPin className="size-3.5" />
          {entry.stage}
        </span>
        <Badge variant="outline" className="border-[#bfd6ff] bg-white/70 text-[#4470b2]">
          {entry.cluster}
        </Badge>
      </div>
    </motion.button>
  )
}

function DetailPanel({ entry }: { entry: ProgramEntry }) {
  const Icon = iconMap[entry.icon as keyof typeof iconMap] ?? Coffee

  return (
    <motion.div
      key={entry.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="rounded-[32px] border border-white/70 bg-white/68 p-6 shadow-[0_20px_60px_rgba(29,69,143,0.12)] backdrop-blur-2xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#7b9dd0]">{entry.timeLabel}</p>
          <h3 className="mt-2 text-2xl font-semibold text-[#173e84]">{entry.title}</h3>
        </div>
        <div className="rounded-full bg-[#edf5ff] p-3 text-[#3970c1] shadow-inner shadow-white/80">
          <Icon className="size-5" />
        </div>
      </div>
      <p className="mt-5 text-base leading-7 text-[#3b609d]">{entry.description}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[24px] bg-[#f8fbff] p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-[#87a5d3]">Spot</p>
          <p className="mt-2 text-sm font-medium text-[#20488f]">{entry.stage}</p>
        </div>
        <div className="rounded-[24px] bg-[#f8fbff] p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-[#87a5d3]">Mini Note</p>
          <p className="mt-2 text-sm font-medium text-[#20488f]">{entry.note}</p>
        </div>
      </div>
    </motion.div>
  )
}

function EditorialVariant({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
      <div className="relative space-y-4 pl-6">
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-[#bcd5ff] via-[#7ba7eb] to-transparent" />
        {brunchProgram.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="relative"
          >
            <div className="absolute left-[-21px] top-8 size-4 rounded-full border-4 border-[#f8fbff] bg-[#5b90e6] shadow-[0_0_0_6px_rgba(91,144,230,0.12)]" />
            <ProgramNode entry={entry} activeId={activeId} onSelect={onSelect} />
          </motion.div>
        ))}
      </div>
      <DetailPanel entry={brunchProgram.find((entry) => entry.id === activeId) ?? brunchProgram[0]} />
    </div>
  )
}

function SalonVariant({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  const clusters = useMemo(
    () => ({
      morning: brunchProgram.filter((entry) => entry.cluster === "arrival"),
      plates: brunchProgram.filter((entry) => entry.cluster === "plates"),
      social: brunchProgram.filter((entry) => entry.cluster === "community"),
      outro: brunchProgram.filter((entry) => entry.cluster === "afterglow"),
    }),
    []
  )

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <Card className="overflow-visible rounded-[34px] border border-white/70 bg-white/62 shadow-[0_18px_60px_rgba(61,102,180,0.14)] backdrop-blur-2xl">
        <CardContent className="p-5 sm:p-8">
          <div className="relative overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top_left,rgba(188,213,255,0.6),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.84),rgba(245,249,255,0.72))] p-5 sm:p-8">
            <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[#9cc0f5] via-[#5d8fe1] to-[#c7ddff]" />
            <div className="relative flex flex-col gap-8">
              {[clusters.morning, clusters.plates, clusters.social, clusters.outro].map((group, groupIndex) => (
                <div key={group[0].id} className="relative">
                  <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full border border-[#b4cff9] bg-white text-sm font-semibold text-[#25519c] shadow-[0_12px_28px_rgba(77,124,204,0.18)]">
                    {groupIndex + 1}
                  </div>
                  <div className={cn("grid gap-4 sm:grid-cols-2", group.length === 1 && "sm:grid-cols-1 sm:place-items-center")}>
                    {group.map((entry) => (
                      <ProgramNode key={entry.id} entry={entry} activeId={activeId} onSelect={onSelect} className="min-h-[198px]" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <DetailPanel entry={brunchProgram.find((entry) => entry.id === activeId) ?? brunchProgram[0]} />
    </div>
  )
}

function RibbonVariant({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max gap-5 pr-3">
          {brunchProgram.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.32, delay: index * 0.05 }}
              className="relative w-[290px] shrink-0 first:ml-1"
            >
              {index < brunchProgram.length - 1 && (
                <div className="absolute right-[-18px] top-1/2 z-0 h-px w-9 -translate-y-1/2 bg-gradient-to-r from-[#7da8ea] to-[#d7e6ff]" />
              )}
              <MagicCard
                mode="gradient"
                className="rounded-[30px] bg-white/80 p-[1px]"
                gradientColor="rgba(112, 163, 237, 0.18)"
                gradientFrom="#7bafff"
                gradientTo="#f5d4b6"
              >
                <ProgramNode entry={entry} activeId={activeId} onSelect={onSelect} className="min-h-[240px] border-none bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,250,255,0.86))]" />
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
      <DetailPanel entry={brunchProgram.find((entry) => entry.id === activeId) ?? brunchProgram[0]} />
    </div>
  )
}

function StudioVariant({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_340px]">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {brunchProgram.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, scale: 0.96, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
            whileHover={{ y: -6, rotate: 0, scale: 1.01 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.28, delay: index * 0.05 }}
            className="h-full"
          >
            <ProgramNode
              entry={entry}
              activeId={activeId}
              onSelect={onSelect}
              className="h-full min-h-[210px] border-[#d7e6ff] bg-[linear-gradient(180deg,rgba(255,253,249,0.95),rgba(239,247,255,0.92))]"
            />
          </motion.div>
        ))}
      </div>
      <Card className="rounded-[32px] border border-white/75 bg-white/72 shadow-[0_18px_56px_rgba(48,90,165,0.14)] backdrop-blur-2xl">
        <CardHeader>
          <CardTitle className="text-[#1a458b]">Pinned Detail</CardTitle>
          <CardDescription className="text-[#6380b3]">
            Select a card to read the longer event note, mood and stage context.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DetailPanel entry={brunchProgram.find((entry) => entry.id === activeId) ?? brunchProgram[0]} />
        </CardContent>
      </Card>
    </div>
  )
}

export function ProgramTimelineShowcase() {
  const [activeId, setActiveId] = useState(brunchProgram[0].id)
  const [variant, setVariant] = useState<keyof typeof variantDescriptions>("editorial")

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/70 bg-white/45 p-4 shadow-[0_30px_120px_rgba(39,79,151,0.14)] backdrop-blur-2xl sm:p-6 lg:p-8">
      <Spotlight className="left-0 top-[-18rem] opacity-100" fill="rgba(113, 168, 255, 0.24)" />
      <div className="relative z-10">
        <div className="max-w-3xl">
          <Badge className="mb-4 rounded-full bg-[#eaf4ff] px-3 py-1 text-[#356ab7]">Event Program UI Lab</Badge>
          <TypingAnimation
            as="h1"
            words={[
              "Cozy brunch timelines with real personality.",
              "Four distinct directions in one React sandbox.",
            ]}
            loop
            className="text-4xl font-semibold tracking-[-0.05em] text-[#173f86] sm:text-5xl"
          />
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4c6da6] sm:text-base">
            This is the clean rebuild target: shadcn-based structure, Motion interactions, softer premium brunch styling and timeline systems that feel like a microsite instead of a boring schedule block.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {Object.entries(variantDescriptions).map(([key]) => (
            <Button
              key={key}
              variant={variant === key ? "default" : "outline"}
              className={cn(
                "rounded-full px-4",
                variant === key
                  ? "bg-[#2d60b3] text-white hover:bg-[#214d95]"
                  : "border-[#c6dafd] bg-white/60 text-[#3666ae] hover:bg-[#edf4ff]"
              )}
              onClick={() => setVariant(key as keyof typeof variantDescriptions)}
            >
              {key}
            </Button>
          ))}
          <Badge variant="outline" className="rounded-full border-[#cae0ff] bg-white/60 px-3 py-1 text-[#5b7fb7]">
            {variantDescriptions[variant]}
          </Badge>
        </div>

        <Tabs value={variant} onValueChange={(value) => setVariant(value as keyof typeof variantDescriptions)} className="mt-8 gap-6">
          <TabsList variant="line" className="w-full flex-wrap justify-start gap-2 rounded-[24px] bg-white/55 p-2 backdrop-blur-xl">
            <TabsTrigger value="editorial" className="rounded-full px-4 py-2 data-active:bg-[#edf5ff] data-active:text-[#1e4c95]">Editorial Rail</TabsTrigger>
            <TabsTrigger value="salon" className="rounded-full px-4 py-2 data-active:bg-[#edf5ff] data-active:text-[#1e4c95]">Salon Branches</TabsTrigger>
            <TabsTrigger value="ribbon" className="rounded-full px-4 py-2 data-active:bg-[#edf5ff] data-active:text-[#1e4c95]">Ribbon Flow</TabsTrigger>
            <TabsTrigger value="studio" className="rounded-full px-4 py-2 data-active:bg-[#edf5ff] data-active:text-[#1e4c95]">Studio Board</TabsTrigger>
          </TabsList>
          <TabsContent value="editorial">
            <EditorialVariant activeId={activeId} onSelect={setActiveId} />
          </TabsContent>
          <TabsContent value="salon">
            <SalonVariant activeId={activeId} onSelect={setActiveId} />
          </TabsContent>
          <TabsContent value="ribbon">
            <RibbonVariant activeId={activeId} onSelect={setActiveId} />
          </TabsContent>
          <TabsContent value="studio">
            <StudioVariant activeId={activeId} onSelect={setActiveId} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
