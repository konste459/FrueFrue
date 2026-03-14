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

    function flattenTreeLevels(levels) {
      return (levels || []).reduce(function (acc, level) {
        return acc.concat(level.nodes || []);
      }, []);
    }

    function TreeNode(props) {
      const node = props.node;
      const active = props.active;
      const onToggle = props.onToggle;
      const isAdmin = props.isAdmin;
      const eventId = props.eventId;
      const icon = ICON_MAP[node.icon] || ICON_MAP.sun;

      return html`
        <${motion.div}
          layout
          initial=${{ opacity: 0, y: 16, scale: 0.95 }}
          animate=${{ opacity: 1, y: 0, scale: 1 }}
          transition=${{ duration: 0.28, ease: "easeOut" }}
          className="flex justify-center"
        >
          <${motion.button}
            layout
            type="button"
            onClick=${onToggle}
            whileHover=${{ y: -3, scale: 1.02 }}
            whileTap=${{ scale: 0.985 }}
            animate=${{
              width: active ? 240 : 182,
              height: active ? 240 : 182,
              paddingTop: active ? 24 : 20,
              paddingRight: active ? 20 : 16,
              paddingBottom: active ? 24 : 20,
              paddingLeft: active ? 20 : 16
            }}
            transition=${{ duration: 0.28, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-start overflow-hidden rounded-full border border-[#4c84df] bg-[#3f77d3] text-center shadow-[0_22px_46px_rgba(31,111,229,0.22)]"
            style=${{ minWidth: "182px", minHeight: "182px" }}
          >
            <div className="absolute inset-[9%] rounded-full border border-white/18"></div>
            <div className="absolute inset-[16%] rounded-full border border-white/10"></div>
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-between">
              <div className="flex w-full items-center justify-center gap-2 text-white">
                <span className="text-base">${icon}</span>
              </div>
              <div className="px-2">
                <h5 className=${"font-semibold leading-tight text-white " + (active ? "text-[1.18rem]" : "text-[1rem]")}>${node.title}</h5>
                ${active
                  ? html`<p className="mt-3 text-[0.92rem] leading-5 text-white">${node.description}</p>`
                  : null}
              </div>
              <div className="flex min-h-[28px] items-center justify-center">
                ${active && isAdmin && node.deletable
                  ? html`
                      <button
                        type="button"
                        onClick=${function (event) { event.stopPropagation(); }}
                        className="program-delete-btn rounded-full border border-white/22 bg-white/14 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white"
                        data-program-id=${node.id}
                        data-event-id=${eventId}
                        data-template-id=${node.templateId || ""}
                      >
                        Loeschen
                      </button>`
                  : html`<span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white">${node.time || ""}</span>`}
              </div>
            </div>
          <//>
        <//>
      `;
    }

    function LevelRow(props) {
      const level = props.level;
      const levelIndex = props.levelIndex;
      const activeId = props.activeId;
      const setActiveId = props.setActiveId;
      const isAdmin = props.isAdmin;
      const eventId = props.eventId;

      return html`
        <div className="relative flex flex-col items-center">
          ${levelIndex > 0
            ? html`<div className="mb-4 h-12 w-[3px] rounded-full bg-[linear-gradient(180deg,rgba(143,183,244,0.15),rgba(99,148,227,0.95))]"></div>`
            : null}
          <div className="relative w-full max-w-5xl">
            ${level.nodes && level.nodes.length > 1
              ? html`<div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[3px] w-[min(62vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(148,184,243,0.24),rgba(63,119,211,0.95),rgba(148,184,243,0.24))] md:block"></div>`
              : null}
            <div className="relative grid justify-center gap-6 sm:gap-8 ${level.nodes && level.nodes.length > 1 ? "md:grid-flow-col md:auto-cols-max" : ""}">
              ${(level.nodes || []).map(function (node) {
                return html`<${TreeNode}
                  key=${node.id}
                  node=${node}
                  active=${activeId === node.id}
                  onToggle=${function () { setActiveId(activeId === node.id ? "" : node.id); }}
                  isAdmin=${isAdmin}
                  eventId=${eventId}
                />`;
              })}
            </div>
          </div>
        </div>
      `;
    }

    function EmptyProgram(props) {
      return html`<div className="rounded-[32px] border border-frue-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(236,245,255,0.85))] px-6 py-10 text-center shadow-[0_20px_60px_rgba(29,69,143,0.1)]"><span className="inline-flex rounded-full border border-frue-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-frue-600">program flow</span><h5 className="mt-4 text-xl font-semibold text-frue-900">Noch ist die Timeline leer.</h5><p className="mt-3 text-sm leading-7 text-frue-800/75">${props.message}</p></div>`;
    }

    function ProgramTimelineApp() {
      const [data, setData] = useState(window.__FRUEFRUE_PROGRAM_DATA || { treeLevels: [], items: [], emptyMessage: "" });
      const [activeId, setActiveId] = useState("");

      useEffect(function () {
        const handler = function (event) {
          const next = event.detail || { treeLevels: [], items: [], emptyMessage: "" };
          setData(next);
          const nextItems = flattenTreeLevels(next.treeLevels || []);
          setActiveId(nextItems[0] ? nextItems[0].id : "");
          if (debugEl) debugEl.classList.add("hidden");
        };
        window.addEventListener("fruefrue:program-data", handler);
        if (window.__FRUEFRUE_PROGRAM_DATA && window.__FRUEFRUE_PROGRAM_DATA.treeLevels) {
          const first = flattenTreeLevels(window.__FRUEFRUE_PROGRAM_DATA.treeLevels)[0];
          setActiveId(first ? first.id : "");
        }
        return function () {
          window.removeEventListener("fruefrue:program-data", handler);
        };
      }, []);

      const levels = useMemo(function () {
        return data.treeLevels || [];
      }, [data.treeLevels]);

      return html`
        <div
          className="relative overflow-hidden rounded-[36px] border border-frue-100/70 p-4 shadow-[0_30px_120px_rgba(39,79,151,0.14)] md:p-6"
          style=${{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.82), rgba(234,244,255,0.78)), url('assets/backgrounds/trippy.png')",
            backgroundSize: "cover, cover",
            backgroundPosition: "center center, center center",
            backgroundRepeat: "no-repeat, no-repeat"
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(135,188,255,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(184,216,255,0.16),transparent_26%)]"></div>
          <div className="relative">
            <div className="mb-6 flex flex-col gap-3 border-b border-white/50 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-frue-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-frue-700">fruefrue program</span>
                <h4 className="mt-3 text-2xl font-semibold tracking-tight text-frue-900 md:text-[2rem]">Tree Flow</h4>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-frue-800/75 md:text-[15px]">Parallele Punkte liegen auf derselben Ebene. Erst beim Klick vergroessert sich die Bubble und zeigt mehr vom Ablauf.</p>
              </div>
              ${data.eventTitle ? html`<div className="rounded-full border border-frue-100 bg-white/70 px-4 py-2 text-sm font-medium text-frue-700 shadow-[0_14px_30px_rgba(31,111,229,0.08)]">${data.eventTitle}</div>` : null}
            </div>
            ${levels.length
              ? html`<div className="relative mx-auto flex max-w-6xl flex-col items-center gap-2 py-2">
                  ${levels.map(function (level, index) {
                    return html`<${LevelRow}
                      key=${level.id}
                      level=${level}
                      levelIndex=${index}
                      activeId=${activeId}
                      setActiveId=${setActiveId}
                      isAdmin=${Boolean(data.isAdmin)}
                      eventId=${data.eventId}
                    />`;
                  })}
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
