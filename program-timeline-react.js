(function () {
  const container = document.getElementById("programTimeline");
  const debugEl = document.getElementById("programDebug");

  function setDebug(message, details) {
    if (!debugEl) {
      return;
    }
    debugEl.classList.remove("hidden");
    debugEl.textContent = details ? message + "\n" + details : message;
  }

  try {
    if (!container) {
      throw new Error("programTimeline container fehlt");
    }
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

    const VARIANTS = {
      orbit: {
        label: "Orbit Spine",
        copy: "Vertikale Kreisachse mit grossen Stops links und rechts."
      },
      cluster: {
        label: "Cluster Grid",
        copy: "Gruppierte Kreisfelder fuer parallele Momente und Stages."
      },
      ribbon: {
        label: "Side Ribbon",
        copy: "Frontale Seitenbewegung mit klar verbundenen Kreisstationen."
      },
      scatter: {
        label: "Scatter Field",
        copy: "Freieres Feld aus blauen Kreisen mit editorialem Detailpanel."
      }
    };

    function groupByTime(items) {
      const grouped = new Map();
      items
        .slice()
        .sort(function (a, b) {
          if (a.order !== b.order) return a.order - b.order;
          return a.lane - b.lane;
        })
        .forEach(function (item) {
          const key = item.time || "Open Flow";
          if (!grouped.has(key)) {
            grouped.set(key, []);
          }
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

    function groupByLane(items) {
      const grouped = new Map();
      items.forEach(function (item) {
        const key = String(item.lane || 1);
        if (!grouped.has(key)) {
          grouped.set(key, []);
        }
        grouped.get(key).push(item);
      });
      return Array.from(grouped.entries()).map(function (entry) {
        return {
          lane: entry[0],
          entries: entry[1].slice().sort(function (a, b) {
            if (a.order !== b.order) return a.order - b.order;
            return a.lane - b.lane;
          })
        };
      });
    }

    function CircleNode(props) {
      const item = props.item;
      const active = props.active;
      const onToggle = props.onToggle;
      const isAdmin = props.isAdmin;
      const eventId = props.eventId;
      const size = props.size || "md";
      const icon = ICON_MAP[item.icon] || ICON_MAP.sun;
      const sizeClass = size === "lg" ? "w-72 h-72 p-7" : size === "sm" ? "w-48 h-48 p-5" : "w-60 h-60 p-6";

      return html`
        <${motion.div}
          initial=${{ opacity: 0, y: 18, scale: 0.96 }}
          whileInView=${{ opacity: 1, y: 0, scale: 1 }}
          viewport=${{ once: true, amount: 0.25 }}
          className=${"relative " + sizeClass}
        >
          <${motion.button}
            type="button"
            onClick=${onToggle}
            whileHover=${{ y: -6, scale: 1.03 }}
            whileTap=${{ scale: 0.99 }}
            className=${
              "relative h-full w-full overflow-hidden rounded-full border text-left shadow-[0_22px_70px_rgba(40,95,190,0.16)] transition-all duration-300 " +
              (active
                ? "border-[#7fb2ff] bg-[#295ab5] shadow-[0_28px_90px_rgba(41,90,181,0.28)]"
                : "border-[#5f97e8] bg-[#3f77d3]")
            }
          >
            <div className="absolute inset-[8%] rounded-full border border-white/18"></div>
            <div className="absolute inset-[15%] rounded-full border border-white/12"></div>
            <div className="relative z-10 flex h-full flex-col justify-between gap-4 p-5 md:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">${item.time}</p>
                  <h5 className="mt-3 max-w-[9rem] text-lg font-semibold leading-tight text-white">${item.title}</h5>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14 text-lg text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">${icon}</span>
              </div>
              <p className="line-clamp-4 text-sm leading-6 text-white/86">${item.description}</p>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/90">● Track ${item.lane}</span>
                <span className="rounded-full border border-white/18 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/88">${item.time}</span>
              </div>
            </div>
          <//>
          <${AnimatePresence} initial=${false}>
            ${active
              ? html`
                  <${motion.div}
                    initial=${{ opacity: 0 }}
                    animate=${{ opacity: 1 }}
                    exit=${{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-end bg-[linear-gradient(180deg,rgba(7,34,76,0.04),rgba(7,34,76,0.28))] p-5"
                  >
                    <div className="w-full rounded-[26px] border border-white/18 bg-[#1b438c]/94 p-4 shadow-[0_16px_30px_rgba(18,75,154,0.2)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">Open Detail</p>
                      <p className="mt-2 text-sm leading-6 text-white/92">${item.description}</p>
                      ${isAdmin
                        ? html`
                            <div className="mt-3 flex justify-end">
                              <button
                                type="button"
                                onClick=${function (event) {
                                  event.stopPropagation();
                                }}
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
                  <//>`
              : null}
          <//>
        <//>
      `;
    }

    function DetailPanel(props) {
      const item = props.item;
      if (!item) return null;
      return html`
        <${motion.div}
          key=${item.id}
          initial=${{ opacity: 0, y: 12 }}
          animate=${{ opacity: 1, y: 0 }}
          transition=${{ duration: 0.28, ease: "easeOut" }}
          className="rounded-[34px] border border-frue-100/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(235,245,255,0.86))] p-6 shadow-[0_20px_60px_rgba(29,69,143,0.12)] backdrop-blur-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-frue-500">Selected Stop</p>
          <h4 className="mt-3 text-2xl font-semibold text-frue-900">${item.title}</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-frue-100 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-frue-600">${item.time}</span>
            <span className="rounded-full border border-frue-100 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-frue-600">Track ${item.lane}</span>
          </div>
          <p className="mt-5 text-sm leading-7 text-frue-800/80">${item.description}</p>
        <//>
      `;
    }

    function OrbitVariant(props) {
      const items = props.items;
      const activeId = props.activeId;
      const setActiveId = props.setActiveId;
      const isAdmin = props.isAdmin;
      const eventId = props.eventId;
      return html`
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_320px]">
          <div className="relative min-h-[58rem] overflow-hidden rounded-[38px] border border-frue-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(232,243,255,0.72))] p-6">
            <div className="absolute left-1/2 top-10 bottom-10 w-[10px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(138,185,255,0.1),#5f97e8_34%,#82aff3_68%,rgba(138,185,255,0.1))]"></div>
            ${items.map(function (item, index) {
              return html`
                <div
                  key=${item.id}
                  className=${"absolute " + (index % 2 === 0 ? "left-[6%]" : "right-[6%]")}
                  style=${{ top: 6 + index * 12.5 + "%" }}
                >
                  <${CircleNode}
                    item=${item}
                    active=${activeId === item.id}
                    onToggle=${function () { setActiveId(activeId === item.id ? "" : item.id); }}
                    isAdmin=${isAdmin}
                    eventId=${eventId}
                    size=${index % 3 === 0 ? "lg" : "md"}
                  />
                </div>`;
            })}
          </div>
          <${DetailPanel} item=${items.find(function (item) { return item.id === activeId; }) || items[0]} />
        </div>
      `;
    }

    function ClusterVariant(props) {
      const lanes = groupByLane(props.items);
      return html`
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-[38px] border border-frue-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(232,243,255,0.72))] p-6 shadow-[0_18px_60px_rgba(61,102,180,0.14)]">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              ${lanes.map(function (lane) {
                return html`
                  <section key=${lane.lane} className="relative overflow-hidden rounded-[32px] border border-frue-100/70 bg-white/52 p-4 backdrop-blur-md">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-frue-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">Lane ${lane.lane}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-frue-500">${lane.entries.length} stops</span>
                    </div>
                    <div className="grid gap-4 justify-items-center">
                      ${lane.entries.map(function (item, index) {
                        return html`<${CircleNode}
                          key=${item.id}
                          item=${item}
                          active=${props.activeId === item.id}
                          onToggle=${function () { props.setActiveId(props.activeId === item.id ? "" : item.id); }}
                          isAdmin=${props.isAdmin}
                          eventId=${props.eventId}
                          size=${index === 0 ? "md" : "sm"}
                        />`;
                      })}
                    </div>
                  </section>`;
              })}
            </div>
          </div>
          <${DetailPanel} item=${props.items.find(function (item) { return item.id === props.activeId; }) || props.items[0]} />
        </div>
      `;
    }

    function RibbonVariant(props) {
      return html`
        <div className="space-y-6">
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max items-center gap-8 pr-6">
              ${props.items.map(function (item, index) {
                return html`
                  <div key=${item.id} className="relative w-[240px] shrink-0 first:ml-1">
                    ${index < props.items.length - 1
                      ? html`<div className="absolute right-[-46px] top-1/2 z-0 h-[16px] w-[64px] -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,#7aaeff_0%,#4f8ae3_45%,#9ec6ff_100%)] opacity-85"></div>`
                      : null}
                    <${CircleNode}
                      item=${item}
                      active=${props.activeId === item.id}
                      onToggle=${function () { props.setActiveId(props.activeId === item.id ? "" : item.id); }}
                      isAdmin=${props.isAdmin}
                      eventId=${props.eventId}
                      size="md"
                    />
                  </div>`;
              })}
            </div>
          </div>
          <${DetailPanel} item=${props.items.find(function (item) { return item.id === props.activeId; }) || props.items[0]} />
        </div>
      `;
    }

    function ScatterVariant(props) {
      const positions = [
        "left-[2%] top-[8%]",
        "left-[33%] top-[2%]",
        "right-[10%] top-[12%]",
        "left-[12%] top-[39%]",
        "left-[42%] top-[33%]",
        "right-[3%] top-[42%]",
        "left-[28%] bottom-[3%]"
      ];
      return html`
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_320px]">
          <div className="relative min-h-[48rem] overflow-hidden rounded-[38px] border border-frue-100/80 bg-[radial-gradient(circle_at_top_left,rgba(225,238,255,0.88),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(181,214,255,0.7),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(235,245,255,0.72))] p-6">
            ${props.items.map(function (item, index) {
              return html`
                <div key=${item.id} className=${"absolute " + positions[index % positions.length]}>
                  <${CircleNode}
                    item=${item}
                    active=${props.activeId === item.id}
                    onToggle=${function () { props.setActiveId(props.activeId === item.id ? "" : item.id); }}
                    isAdmin=${props.isAdmin}
                    eventId=${props.eventId}
                    size=${index % 2 === 0 ? "md" : "sm"}
                  />
                </div>`;
            })}
          </div>
          <${DetailPanel} item=${props.items.find(function (item) { return item.id === props.activeId; }) || props.items[0]} />
        </div>
      `;
    }

    function EmptyProgram(props) {
      return html`
        <div className="rounded-[32px] border border-frue-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(235,245,255,0.82))] px-6 py-10 text-center shadow-[0_20px_60px_rgba(29,69,143,0.1)]">
          <span className="inline-flex rounded-full border border-frue-100 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-frue-600">program flow</span>
          <h5 className="mt-4 text-xl font-semibold text-frue-900">Noch ist die Timeline leer.</h5>
          <p className="mt-3 text-sm leading-7 text-frue-800/75">${props.message}</p>
        </div>
      `;
    }

    function ProgramTimelineApp() {
      const [data, setData] = useState(window.__FRUEFRUE_PROGRAM_DATA || { items: [], emptyMessage: "" });
      const [activeId, setActiveId] = useState("");
      const [variant, setVariant] = useState("orbit");

      useEffect(function () {
        const handler = function (event) {
          const next = event.detail || { items: [], emptyMessage: "" };
          setData(next);
          setActiveId(next.items && next.items[0] ? next.items[0].id : "");
          if (debugEl) {
            debugEl.classList.add("hidden");
          }
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

      const items = data.items || [];
      const activeItem = items.find(function (item) { return item.id === activeId; }) || items[0] || null;
      const currentVariant = VARIANTS[variant] || VARIANTS.orbit;

      return html`
        <div className="relative overflow-hidden rounded-[36px] border border-frue-100/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(234,244,255,0.58))] p-4 shadow-[0_30px_120px_rgba(39,79,151,0.14)] backdrop-blur-xl md:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.84),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(135,188,255,0.24),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(184,216,255,0.24),transparent_26%)]"></div>
          <div className="relative">
            <div className="mb-6 flex flex-col gap-3 border-b border-white/50 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-frue-100 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-frue-700">fruefrue program</span>
                <h4 className="mt-3 text-2xl font-semibold tracking-tight text-frue-900 md:text-[2rem]">Blue Circle Timeline</h4>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-frue-800/75 md:text-[15px]">${currentVariant.copy}</p>
              </div>
              ${data.eventTitle
                ? html`<div className="rounded-full border border-frue-100 bg-white/65 px-4 py-2 text-sm font-medium text-frue-700 shadow-[0_14px_30px_rgba(31,111,229,0.08)]">${data.eventTitle}</div>`
                : null}
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              ${Object.keys(VARIANTS).map(function (key) {
                const item = VARIANTS[key];
                return html`
                  <button
                    key=${key}
                    type="button"
                    onClick=${function () { setVariant(key); }}
                    className=${
                      "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 " +
                      (variant === key
                        ? "border-transparent bg-frue-700 text-white shadow-[0_12px_24px_rgba(31,111,229,0.18)]"
                        : "border-frue-100 bg-white/70 text-frue-700 hover:bg-frue-50")
                    }
                  >
                    ${item.label}
                  </button>`;
              })}
            </div>

            ${items.length
              ? variant === "orbit"
                ? html`<${OrbitVariant} items=${items} activeId=${activeId} setActiveId=${setActiveId} isAdmin=${Boolean(data.isAdmin)} eventId=${data.eventId} />`
                : variant === "cluster"
                  ? html`<${ClusterVariant} items=${items} activeId=${activeId} setActiveId=${setActiveId} isAdmin=${Boolean(data.isAdmin)} eventId=${data.eventId} />`
                  : variant === "ribbon"
                    ? html`<${RibbonVariant} items=${items} activeId=${activeId} setActiveId=${setActiveId} isAdmin=${Boolean(data.isAdmin)} eventId=${data.eventId} />`
                    : html`<${ScatterVariant} items=${items} activeId=${activeId} setActiveId=${setActiveId} isAdmin=${Boolean(data.isAdmin)} eventId=${data.eventId} />`
              : html`<${EmptyProgram} message=${data.emptyMessage || "Noch kein Programm veroeffentlicht."} />`}
          </div>
        </div>
      `;
    }

    ReactDOM.createRoot(container).render(html`<${ProgramTimelineApp} />`);
    window.__FRUEFRUE_PROGRAM_REACT_READY = true;
    if (debugEl) {
      debugEl.classList.add("hidden");
    }
  } catch (error) {
    console.error("Program timeline failed", error);
    window.__FRUEFRUE_PROGRAM_REACT_READY = false;
    setDebug("Timeline React failed", String(error && error.message ? error.message : error));
  }
})();
