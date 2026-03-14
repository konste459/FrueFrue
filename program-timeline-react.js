import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import htm from "https://esm.sh/htm@3.1.1";
import { AnimatePresence, motion } from "https://esm.sh/framer-motion@11";

const html = htm.bind(React.createElement);
const container = document.getElementById("programTimeline");

const ICON_MAP = {
  coffee: "☕",
  music: "♪",
  camera: "◉",
  spark: "✦",
  plate: "◌",
  sun: "☼"
};

function groupByTime(items) {
  const grouped = new Map();
  items
    .slice()
    .sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order;
      return a.lane - b.lane;
    })
    .forEach((item) => {
      const key = item.time || "Open Flow";
      if (!grouped.has(key)) {
        grouped.set(key, []);
      }
      grouped.get(key).push(item);
    });
  return Array.from(grouped.entries()).map(([time, entries], index) => ({
    id: `${time}-${index}`,
    time,
    entries
  }));
}

function GlassCard({ children, className = "" }) {
  return html`
    <div className=${`rounded-[28px] border border-white/45 bg-white/45 shadow-brunch backdrop-blur-xl ${className}`}>
      ${children}
    </div>
  `;
}

function Badge({ children, className = "" }) {
  return html`
    <span
      className=${`inline-flex items-center rounded-full border border-frue-200/70 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-frue-700 ${className}`}
    >
      ${children}
    </span>
  `;
}

function IconBubble({ icon }) {
  return html`
    <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/60 bg-gradient-to-br from-white/80 to-frue-100/80 text-xl text-frue-700 shadow-[0_10px_24px_rgba(41,90,181,0.12)]">
      ${ICON_MAP[icon] || ICON_MAP.sun}
    </div>
  `;
}

function TimelineNode({ item, active, onToggle, isAdmin, eventId, index }) {
  return html`
    <${motion.article}
      initial=${{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView=${{ opacity: 1, y: 0, scale: 1 }}
      viewport=${{ once: true, amount: 0.22 }}
      transition=${{ duration: 0.45, delay: index * 0.05 }}
      whileHover=${{ y: -3, scale: 1.01 }}
      className="relative"
    >
      <button
        type="button"
        onClick=${onToggle}
        className=${`group w-full text-left transition-all duration-300 ${active ? "scale-[1.01]" : ""}`}
      >
        <${GlassCard}
          className=${`relative overflow-hidden p-4 md:p-5 ${
            active
              ? "border-frue-300/90 bg-white/60 ring-1 ring-frue-200/70"
              : "border-white/45 bg-white/45 hover:bg-white/55"
          }`}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-frue-300/70 to-transparent"></div>
          <div className="flex items-start gap-4">
            <${IconBubble} icon=${item.icon} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <${Badge}>${item.time}<//>
                <${Badge} className="bg-frue-50/80 text-frue-600">Track ${item.lane}<//>
              </div>
              <h5 className="mt-3 text-lg font-semibold leading-tight text-frue-900 md:text-[1.15rem]">
                ${item.title}
              </h5>
              <p className="mt-2 text-sm leading-6 text-slate-600 md:text-[15px]">
                ${item.description}
              </p>
            </div>
          </div>

          <${AnimatePresence} initial=${false}>
            ${active
              ? html`
                  <${motion.div}
                    initial=${{ opacity: 0, height: 0, marginTop: 0 }}
                    animate=${{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit=${{ opacity: 0, height: 0, marginTop: 0 }}
                    transition=${{ duration: 0.28, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-[22px] border border-frue-100/80 bg-white/65 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-frue-500">
                          Event Detail
                        </p>
                        <span className="text-xs font-medium text-slate-500">tap again to close</span>
                      </div>
                      <p className="mt-3 text-[15px] leading-7 text-slate-700">${item.description}</p>
                      ${isAdmin
                        ? html`
                            <div className="mt-4 flex flex-wrap gap-2">
                              <button
                                type="button"
                                className="program-delete-btn rounded-full px-4 py-2 text-sm"
                                data-program-id=${item.id}
                                data-event-id=${eventId}
                              >
                                Loeschen
                              </button>
                            </div>
                          `
                        : null}
                    </div>
                  <//>
                `
              : null}
          <//>
        <//>
      </button>
    <//>
  `;
}

function TimelineSection({ section, index, activeId, setActiveId, isAdmin, eventId }) {
  return html`
    <section className="relative grid gap-5 md:grid-cols-[112px_minmax(0,1fr)] md:gap-8">
      <div className="relative md:sticky md:top-24 md:self-start">
        <div className="hidden md:block absolute left-[54px] top-16 bottom-[-34px] w-px bg-gradient-to-b from-frue-200/90 via-frue-200/60 to-transparent"></div>
        <${GlassCard} className="px-4 py-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-frue-500">moment</p>
          <p className="mt-2 font-['Marker_Felt','Bradley_Hand','Avenir_Next',cursive] text-xl leading-tight text-frue-800">
            ${section.time}
          </p>
        <//>
      </div>

      <div className="grid gap-4">
        ${section.entries.map((item, itemIndex) =>
          html`<${TimelineNode}
            key=${item.id}
            item=${item}
            active=${activeId === item.id}
            onToggle=${() => setActiveId(activeId === item.id ? "" : item.id)}
            isAdmin=${isAdmin}
            eventId=${eventId}
            index=${index + itemIndex}
          />`
        )}
      </div>
    </section>
  `;
}

function EmptyProgram({ message }) {
  return html`
    <${GlassCard} className="px-6 py-10 text-center">
      <div className="mx-auto max-w-md">
        <${Badge} className="bg-frue-50/80">program flow<//>
        <h5 className="mt-4 text-xl font-semibold text-frue-900">Noch ist die Timeline quiet.</h5>
        <p className="mt-3 text-sm leading-7 text-slate-600">${message}</p>
      </div>
    <//>
  `;
}

function ProgramTimelineApp() {
  const [data, setData] = useState(window.__FRUEFRUE_PROGRAM_DATA || { items: [], emptyMessage: "" });
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handler = (event) => {
      const next = event.detail || { items: [], emptyMessage: "" };
      setData(next);
      setActiveId(next.items && next.items[0] ? next.items[0].id : "");
    };
    window.addEventListener("fruefrue:program-data", handler);
    if (window.__FRUEFRUE_PROGRAM_DATA && window.__FRUEFRUE_PROGRAM_DATA.items) {
      const first = window.__FRUEFRUE_PROGRAM_DATA.items[0];
      setActiveId(first ? first.id : "");
    }
    return () => window.removeEventListener("fruefrue:program-data", handler);
  }, []);

  const sections = useMemo(() => groupByTime(data.items || []), [data.items]);

  return html`
    <div className="relative overflow-hidden rounded-[34px] border border-white/55 bg-gradient-to-br from-white/65 via-[#f8fbff]/80 to-[#fff4e6]/75 p-4 shadow-brunch backdrop-blur-xl md:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(135,188,255,0.22),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,220,188,0.24),transparent_26%)]"></div>
      <div className="relative">
        <div className="mb-6 flex flex-col gap-3 border-b border-white/50 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <${Badge}>fruefrue event flow<//>
            <h4 className="mt-3 text-2xl font-semibold tracking-tight text-frue-900 md:text-[2rem]">
              Brunch Program
            </h4>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 md:text-[15px]">
              Ein editoriales Flow-Board mit soften Verbindungen, kleinen Motion-Momenten und genug Ruhe, damit die
              Inhalte nicht nach Standard-Schedule aussehen.
            </p>
          </div>
          ${data.eventTitle
            ? html`
                <div className="rounded-full border border-white/60 bg-white/65 px-4 py-2 text-sm font-medium text-frue-700 shadow-[0_14px_30px_rgba(31,111,229,0.08)]">
                  ${data.eventTitle}
                </div>
              `
            : null}
        </div>

        ${sections.length
          ? html`
              <div className="grid gap-8">
                ${sections.map(
                  (section, index) => html`
                    <${TimelineSection}
                      key=${section.id}
                      section=${section}
                      index=${index}
                      activeId=${activeId}
                      setActiveId=${setActiveId}
                      isAdmin=${Boolean(data.isAdmin)}
                      eventId=${data.eventId}
                    />
                  `
                )}
              </div>
            `
          : html`<${EmptyProgram} message=${data.emptyMessage || "Noch kein Programm veroeffentlicht."} />`}
      </div>
    </div>
  `;
}

if (container) {
  createRoot(container).render(html`<${ProgramTimelineApp} />`);
}
