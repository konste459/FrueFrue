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
      const isMobile = props.isMobile;
      const icon = ICON_MAP[node.icon] || ICON_MAP.sun;
      const inactiveSize = isMobile ? 110 : 132;
      const activeSize = isMobile ? 156 : 184;
      const showTopConnector = props.showTopConnector;

      return html`
        <${motion.div}
          layout
          initial=${{ opacity: 0, y: 16, scale: 0.95 }}
          animate=${{ opacity: 1, y: 0, scale: 1 }}
          transition=${{ duration: 0.28, ease: "easeOut" }}
          className="relative flex justify-center pt-8"
        >
          ${showTopConnector
            ? html`<div
                className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 rounded-full"
                style=${{
                  width: isMobile ? "5px" : "6px",
                  height: isMobile ? "34px" : "38px",
                  background: "#4c84df",
                  boxShadow: "none"
                }}
              ></div>`
            : null}
          <${motion.button}
            layout
            type="button"
            onClick=${onToggle}
            whileHover=${{ y: -3, scale: 1.02 }}
            whileTap=${{ scale: 0.985 }}
            animate=${{
              width: active ? activeSize : inactiveSize,
              height: active ? activeSize : inactiveSize,
              paddingTop: active ? (isMobile ? 12 : 15) : (isMobile ? 8 : 11),
              paddingRight: active ? (isMobile ? 10 : 13) : (isMobile ? 8 : 10),
              paddingBottom: active ? (isMobile ? 12 : 15) : (isMobile ? 8 : 11),
              paddingLeft: active ? (isMobile ? 10 : 13) : (isMobile ? 8 : 10)
            }}
            transition=${{ duration: 0.28, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-start overflow-hidden rounded-full border border-[#4c84df] bg-[#3f77d3] text-center shadow-[0_22px_46px_rgba(31,111,229,0.22)]"
            style=${{ minWidth: inactiveSize + "px", minHeight: inactiveSize + "px" }}
          >
            <div className="absolute inset-[9%] rounded-full border border-white/18"></div>
            <div className="absolute inset-[16%] rounded-full border border-white/10"></div>
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-between" style=${{ color: "#ffffff" }}>
              <div className="flex w-full items-center justify-center gap-2 text-white" style=${{ color: "#ffffff" }}>
                <span className=${isMobile ? "text-[0.86rem]" : "text-[0.95rem]"}>${icon}</span>
              </div>
              <div className="px-2" style=${{ color: "#ffffff" }}>
                <h5 className=${"font-semibold leading-tight text-white " + (active ? (isMobile ? "text-[0.8rem]" : "text-[0.92rem]") : (isMobile ? "text-[0.72rem]" : "text-[0.82rem]"))}>${node.title}</h5>
                ${active
                  ? html`<p className=${"mt-1.5 text-white " + (isMobile ? "text-[0.62rem] leading-3.5" : "text-[0.7rem] leading-4")}>${node.description}</p>`
                  : null}
              </div>
              <div className="flex min-h-[22px] items-center justify-center">
                ${active && isAdmin && node.deletable
                  ? html`
                      <button
                        type="button"
                        onClick=${function (event) { event.stopPropagation(); }}
                        className=${"program-delete-btn rounded-full border border-white/22 bg-white/14 font-semibold uppercase tracking-[0.16em] text-white " + (isMobile ? "px-2 py-1 text-[0.48rem]" : "px-2.5 py-1 text-[0.55rem]")}
                        data-program-id=${node.id}
                        data-event-id=${eventId}
                        data-template-id=${node.templateId || ""}
                      >
                        Loeschen
                      </button>`
                  : html`<span className=${"font-semibold uppercase tracking-[0.16em] text-white " + (isMobile ? "text-[0.44rem]" : "text-[0.5rem]")}>${node.time || ""}</span>`}
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
      const isMobile = props.isMobile;
      const hasParallelNodes = level.nodes && level.nodes.length > 1;

      return html`
        <div className="relative flex flex-col items-center">
          ${levelIndex > 0
            ? html`<div
                className="mb-1 rounded-full"
                style=${{
                  width: isMobile ? "5px" : "6px",
                  height: isMobile ? "24px" : "28px",
                  background: "#4c84df",
                  boxShadow: "none"
                }}
              ></div>`
            : null}
          <div className="relative w-full max-w-5xl pt-1">
            ${!isMobile && hasParallelNodes
              ? html`<div
                  className="pointer-events-none absolute left-1/2 top-[18px] -translate-x-1/2 rounded-full"
                  style=${{
                    display: isMobile ? "none" : "block",
                    width: "min(46vw, 23rem)",
                    height: "6px",
                    background: "#4c84df",
                    boxShadow: "none"
                  }}
                ></div>`
              : null}
            <div className="relative grid justify-center gap-3 sm:gap-4 ${!isMobile && hasParallelNodes ? "md:grid-flow-col md:auto-cols-max" : ""}">
              ${(level.nodes || []).map(function (node) {
                return html`<${TreeNode}
                  key=${node.id}
                  node=${node}
                  active=${activeId === node.id}
                  onToggle=${function () { setActiveId(activeId === node.id ? "" : node.id); }}
                  isAdmin=${isAdmin}
                  eventId=${eventId}
                  isMobile=${isMobile}
                  showTopConnector=${levelIndex > 0}
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
      const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 640 : false);

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

      useEffect(function () {
        const resizeHandler = function () {
          setIsMobile(window.innerWidth < 640);
        };
        window.addEventListener("resize", resizeHandler);
        return function () {
          window.removeEventListener("resize", resizeHandler);
        };
      }, []);

      const levels = useMemo(function () {
        return data.treeLevels || [];
      }, [data.treeLevels]);

      return html`
        <div
          className="relative overflow-hidden rounded-[28px] border border-frue-100/70 p-2.5 shadow-[0_18px_64px_rgba(39,79,151,0.14)] md:p-4"
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
            <div className="mb-4 flex flex-col gap-2 border-b border-white/50 pb-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-frue-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-frue-700">fruefrue program</span>
              </div>
              ${data.eventTitle ? html`<div className="rounded-full border border-frue-100 bg-white/70 px-3 py-1.5 text-[0.72rem] font-medium text-frue-700 shadow-[0_10px_20px_rgba(31,111,229,0.08)]">${data.eventTitle}</div>` : null}
            </div>
            ${levels.length
              ? html`<div className="relative mx-auto flex max-w-4xl flex-col items-center gap-1 py-1">
                  ${levels.map(function (level, index) {
                    return html`<${LevelRow}
                      key=${level.id}
                      level=${level}
                      levelIndex=${index}
                      activeId=${activeId}
                      setActiveId=${setActiveId}
                      isAdmin=${Boolean(data.isAdmin)}
                      eventId=${data.eventId}
                      isMobile=${isMobile}
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
