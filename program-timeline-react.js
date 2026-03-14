(function () {
  const container = document.getElementById("programTimeline");
  const debugEl = document.getElementById("programDebug");

  function setDebug(message, details) {
    if (!debugEl) return;
    debugEl.classList.remove("hidden");
    debugEl.textContent = details ? message + "\n" + details : message;
  }

  try {
    if (!container) throw new Error("programTimeline container fehlt");
    if (!window.React || !window.ReactDOM || !window.htm || !window.Motion) {
      throw new Error("React/ReactDOM/htm/Motion globals fehlen");
    }

    const React = window.React;
    const ReactDOM = window.ReactDOM;
    const motionLib = window.Motion;
    const html = window.htm.bind(React.createElement);
    const motion = motionLib.motion;
    const AnimatePresence = motionLib.AnimatePresence;
    const useEffect = React.useEffect;
    const useMemo = React.useMemo;
    const useState = React.useState;

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
        .sort(function (a, b) {
          if (a.order !== b.order) return a.order - b.order;
          if (a.time !== b.time) return String(a.time).localeCompare(String(b.time));
          return a.lane - b.lane;
        })
        .forEach(function (item) {
          const key = item.time || "Open Flow";
          if (!grouped.has(key)) grouped.set(key, []);
          grouped.get(key).push(item);
        });
      return Array.from(grouped.entries()).map(function (entry, index) {
        return {
          id: entry[0] + "-" + index,
          time: entry[0],
          entries: entry[1]
        };
      });
    }

    function CircleNode(props) {
      const item = props.item;
      const active = props.active;
      const onToggle = props.onToggle;
      const isAdmin = props.isAdmin;
      const eventId = props.eventId;
      const icon = ICON_MAP[item.icon] || ICON_MAP.sun;

      return html`
        <${motion.div}
          initial=${{ opacity: 0, y: 16, scale: 0.96 }}
          whileInView=${{ opacity: 1, y: 0, scale: 1 }}
          viewport=${{ once: true, amount: 0.2 }}
          className="relative w-[172px] h-[172px] sm:w-[188px] sm:h-[188px]"
        >
          <${motion.button}
            type="button"
            onClick=${onToggle}
            whileHover=${{ y: -4, scale: 1.02 }}
            whileTap=${{ scale: 0.99 }}
            className=${
              "relative h-full w-full overflow-hidden rounded-full border text-left transition-all duration-300 shadow-[0_18px_40px_rgba(31,111,229,0.18)] " +
              (active ? "border-[#79aef8] bg-[#1b438c]" : "border-[#5f97e8] bg-[#3f77d3]")
            }
          >
            <div className="absolute inset-[9%] rounded-full border border-white/16"></div>
            <div className="absolute inset-[16%] rounded-full border border-white/10"></div>
            <div className="relative z-10 flex h-full flex-col justify-between gap-3 p-4 sm:p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/68">Track ${item.lane}</p>
                  <h5 className="mt-2 max-w-[7.6rem] text-base font-semibold leading-tight text-white">${item.title}</h5>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-base text-white">${icon}</span>
              </div>
              <p className="line-clamp-4 text-[13px] leading-5 text-white/88">${item.description}</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72">${item.time}</p>
            </div>
          <//>
          <${AnimatePresence} initial=${false}>
            ${active
              ? html`
                  <${motion.div}
                    initial=${{ opacity: 0 }}
                    animate=${{ opacity: 1 }}
                    exit=${{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-end p-4"
                  >
                    <div className="w-full rounded-[24px] border border-white/16 bg-[#123a7a] p-3 shadow-[0_14px_26px_rgba(11,43,95,0.26)]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">Detail</p>
                      <p className="mt-2 text-[13px] leading-5 text-white/92">${item.description}</p>
                      ${isAdmin
                        ? html`
                            <div className="mt-3 flex justify-end">
                              <button
                                type="button"
                                onClick=${function (event) { event.stopPropagation(); }}
                                className="program-delete-btn rounded-full px-4 py-2 text-sm"
                                data-program-id=${item.id}
                                data-event-id=${eventId}
                              >
                                Loeschen
                              </button>
                            </div>`
                        : null}
                    </div>
                  <//>`
              : null}
          <//>
        <//>
      `;
    }

    function RootCircle(props) {
      return html`
        <div className="relative z-10 flex h-[118px] w-[118px] shrink-0 items-center justify-center rounded-full border border-[#79aef8] bg-[#295ab5] text-center shadow-[0_18px_40px_rgba(31,111,229,0.22)] sm:h-[132px] sm:w-[132px]">
          <div className="absolute inset-[10%] rounded-full border border-white/16"></div>
          <div className="relative px-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/68">Time</p>
            <p className="mt-2 text-base font-semibold leading-tight text-white sm:text-lg">${props.label}</p>
          </div>
        </div>
      `;
    }

    function DetailPanel(props) {
      const item = props.item;
      if (!item) return null;
      return html`
        <${motion.div}
          key=${item.id}
          initial=${{ opacity: 0, y: 10 }}
          animate=${{ opacity: 1, y: 0 }}
          transition=${{ duration: 0.24 }}
          className="rounded-[32px] border border-frue-100/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(236,245,255,0.88))] p-6 shadow-[0_20px_60px_rgba(29,69,143,0.12)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-frue-500">Selected Node</p>
          <h4 className="mt-3 text-2xl font-semibold text-frue-900">${item.title}</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-frue-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-frue-600">${item.time}</span>
            <span className="rounded-full border border-frue-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-frue-600">Track ${item.lane}</span>
          </div>
          <p className="mt-5 text-sm leading-7 text-frue-800/80">${item.description}</p>
        <//>
      `;
    }

    function TreeSection(props) {
      const section = props.section;
      const activeId = props.activeId;
      const setActiveId = props.setActiveId;
      const isAdmin = props.isAdmin;
      const eventId = props.eventId;

      return html`
        <section className="program-tree-section relative grid gap-5 lg:grid-cols-[132px_minmax(0,1fr)] lg:gap-8">
          <div className="relative flex justify-center lg:justify-start">
            <div className="hidden lg:block absolute left-[64px] top-[66px] h-[2px] w-10 bg-[#79aef8]"></div>
            <${RootCircle} label=${section.time} />
          </div>
          <div className="program-tree-children relative">
            <div className="hidden lg:block absolute left-0 top-[50%] h-[2px] w-full -translate-y-1/2 bg-[#c8ddff]"></div>
            <div className="relative flex flex-wrap gap-5 justify-center lg:justify-start">
              ${section.entries.map(function (item) {
                return html`<${CircleNode}
                  key=${item.id}
                  item=${item}
                  active=${activeId === item.id}
                  onToggle=${function () { setActiveId(activeId === item.id ? "" : item.id); }}
                  isAdmin=${isAdmin}
                  eventId=${eventId}
                />`;
              })}
            </div>
          </div>
        </section>
      `;
    }

    function EmptyProgram(props) {
      return html`<div className="rounded-[32px] border border-frue-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(236,245,255,0.85))] px-6 py-10 text-center shadow-[0_20px_60px_rgba(29,69,143,0.1)]"><span className="inline-flex rounded-full border border-frue-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-frue-600">program flow</span><h5 className="mt-4 text-xl font-semibold text-frue-900">Noch ist die Timeline leer.</h5><p className="mt-3 text-sm leading-7 text-frue-800/75">${props.message}</p></div>`;
    }

    function ProgramTimelineApp() {
      const [data, setData] = useState(window.__FRUEFRUE_PROGRAM_DATA || { items: [], emptyMessage: "" });
      const [activeId, setActiveId] = useState("");

      useEffect(function () {
        const handler = function (event) {
          const next = event.detail || { items: [], emptyMessage: "" };
          setData(next);
          setActiveId(next.items && next.items[0] ? next.items[0].id : "");
          if (debugEl) debugEl.classList.add("hidden");
        };
        window.addEventListener("fruefrue:program-data", handler);
        if (window.__FRUEFRUE_PROGRAM_DATA && window.__FRUEFRUE_PROGRAM_DATA.items) {
          const first = window.__FRUEFRUE_PROGRAM_DATA.items[0];
          setActiveId(first ? first.id : "");
        }
        return function () {
          window.removeEventListener("fruefrue:program-data", handler);
        };
      }, []);

      const sections = useMemo(function () {
        return groupByTime(data.items || []);
      }, [data.items]);
      const activeItem = (data.items || []).find(function (item) { return item.id === activeId; }) || (data.items || [])[0] || null;

      return html`
        <div className="relative overflow-hidden rounded-[36px] border border-frue-100/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(234,244,255,0.62))] p-4 shadow-[0_30px_120px_rgba(39,79,151,0.14)] md:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.84),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(135,188,255,0.24),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(184,216,255,0.24),transparent_26%)]"></div>
          <div className="relative">
            <div className="mb-6 flex flex-col gap-3 border-b border-white/50 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-frue-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-frue-700">fruefrue program</span>
                <h4 className="mt-3 text-2xl font-semibold tracking-tight text-frue-900 md:text-[2rem]">Tree Flow</h4>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-frue-800/75 md:text-[15px]">Eine klare Tree-Struktur mit gefuellten Kreis-Nodes, ohne Ueberlappungen und ohne alte Varianten-UIs.</p>
              </div>
              ${data.eventTitle ? html`<div className="rounded-full border border-frue-100 bg-white/70 px-4 py-2 text-sm font-medium text-frue-700 shadow-[0_14px_30px_rgba(31,111,229,0.08)]">${data.eventTitle}</div>` : null}
            </div>
            ${sections.length
              ? html`<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
                  <div className="grid gap-8">
                    ${sections.map(function (section) {
                      return html`<${TreeSection}
                        key=${section.id}
                        section=${section}
                        activeId=${activeId}
                        setActiveId=${setActiveId}
                        isAdmin=${Boolean(data.isAdmin)}
                        eventId=${data.eventId}
                      />`;
                    })}
                  </div>
                  <div className="lg:sticky lg:top-24">
                    <${DetailPanel} item=${activeItem} />
                  </div>
                </div>`
              : html`<${EmptyProgram} message=${data.emptyMessage || "Noch kein Programm veroeffentlicht."} />`}
          </div>
        </div>
      `;
    }

    ReactDOM.createRoot(container).render(html`<${ProgramTimelineApp} />`);
    window.__FRUEFRUE_PROGRAM_REACT_READY = true;
    if (debugEl) debugEl.classList.add("hidden");
  } catch (error) {
    console.error("Program timeline failed", error);
    window.__FRUEFRUE_PROGRAM_REACT_READY = false;
    setDebug("Timeline React failed", String(error && error.message ? error.message : error));
  }
})();
