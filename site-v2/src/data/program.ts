export type ProgramEntry = {
  id: string
  timeLabel: string
  title: string
  description: string
  stage: string
  note?: string
  icon?: string
  cluster: "arrival" | "plates" | "community" | "afterglow"
}

export const brunchProgram: ProgramEntry[] = [
  {
    id: "doors",
    timeLabel: "10:30",
    title: "Slow Doors",
    description:
      "Soft arrival, first coffee pour, playlists still low, everyone lands without rush.",
    stage: "Entrance Bar",
    note: "Walk in, grab a name tag, catch the first espresso wave.",
    icon: "Coffee",
    cluster: "arrival",
  },
  {
    id: "coffee-chat",
    timeLabel: "10:45",
    title: "Coffee + Warmup Talks",
    description:
      "Small round tables, first intros, people drift between cups and tiny conversations.",
    stage: "Front Tables",
    note: "Parallel social pocket with no fixed seating.",
    icon: "MessageCircleHeart",
    cluster: "arrival",
  },
  {
    id: "plates-open",
    timeLabel: "11:15",
    title: "Brunch Table Opens",
    description:
      "Main spread unlocks, sweet and salty plates rotate, first favorites start emerging.",
    stage: "Central Table",
    note: "Best moment for photos, first tasting round, zero pressure.",
    icon: "Croissant",
    cluster: "plates",
  },
  {
    id: "pairings",
    timeLabel: "11:35",
    title: "Pairings + Taste Notes",
    description:
      "Quick prompts around dishes, toppings and favorite combinations to spark the room.",
    stage: "Central Table",
    note: "People can branch into mini groups and compare plates in parallel.",
    icon: "Sparkles",
    cluster: "plates",
  },
  {
    id: "community-vote",
    timeLabel: "12:05",
    title: "Community Voting",
    description:
      "Live voting for favorite dish, creativity score and the most unexpected plate moment.",
    stage: "Voting Corner",
    note: "This is where the event page starts feeling interactive and social.",
    icon: "ChartColumnBig",
    cluster: "community",
  },
  {
    id: "photo-drop",
    timeLabel: "12:20",
    title: "Photo Drop + Memories",
    description:
      "Drive link goes live, first pictures get shared, people add candid moments from the room.",
    stage: "Media Corner",
    note: "Admin can publish links, guests can start browsing and uploading.",
    icon: "Images",
    cluster: "community",
  },
  {
    id: "afterglow",
    timeLabel: "12:50",
    title: "Afterglow Hangout",
    description:
      "No hard ending, just slower music, leftover pastries and a long warm fade-out.",
    stage: "Whole Space",
    note: "Open ending so conversations can keep running naturally.",
    icon: "SunMedium",
    cluster: "afterglow",
  },
]

export const variantDescriptions = {
  editorial:
    "Vertical editorial bubble rail with warmer beige notes and blue accents.",
  salon:
    "Branched salon bubble map for parallel brunch moments and side conversations.",
  ribbon:
    "Sideways bubble ribbon with cozy filled shapes instead of app-like cards.",
  studio:
    "Loose studio collage with mixed blobs and softer, hand-placed energy.",
} as const
