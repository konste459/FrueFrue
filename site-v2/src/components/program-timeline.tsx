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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MagicCard } from "@/components/ui/magic-card"
import { Spotlight } from "@/components/ui/spotlight"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { brunchProgram, type ProgramEntry, variantDescriptions } from "@/data/program"
import { cn } from "@/lib/utils"

const iconMap = {
  Coffee,
  MessageCircleHeart,
  Croissant,
  Sparkles,
  ChartColumnBig,
  Images,
  SunMedium,
} as const

function CircleNode({
  entry,
  activeId,
  onSelect,
  size = "md",
  className,
}: {
  entry: ProgramEntry
  activeId: string
  onSelect: (id: string) => void
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const Icon = iconMap[entry.icon as keyof typeof iconMap] ?? Coffee
  const isActive = activeId === entry.id
  const sizeClass = size === "lg" ? "size-[18rem] p-7" : size === "sm" ? "size-[12.5rem] p-5" : "size-[15rem] p-6"

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(entry.id)}
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      className={cn(
        "relative overflow-hidden rounded-full border text-left shadow-[0_22px_70px_rgba(40,95,190,0.16)] transition-all duration-300",
        sizeClass,
        isActive
          ? "border-[#7fb2ff] bg-[radial-gradient(circle_at_30%_24%,rgba(255,255,255,0.98),rgba(220,236,255,0.96)_42%,rgba(96,153,242,0.92)_100%)] shadow-[0_28px_90px_rgba(45,98,191,0.24)]"
          : "border-[#b9d6ff] bg-[radial-gradient(circle_at_30%_24%,rgba(255,255,255,0.98),rgba(236,245,255,0.95)_44%,rgba(135,183,255,0.92)_100%)]",
        className
      )}
    >
      <div className="absolute inset-[7%] rounded-full border border-white/65" />
      <div className="absolute inset-[14%] rounded-full border border-[#d7e9ff]/80" />
      <div className="relative z-10 flex h-full flex-col justify-between gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#84aee8]">{entry.timeLabel}</p>
            <h3 className="mt-3 max-w-[10rem] text-lg font-semibold leading-tight text-[#123d87]">{entry.title}</h3>
          </div>
          <span className="rounded-full bg-white/75 p-2 text-[#2562c0] shadow-[0_6px_18px_rgba(37,98,192,0.14)]">
            <Icon className="size-4" />
          </span>
        </div>
        <p className="line-clamp-4 text-sm leading-6 text-[#2d5ea9]">{entry.description}</p>
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[#2562c0]">
            <MapPin className="size-3.5" />
            {entry.stage}
          </span>
          <Badge variant="outline" className="border-[#b8d7ff] bg-white/66 text-[#2562c0]">
            {entry.cluster}
          </Badge>
        </div>
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
      className="rounded-[32px] border border-[#d5e7ff] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(239,247,255,0.82))] p-6 shadow-[0_20px_60px_rgba(29,69,143,0.12)] backdrop-blur-2xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#88afe8]">{entry.timeLabel}</p>
          <h3 className="mt-2 text-2xl font-semibold text-[#143f89]">{entry.title}</h3>
        </div>
        <div className="rounded-full bg-[#edf5ff] p-3 text-[#2562c0] shadow-inner shadow-white/80">
          <Icon className="size-5" />
        </div>
      </div>
      <p className="mt-5 text-base leading-7 text-[#3261aa]">{entry.description}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[24px] bg-[#f4f9ff] p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8ab1e9]">Spot</p>
          <p className="mt-2 text-sm font-medium text-[#1d4d99]">{entry.stage}</p>
        </div>
        <div className="rounded-[24px] bg-[#f4f9ff] p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8ab1e9]">Mini Note</p>
          <p className="mt-2 text-sm font-medium text-[#1d4d99]">{entry.note}</p>
        </div>
      </div>
    </motion.div>
  )
}

function OrbitVariant({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
      <div className="relative min-h-[58rem] overflow-hidden rounded-[36px] border border-[#d7e8ff] bg-[radial-gradient(circle_at_50%_10%,rgba(225,238,255,0.82),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(233,244,255,0.7))] p-6">
        <div className="absolute left-1/2 top-10 bottom-10 w-[10px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(167,205,255,0.15),#6ca1ef_35%,#9cc5ff_65%,rgba(167,205,255,0.15))]" />
        {brunchProgram.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={cn(
              "absolute",
              index % 2 === 0 ? "left-[7%]" : "right-[7%]"
            )}
            style={{ top: `${6 + index * 12.5}%` }}
          >
            <CircleNode entry={entry} activeId={activeId} onSelect={onSelect} size={index % 3 === 0 ? "lg" : "md"} />
          </motion.div>
        ))}
      </div>
      <DetailPanel entry={brunchProgram.find((entry) => entry.id === activeId) ?? brunchProgram[0]} />
    </div>
  )
}

function ConstellationVariant({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  const groups = useMemo(
    () => ({
      arrival: brunchProgram.filter((entry) => entry.cluster === "arrival"),
      plates: brunchProgram.filter((entry) => entry.cluster === "plates"),
      community: brunchProgram.filter((entry) => entry.cluster === "community"),
      afterglow: brunchProgram.filter((entry) => entry.cluster === "afterglow"),
    }),
    []
  )

  const ordered = [groups.arrival, groups.plates, groups.community, groups.afterglow]

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div className="rounded-[36px] border border-[#d7e8ff] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(233,244,255,0.72))] p-6 shadow-[0_18px_60px_rgba(61,102,180,0.14)] backdrop-blur-2xl">
        <div className="relative flex flex-col gap-8">
          <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-[8px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,#8cc0ff_0%,#4f88df_50%,#8cc0ff_100%)] opacity-70" />
          {ordered.map((group, groupIndex) => (
            <div key={group[0].id} className="relative">
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full border border-[#b9d6ff] bg-[radial-gradient(circle_at_30%_24%,#ffffff,#d9ebff_68%,#7fb1ff_100%)] text-sm font-semibold text-[#17468f] shadow-[0_12px_28px_rgba(77,124,204,0.18)]">
                {groupIndex + 1}
              </div>
              <div className={cn("grid gap-4 sm:grid-cols-2", group.length === 1 && "sm:grid-cols-1 sm:place-items-center")}>
                {group.map((entry, index) => (
                  <CircleNode key={entry.id} entry={entry} activeId={activeId} onSelect={onSelect} size={index === 0 ? "md" : "sm"} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <DetailPanel entry={brunchProgram.find((entry) => entry.id === activeId) ?? brunchProgram[0]} />
    </div>
  )
}

function RibbonVariant({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max items-center gap-8 pr-6">
          {brunchProgram.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.32, delay: index * 0.05 }}
              className="relative w-[240px] shrink-0 first:ml-1"
            >
              {index < brunchProgram.length - 1 && (
                <div className="absolute right-[-46px] top-1/2 z-0 h-[16px] w-[64px] -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,#7aaeff_0%,#4f8ae3_45%,#9ec6ff_100%)] opacity-85" />
              )}
              <MagicCard
                mode="gradient"
                className="rounded-full bg-transparent p-[1px]"
                gradientColor="rgba(101, 158, 242, 0.15)"
                gradientFrom="#6fa9ff"
                gradientTo="#b7d8ff"
              >
                <CircleNode entry={entry} activeId={activeId} onSelect={onSelect} size="md" />
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
      <DetailPanel entry={brunchProgram.find((entry) => entry.id === activeId) ?? brunchProgram[0]} />
    </div>
  )
}

function ScatterVariant({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  const positions = [
    "left-[2%] top-[8%]",
    "left-[33%] top-[2%]",
    "right-[10%] top-[12%]",
    "left-[12%] top-[39%]",
    "left-[42%] top-[33%]",
    "right-[3%] top-[42%]",
    "left-[28%] bottom-[3%]",
  ]

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_340px]">
      <div className="relative min-h-[48rem] overflow-hidden rounded-[38px] border border-[#d7e8ff] bg-[radial-gradient(circle_at_top_left,rgba(225,238,255,0.88),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(181,214,255,0.7),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(235,245,255,0.72))] p-6">
        {brunchProgram.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className={cn("absolute", positions[index])}
          >
            <CircleNode entry={entry} activeId={activeId} onSelect={onSelect} size={index % 2 === 0 ? "md" : "sm"} />
          </motion.div>
        ))}
      </div>
      <Card className="rounded-[32px] border border-[#d7e8ff] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(238,247,255,0.82))] shadow-[0_18px_56px_rgba(48,90,165,0.14)] backdrop-blur-2xl">
        <CardHeader>
          <CardTitle className="text-[#17438e]">Pinned Detail</CardTitle>
          <CardDescription className="text-[#5d86c4]">
            Each circle opens the longer event note, stage and mood context.
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
  const [variant, setVariant] = useState<keyof typeof variantDescriptions>("orbit")

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-[#d8e8ff] bg-[linear-gradient(180deg,rgba(255,255,255,0.54),rgba(232,243,255,0.48))] p-4 shadow-[0_30px_120px_rgba(39,79,151,0.14)] backdrop-blur-2xl sm:p-6 lg:p-8">
      <Spotlight className="left-0 top-[-18rem] opacity-100" fill="rgba(113, 168, 255, 0.24)" />
      <div className="relative z-10">
        <div className="max-w-3xl">
          <Badge className="mb-4 rounded-full bg-[#eaf4ff] px-3 py-1 text-[#356ab7]">Event Program UI Lab</Badge>
          <TypingAnimation
            as="h1"
            words={[
              "Four blue bubble systems for the event program.",
              "Clear circles, stronger personality, no generic cards.",
            ]}
            loop
            className="text-4xl font-semibold tracking-[-0.05em] text-[#173f86] sm:text-5xl"
          />
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4c6da6] sm:text-base">
            Clean rebuild target: only circles, only blue direction, and four distinct compositions instead of the same UI repeated with minor changes.
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
            <TabsTrigger value="orbit" className="rounded-full px-4 py-2 data-active:bg-[#edf5ff] data-active:text-[#1e4c95]">Orbit Spine</TabsTrigger>
            <TabsTrigger value="constellation" className="rounded-full px-4 py-2 data-active:bg-[#edf5ff] data-active:text-[#1e4c95]">Constellation Grid</TabsTrigger>
            <TabsTrigger value="ribbon" className="rounded-full px-4 py-2 data-active:bg-[#edf5ff] data-active:text-[#1e4c95]">Side Ribbon</TabsTrigger>
            <TabsTrigger value="scatter" className="rounded-full px-4 py-2 data-active:bg-[#edf5ff] data-active:text-[#1e4c95]">Scatter Field</TabsTrigger>
          </TabsList>
          <TabsContent value="orbit">
            <OrbitVariant activeId={activeId} onSelect={setActiveId} />
          </TabsContent>
          <TabsContent value="constellation">
            <ConstellationVariant activeId={activeId} onSelect={setActiveId} />
          </TabsContent>
          <TabsContent value="ribbon">
            <RibbonVariant activeId={activeId} onSelect={setActiveId} />
          </TabsContent>
          <TabsContent value="scatter">
            <ScatterVariant activeId={activeId} onSelect={setActiveId} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
