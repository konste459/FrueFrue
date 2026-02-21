const BASE_USERS = {
  admin: { password: "1234", role: "admin", firstName: "Admin", lastName: "FrueFrue" },
  gast: { password: "1234", role: "gast", firstName: "Gast", lastName: "FrueFrue" }
};

const USER_ADJECTIVES = [
  { m: "entspannter", f: "entspannte" },
  { m: "wilder", f: "wilde" },
  { m: "aufgetauter", f: "aufgetaute" },
  { m: "kogongkogong", f: "kogongkogong" },
  { m: "rauchender", f: "rauchende" },
  { m: "kiffender", f: "kiffende" },
  { m: "taenzelnder", f: "taenzelnde" },
  { m: "zarter", f: "zarte" },
  { m: "duftender", f: "duftende" },
  { m: "froher", f: "frohe" },
  { m: "miesepetriger", f: "miesepetrige" },
  { m: "cooler", f: "coole" },
  { m: "swaggyer", f: "swaggye" }
];

const INDIE_ARTISTS = [
  { name: "Jeremias", gender: "m" },
  { name: "Berq", gender: "m" },
  { name: "Zartmann", gender: "m" },
  { name: "SkiAggu", gender: "m" },
  { name: "Ikkimel", gender: "f" },
  { name: "Cro", gender: "m" },
  { name: "MarkForster", gender: "m" },
  { name: "Apache207", gender: "m" },
  { name: "Souly", gender: "m" },
  { name: "Domiziana", gender: "f" },
  { name: "SohoBANI", gender: "m" },
  { name: "YungHurn", gender: "m" },
  { name: "KatyPerry", gender: "f" },
  { name: "DJKhaled", gender: "m" },
  { name: "BritneySpears", gender: "f" },
  { name: "JustinBieber", gender: "m" },
  { name: "PeterFox", gender: "m" },
  { name: "UdoJuergens", gender: "m" }
];

const BOULDER_GRADES = [
  "4a",
  "4b",
  "4c",
  "5a",
  "5b",
  "5c",
  "6a",
  "6b",
  "6c",
  "7a",
  "7b",
  "7c",
  "8a",
  "8b",
  "8c",
  "9a",
  "9b",
  "9c"
];

const eventFrames = [
  "./assets/events/IMG_0108.HEIC.png",
  "./assets/events/IMG_0109.HEIC.png",
  "./assets/events/IMG_0110.HEIC.png",
  "./assets/events/IMG_0111.HEIC.png",
  "./assets/events/IMG_0112.HEIC.png",
  "./assets/events/IMG_0113.HEIC.png"
];

const loginScreen = document.getElementById("loginScreen");
const appShell = document.getElementById("appShell");
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");
const regFirstNameInput = document.getElementById("regFirstName");
const regLastNameInput = document.getElementById("regLastName");
const regPasswordInput = document.getElementById("regPassword");
const regGenderInput = document.getElementById("regGender");
const regAgeInput = document.getElementById("regAge");
const regLevelInput = document.getElementById("regLevel");
const registerBtn = document.getElementById("registerBtn");
const registerStatus = document.getElementById("registerStatus");
const eventTrack = document.getElementById("eventTrack");
const welcomeUser = document.getElementById("welcomeUser");
const calMonth = document.getElementById("calMonth");
const calDay = document.getElementById("calDay");
const calTitle = document.getElementById("calTitle");
const calMeta = document.getElementById("calMeta");
const eventCreateForm = document.getElementById("eventCreateForm");
const eventType = document.getElementById("eventType");
const regularFields = document.getElementById("regularFields");
const plannedFields = document.getElementById("plannedFields");
const eventFormStatus = document.getElementById("eventFormStatus");
const eventList = document.getElementById("eventList");
const calendarWidget = document.getElementById("calendarWidget");
const ticketReminder = document.getElementById("ticketReminder");
const ticketReminderText = document.getElementById("ticketReminderText");
const ticketCountdown = document.getElementById("ticketCountdown");
const fixedEventNotice = document.getElementById("fixedEventNotice");
const ticketTitle = document.getElementById("ticketTitle");
const ticketDateTime = document.getElementById("ticketDateTime");
const ticketDescription = document.getElementById("ticketDescription");
const buyTicketBtn = document.getElementById("buyTicketBtn");
const ticketStatus = document.getElementById("ticketStatus");
const regularTicketFlow = document.getElementById("regularTicketFlow");
const plannedTicketFlow = document.getElementById("plannedTicketFlow");
const plannedEventTitle = document.getElementById("plannedEventTitle");
const plannedEventMonth = document.getElementById("plannedEventMonth");
const plannedCalendar = document.getElementById("plannedCalendar");
const plannedVoteStatus = document.getElementById("plannedVoteStatus");
const plannedFinalizeTime = document.getElementById("plannedFinalizeTime");
const ticketSuccessText = document.getElementById("ticketSuccessText");
const goToEventBtn = document.getElementById("goToEventBtn");
const eventPageTitle = document.getElementById("eventPageTitle");
const eventInfoText = document.getElementById("eventInfoText");
const eventGallery = document.getElementById("eventGallery");
const eventDriveGuestText = document.getElementById("eventDriveGuestText");
const eventDriveLink = document.getElementById("eventDriveLink");
const eventDriveInput = document.getElementById("eventDriveInput");
const publishDriveBtn = document.getElementById("publishDriveBtn");
const eventImageStatus = document.getElementById("eventImageStatus");
const pollList = document.getElementById("pollList");
const pollQuestion = document.getElementById("pollQuestion");
const pollType = document.getElementById("pollType");
const pollOptions = document.getElementById("pollOptions");
const createPollBtn = document.getElementById("createPollBtn");
const pollStatus = document.getElementById("pollStatus");
const profileUsername = document.getElementById("profileUsername");
const profileRole = document.getElementById("profileRole");
const adminUserList = document.getElementById("adminUserList");
const adminUserStatus = document.getElementById("adminUserStatus");
const logoutBtn = document.getElementById("logoutBtn");
const archivePlayButtons = document.querySelectorAll(".archive-play");
const archiveViewer = document.getElementById("archiveViewer");
const archiveViewerImage = document.getElementById("archiveViewerImage");
const archiveViewerLabel = document.getElementById("archiveViewerLabel");
const archiveCloseBtn = document.getElementById("archiveCloseBtn");
const archivePrevBtn = document.getElementById("archivePrevBtn");
const archiveNextBtn = document.getElementById("archiveNextBtn");
const archiveTrack = document.getElementById("archiveTrack");
const archiveNextScene = document.getElementById("archiveNextScene");
const factsUserCount = document.getElementById("factsUserCount");
const factsAvgAge = document.getElementById("factsAvgAge");
const factsAgeRange = document.getElementById("factsAgeRange");
const factsAvgLevel = document.getElementById("factsAvgLevel");
const factsLevelRange = document.getElementById("factsLevelRange");
const factsGenderPie = document.getElementById("factsGenderPie");
const factsFemaleCount = document.getElementById("factsFemaleCount");
const factsMaleCount = document.getElementById("factsMaleCount");
const factsDiversCount = document.getElementById("factsDiversCount");
const fruefrueQuote = document.getElementById("fruefrueQuote");
const fruefrueQuoteAuthor = document.getElementById("fruefrueQuoteAuthor");
const fruefrueAnswerForm = document.getElementById("fruefrueAnswerForm");
const fruefrueAnswerInput = document.getElementById("fruefrueAnswerInput");
const fruefrueAnswerStatus = document.getElementById("fruefrueAnswerStatus");
const spotifySongForm = document.getElementById("spotifySongForm");
const spotifySongTitle = document.getElementById("spotifySongTitle");
const spotifySongArtist = document.getElementById("spotifySongArtist");
const spotifySongLink = document.getElementById("spotifySongLink");
const spotifySongStatus = document.getElementById("spotifySongStatus");
const spotifySongList = document.getElementById("spotifySongList");

let activePage = "home";
const STORAGE_KEY = "fruefrue-events-v1";
const TICKET_STORAGE_KEY = "fruefrue-ticket-v1";
const EVENT_IMAGES_KEY = "fruefrue-event-images-v1";
const EVENT_POLLS_KEY = "fruefrue-event-polls-v1";
const EVENT_DRIVE_KEY = "fruefrue-event-drive-v1";
const POLL_VOTES_KEY = "fruefrue-poll-votes-v1";
const PLANNED_VOTES_KEY = "fruefrue-planned-votes-v1";
const USERS_STORAGE_KEY = "fruefrue-users-v1";
const DELETED_USERS_KEY = "fruefrue-deleted-users-v1";
const FIXED_NOTICE_KEY = "fruefrue-fixed-notice-v1";
const FRUEFRUE_ANSWERS_KEY = "fruefrue-answers-v1";
const SPOTIFY_SONGS_KEY = "fruefrue-spotify-songs-v1";
let currentUser = "";
let currentRole = "";
let currentFirstName = "";
let countdownTimer = null;
let archiveCurrentEvent = "";
let archiveCurrentIndex = 0;
let archiveSceneIndex = 0;
let quoteTimer = null;

const archiveEvents = {
  "fruefrue-1": {
    title: "FrueFrue 1.0",
    images: [...eventFrames]
  },
  "fruefrue-2": {
    title: "FrueFrue 2.0",
    images: [...eventFrames]
  },
  "papa-x-fruefrue": {
    title: "PaPa x FrueFrue",
    images: [...eventFrames]
  },
  "cockogott-x-fruefrue": {
    title: "CockOGott x FrueFrue",
    images: [...eventFrames]
  }
};

function removeWhiteBackground(img) {
  if (!img || !img.src) {
    return;
  }

  const source = new Image();
  source.crossOrigin = "anonymous";
  source.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = source.naturalWidth;
    canvas.height = source.naturalHeight;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    ctx.drawImage(source, 0, 0);
    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = frame.data;

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      if (r > 235 && g > 235 && b > 235) {
        pixels[i + 3] = 0;
      }
    }

    ctx.putImageData(frame, 0, 0);
    img.src = canvas.toDataURL("image/png");
  };
  source.src = img.src;
}

function normalizeLogos() {
  document.querySelectorAll(".topbar-logo, .welcome-logo, .transparent-cutout").forEach((img) => {
    removeWhiteBackground(img);
  });
}

function setAdminVisibility(isAdmin) {
  document.body.classList.toggle("is-admin", isAdmin);
}

function setTicketVisibility(hasTicket) {
  document.body.classList.toggle("has-ticket", hasTicket);
}

function loadJSON(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) {
    return fallback;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getRegisteredUsers() {
  return loadJSON(USERS_STORAGE_KEY, {});
}

function saveRegisteredUsers(users) {
  saveJSON(USERS_STORAGE_KEY, users);
}

function getDeletedUsers() {
  const list = loadJSON(DELETED_USERS_KEY, []);
  return Array.isArray(list) ? list : [];
}

function saveDeletedUsers(list) {
  saveJSON(DELETED_USERS_KEY, list);
}

function getAllUsers() {
  const all = { ...BASE_USERS, ...getRegisteredUsers() };
  const deleted = new Set(getDeletedUsers().map((name) => String(name).toLowerCase()));
  const result = {};
  Object.entries(all).forEach(([username, user]) => {
    if (!deleted.has(username.toLowerCase())) {
      result[username] = user;
    }
  });
  return result;
}

function getClubUsers() {
  return Object.entries(getAllUsers())
    .filter(([username]) => username !== "admin" && username !== "gast")
    .map(([username, user]) => ({ username, ...user }));
}

function gradeToIndex(grade) {
  return BOULDER_GRADES.indexOf(String(grade || "").toLowerCase());
}

function indexToGrade(index) {
  if (index < 0 || index >= BOULDER_GRADES.length) {
    return "-";
  }
  return BOULDER_GRADES[index];
}

function animateNumber(targetEl, to, suffix = "", digits = 0) {
  if (!targetEl) {
    return;
  }
  const start = performance.now();
  const duration = 950;
  const from = 0;
  const step = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const value = from + (to - from) * progress;
    targetEl.textContent = `${value.toFixed(digits)}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomCode() {
  return String(Math.floor(Math.random() * 900) + 100);
}

function generateRandomUsername(existingUsers) {
  const existing = new Set(Object.keys(existingUsers).map((name) => name.toLowerCase()));
  for (let i = 0; i < 120; i += 1) {
    const adjective = randomFrom(USER_ADJECTIVES);
    const artist = randomFrom(INDIE_ARTISTS);
    const word = artist.gender === "f" ? adjective.f : adjective.m;
    const name = `${word}_${artist.name}_${randomCode()}`.replace(/\s+/g, "").toLowerCase();
    if (!existing.has(name.toLowerCase())) {
      return name;
    }
  }
  return `aufgetauter_berq_${randomCode()}`;
}

function getFixedNotice() {
  return loadJSON(FIXED_NOTICE_KEY, null);
}

function saveFixedNotice(notice) {
  saveJSON(FIXED_NOTICE_KEY, notice);
}

function clearFixedNotice() {
  localStorage.removeItem(FIXED_NOTICE_KEY);
}

function getFruefrueAnswers() {
  return loadJSON(FRUEFRUE_ANSWERS_KEY, []);
}

function saveFruefrueAnswers(answers) {
  saveJSON(FRUEFRUE_ANSWERS_KEY, answers);
}

function getSpotifySongs() {
  return loadJSON(SPOTIFY_SONGS_KEY, []);
}

function saveSpotifySongs(songs) {
  saveJSON(SPOTIFY_SONGS_KEY, songs);
}

function getEventId(event) {
  if (!event) {
    return "";
  }
  if (event.uid) {
    return event.uid;
  }
  return `${event.title}__${event.date}__${event.time}`;
}

function getTicketPurchase() {
  const key = `${TICKET_STORAGE_KEY}:${currentUser || "anon"}`;
  return loadJSON(key, null);
}

function saveTicketPurchase(ticket) {
  const key = `${TICKET_STORAGE_KEY}:${currentUser || "anon"}`;
  saveJSON(key, ticket);
}

function clearTicketPurchase() {
  const key = `${TICKET_STORAGE_KEY}:${currentUser || "anon"}`;
  localStorage.removeItem(key);
}

function hasTicketForEvent(event) {
  const ticket = getTicketPurchase();
  if (!ticket || !event) {
    return false;
  }
  return ticket.eventId === getEventId(event);
}

function getPlannedVotes() {
  return loadJSON(PLANNED_VOTES_KEY, {});
}

function savePlannedVotes(votes) {
  saveJSON(PLANNED_VOTES_KEY, votes);
}

function getMonthLabel(monthIndex) {
  const labels = [
    "Januar",
    "Februar",
    "Maerz",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];
  return labels[monthIndex] || "Unbekannt";
}

function getWeekendTerms(year, monthIndex) {
  const terms = [];
  const date = new Date(year, monthIndex, 1);
  while (date.getMonth() === monthIndex) {
    const day = date.getDay();
    if (day === 5 || day === 6 || day === 0) {
      terms.push(new Date(date));
    }
    date.setDate(date.getDate() + 1);
  }
  return terms;
}

function loadEvents() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    let changed = false;
    parsed.forEach((event) => {
      if (!event.uid) {
        event.uid = `evt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
        changed = true;
      }
    });
    if (changed) {
      saveEvents(parsed);
    }
    return parsed;
  } catch {
    return [];
  }
}

function saveEvents(events) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

function sortEventsByTime(events) {
  return [...events].sort((a, b) => {
    const now = new Date();
    const parseEventTime = (event) => {
      if (event.type === "planned") {
        const month = Number(event.month ?? now.getMonth());
        let year = now.getFullYear();
        if (month < now.getMonth()) {
          year += 1;
        }
        return new Date(year, month, 1, 0, 0, 0).getTime();
      }
      return new Date(`${event.date}T${event.time}`).getTime();
    };
    const aTime = parseEventTime(a);
    const bTime = parseEventTime(b);
    return aTime - bTime;
  });
}

function getNextEvent() {
  const events = sortEventsByTime(loadEvents());
  if (!events.length) {
    return null;
  }

  const planned = events.filter((event) => event.type === "planned");
  if (planned.length) {
    return planned[0];
  }

  const now = Date.now();
  return events.find((event) => new Date(`${event.date}T${event.time}`).getTime() >= now) || events[0] || null;
}

function formatCountdown(ms) {
  if (ms <= 0) {
    return "00:00:00";
  }
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function updateTicketReminder() {
  if (!ticketReminder || !ticketReminderText || !ticketCountdown) {
    return;
  }
  const next = getNextEvent();
  const hasTicket = hasTicketForEvent(next);
  setTicketVisibility(hasTicket);
  if (!next || !hasTicket) {
    ticketReminder.classList.add("hidden");
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
    return;
  }

  ticketReminder.classList.remove("hidden");
  ticketReminderText.textContent = `Du hast ein Ticket fuer ${next.title}.`;
  const target = new Date(`${next.date}T${next.time}`).getTime();

  const tick = () => {
    const now = Date.now();
    const diff = Math.max(0, target - now);
    ticketCountdown.textContent = `Countdown: ${formatCountdown(diff)}`;
  };

  tick();
  if (countdownTimer) {
    clearInterval(countdownTimer);
  }
  countdownTimer = setInterval(tick, 1000);
}

function updateFixedEventNotice() {
  if (!fixedEventNotice) {
    return;
  }
  const notice = getFixedNotice();
  if (!notice || !notice.eventId) {
    fixedEventNotice.classList.add("hidden");
    return;
  }
  const event = loadEvents().find((item) => getEventId(item) === notice.eventId && item.type !== "planned");
  if (!event) {
    fixedEventNotice.classList.add("hidden");
    return;
  }
  const date = new Date(`${event.date}T${event.time}`);
  const when = `${date.toLocaleDateString("de-DE")} · ${date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit"
  })}`;
  fixedEventNotice.textContent = `Termin steht fest fuer ${event.title} (${when})`;
  fixedEventNotice.classList.remove("hidden");
}

function updateCalendarCard() {
  if (!calMonth || !calDay || !calTitle || !calMeta) {
    return;
  }

  const next = getNextEvent();

  if (!next) {
    calMonth.textContent = "BALD";
    calDay.textContent = "--";
    calTitle.textContent = "Noch kein Event geplant";
    calMeta.textContent = "Lege im Admin-Bereich ein Event an.";
    updateTicketView(null);
    updateEventPage(null, false);
    updateTicketReminder();
    updateFixedEventNotice();
    return;
  }

  if (next.type === "planned") {
    calMonth.textContent = getMonthLabel(Number(next.month)).toUpperCase();
    calDay.textContent = "PL";
    calTitle.textContent = next.title;
    calMeta.textContent = `Planned Event · Monat ${getMonthLabel(Number(next.month))} · Tippen fuer Voting`;
    updateTicketView(next);
    updateEventPage(next, false);
    updateTicketReminder();
    updateFixedEventNotice();
    return;
  }

  const date = new Date(`${next.date}T${next.time}`);
  const month = date.toLocaleDateString("de-DE", { month: "long" }).toUpperCase();
  const day = date.toLocaleDateString("de-DE", { day: "2-digit" });
  const dateLabel = date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
  const time = date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

  calMonth.textContent = month;
  calDay.textContent = day;
  calTitle.textContent = next.title;
  calMeta.textContent = `${dateLabel} · ${time} · Tippen fuer Ticket`;
  updateTicketView(next);
  updateEventPage(next, false);
  updateTicketReminder();
  updateFixedEventNotice();
}

function renderEventList() {
  if (!eventList) {
    return;
  }
  const events = sortEventsByTime(loadEvents());
  eventList.innerHTML = "";
  if (events.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Keine Events gespeichert.";
    eventList.appendChild(item);
    return;
  }

  events.forEach((event) => {
    const price = typeof event.price === "number" ? event.price : 7;
    let label = "";
    if (event.type === "planned") {
      label = `PLANNED (${getMonthLabel(Number(event.month))}) - ${event.title} (${event.description})`;
    } else {
      const date = new Date(`${event.date}T${event.time}`);
      label = `${date.toLocaleDateString("de-DE")} ${date.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit"
      })} - ${event.title} (${event.description}) - ${formatEuro(price)}`;
    }
    const item = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = label;
    item.appendChild(text);

    if (currentRole === "admin") {
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "event-delete-btn";
      deleteBtn.dataset.eventId = getEventId(event);
      deleteBtn.textContent = "Loeschen";
      item.appendChild(deleteBtn);
    }
    eventList.appendChild(item);
  });
}

function mountEventForm() {
  if (!eventCreateForm) {
    return;
  }
  eventCreateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (currentRole !== "admin") {
      if (eventFormStatus) {
        eventFormStatus.textContent = "Nur Admin kann Events erstellen.";
      }
      return;
    }

    const formData = new FormData(eventCreateForm);
    const type = String(formData.get("type") || "regular");
    const title = String(formData.get("title") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const time = String(formData.get("time") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const priceRaw = String(formData.get("price") || "7").trim();
    const price = Number(priceRaw);
    const month = Number(formData.get("month") || 0);

    const invalidRegular = type === "regular" && (!date || !time);
    const invalidPlanned = type === "planned" && Number.isNaN(month);
    if (!title || !description || Number.isNaN(price) || price < 0 || invalidRegular || invalidPlanned) {
      if (eventFormStatus) {
        eventFormStatus.textContent = "Bitte gueltige Werte eintragen.";
      }
      return;
    }

    const events = loadEvents();
    const base = {
      uid: `evt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type,
      title,
      description,
      price,
      createdBy: currentUser || "gast"
    };
    if (type === "planned") {
      events.push({ ...base, month, date: "", time: "" });
    } else {
      events.push({ ...base, date, time });
    }
    saveEvents(events);
    eventCreateForm.reset();
    const priceInput = document.getElementById("eventPrice");
    if (priceInput) {
      priceInput.value = "7";
    }
    if (eventFormStatus) {
      eventFormStatus.textContent = "Event gespeichert.";
    }
    renderEventList();
    updateCalendarCard();
  });
}

function mountEventDelete() {
  if (!eventList) {
    return;
  }
  eventList.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains("event-delete-btn")) {
      return;
    }
    if (currentRole !== "admin") {
      return;
    }
    const eventId = target.dataset.eventId || "";
    if (!eventId) {
      return;
    }

    const events = loadEvents();
    const filtered = events.filter((item) => getEventId(item) !== eventId);
    saveEvents(filtered);

    const votes = getPlannedVotes();
    if (votes[eventId]) {
      delete votes[eventId];
      savePlannedVotes(votes);
    }

    const notice = getFixedNotice();
    if (notice && notice.eventId === eventId) {
      clearFixedNotice();
    }

    if (eventFormStatus) {
      eventFormStatus.textContent = "Event geloescht.";
    }
    renderEventList();
    updateCalendarCard();
  });
}

function formatEuro(value) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);
}

function mountEventTypeToggle() {
  if (!eventType || !regularFields || !plannedFields) {
    return;
  }
  const apply = () => {
    const planned = eventType.value === "planned";
    regularFields.classList.toggle("hidden", planned);
    plannedFields.classList.toggle("hidden", !planned);
    const dateInput = document.getElementById("eventDate");
    const timeInput = document.getElementById("eventTime");
    if (dateInput) {
      dateInput.required = !planned;
    }
    if (timeInput) {
      timeInput.required = !planned;
    }
  };
  eventType.addEventListener("change", apply);
  apply();
}

function updateTicketView(event) {
  if (!ticketTitle || !ticketDateTime || !ticketDescription || !buyTicketBtn) {
    return;
  }

  if (!event) {
    if (regularTicketFlow && plannedTicketFlow) {
      regularTicketFlow.classList.remove("hidden");
      plannedTicketFlow.classList.add("hidden");
    }
    ticketTitle.textContent = "Noch kein Event geplant";
    ticketDateTime.textContent = "--";
    ticketDescription.textContent = "Lege als Admin ein Event an, um Tickets freizuschalten.";
    buyTicketBtn.textContent = `Ticket holen fuer ${formatEuro(7)}`;
    buyTicketBtn.disabled = true;
    if (ticketStatus) {
      ticketStatus.textContent = "";
    }
    return;
  }

  if (event.type === "planned") {
    if (regularTicketFlow && plannedTicketFlow) {
      regularTicketFlow.classList.add("hidden");
      plannedTicketFlow.classList.remove("hidden");
    }
    if (plannedEventTitle) {
      plannedEventTitle.textContent = `${event.title} (Planned Event)`;
    }
    if (plannedEventMonth) {
      plannedEventMonth.textContent = `Monat: ${getMonthLabel(Number(event.month))}`;
    }
    renderPlannedCalendar(event);
    return;
  }

  if (regularTicketFlow && plannedTicketFlow) {
    regularTicketFlow.classList.remove("hidden");
    plannedTicketFlow.classList.add("hidden");
  }

  const date = new Date(`${event.date}T${event.time}`);
  const dateLabel = date.toLocaleDateString("de-DE");
  const time = date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
  const price = typeof event.price === "number" ? event.price : 7;

  ticketTitle.textContent = event.title;
  ticketDateTime.textContent = `${dateLabel} · ${time}`;
  ticketDescription.textContent = event.description;
  buyTicketBtn.textContent = `Ticket holen fuer ${formatEuro(price)}`;
  buyTicketBtn.disabled = false;
  if (ticketStatus) {
    ticketStatus.textContent = "";
  }
}

function renderPlannedCalendar(event) {
  if (!plannedCalendar || !plannedVoteStatus) {
    return;
  }
  plannedCalendar.innerHTML = "";
  plannedVoteStatus.textContent = "";

  const now = new Date();
  let year = now.getFullYear();
  const month = Number(event.month ?? now.getMonth());
  if (month < now.getMonth()) {
    year += 1;
  }
  const terms = getWeekendTerms(year, month);
  const votes = getPlannedVotes();
  const eventId = getEventId(event);
  const eventVotes = votes[eventId] || {};
  const maxYes = terms.reduce((max, date) => {
    const iso = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
      date.getDate()
    ).padStart(2, "0")}`;
    const termVotes = eventVotes[iso];
    const yes = termVotes ? termVotes.yes : 0;
    return yes > max ? yes : max;
  }, 0);

  terms.forEach((date) => {
    const iso = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
      date.getDate()
    ).padStart(2, "0")}`;
    if (!eventVotes[iso]) {
      eventVotes[iso] = { yes: 0, no: 0, voters: {} };
    }
    const dayVote = eventVotes[iso];
    const userChoice = dayVote.voters[currentUser] || "";

    const card = document.createElement("div");
    card.className = "planned-day";
    card.dataset.term = iso;
    if (maxYes > 0 && dayVote.yes === maxYes) {
      card.classList.add("planned-favorite");
      const favoriteTag = document.createElement("span");
      favoriteTag.className = "planned-favorite-tag";
      favoriteTag.textContent = "Favourite";
      card.appendChild(favoriteTag);
    }

    const weekday = date.toLocaleDateString("de-DE", { weekday: "long" });
    const dateLabel = date.toLocaleDateString("de-DE");
    const head = document.createElement("p");
    head.className = "planned-day-head";
    head.textContent = `${weekday}, ${dateLabel}`;
    card.appendChild(head);

    const actions = document.createElement("div");
    actions.className = "planned-vote-actions";
    const yesBtn = document.createElement("button");
    yesBtn.type = "button";
    yesBtn.className = "planned-vote-btn";
    yesBtn.textContent = "Ja";
    yesBtn.dataset.vote = "yes";
    const noBtn = document.createElement("button");
    noBtn.type = "button";
    noBtn.className = "planned-vote-btn";
    noBtn.textContent = "Nein";
    noBtn.dataset.vote = "no";
    if (userChoice === "yes") {
      yesBtn.classList.add("active");
    }
    if (userChoice === "no") {
      noBtn.classList.add("active");
    }
    if (currentRole === "admin") {
      yesBtn.disabled = true;
      noBtn.disabled = true;
    }
    actions.appendChild(yesBtn);
    actions.appendChild(noBtn);
    card.appendChild(actions);

    const counts = document.createElement("p");
    counts.className = "planned-vote-count";
    counts.textContent = `Ja: ${dayVote.yes} · Nein: ${dayVote.no}`;
    card.appendChild(counts);

    if (currentRole === "admin") {
      const finalizeBtn = document.createElement("button");
      finalizeBtn.type = "button";
      finalizeBtn.className = "planned-finalize-btn";
      finalizeBtn.dataset.term = iso;
      finalizeBtn.textContent = "Termin fixieren";
      card.appendChild(finalizeBtn);
    }

    plannedCalendar.appendChild(card);
  });

  votes[eventId] = eventVotes;
  savePlannedVotes(votes);
}

function getStoredEventImages() {
  return loadJSON(EVENT_IMAGES_KEY, []);
}

function saveStoredEventImages(images) {
  saveJSON(EVENT_IMAGES_KEY, images);
}

function getEventDriveLink() {
  return loadJSON(EVENT_DRIVE_KEY, "");
}

function saveEventDriveLink(link) {
  saveJSON(EVENT_DRIVE_KEY, link);
}

function getUserVoteState() {
  const key = `${POLL_VOTES_KEY}:${currentUser || "anon"}`;
  return loadJSON(key, {});
}

function saveUserVoteState(state) {
  const key = `${POLL_VOTES_KEY}:${currentUser || "anon"}`;
  saveJSON(key, state);
}

function renderEventGallery() {
  if (!eventGallery || !eventDriveLink || !eventDriveGuestText) {
    return;
  }
  const driveLink = getEventDriveLink();
  eventGallery.innerHTML = "";
  if (driveLink) {
    eventDriveGuestText.textContent = "Bilderordner ist veroeffentlicht.";
    eventDriveLink.href = driveLink;
    eventDriveLink.classList.remove("hidden");
  } else {
    eventDriveGuestText.textContent = "Noch kein Drive Link zum Bilder hochladen veroeffentlicht.";
    eventDriveLink.classList.add("hidden");
  }
}

function getStoredPolls() {
  return loadJSON(EVENT_POLLS_KEY, []);
}

function saveStoredPolls(polls) {
  saveJSON(EVENT_POLLS_KEY, polls);
}

function renderPolls() {
  if (!pollList) {
    return;
  }
  const polls = getStoredPolls();
  const userVotes = getUserVoteState();
  pollList.innerHTML = "";
  if (!polls.length) {
    const empty = document.createElement("p");
    empty.textContent = "Noch keine Abstimmungen vorhanden.";
    pollList.appendChild(empty);
    return;
  }

  polls.forEach((poll) => {
    const type = poll.type || "rating";
    const card = document.createElement("div");
    card.className = "poll-card";

    const question = document.createElement("p");
    question.className = "poll-question";
    question.textContent = poll.question;
    card.appendChild(question);

    if (currentRole !== "admin") {
      const alreadyVoted = Boolean(userVotes[poll.id]);
      const optionsWrap = document.createElement("div");
      optionsWrap.className = "poll-options";

      const select = document.createElement("select");
      select.className = "poll-vote";
      poll.options.forEach((option, optionIndex) => {
        const optionNode = document.createElement("option");
        optionNode.value = String(optionIndex);
        optionNode.textContent = option.label;
        select.appendChild(optionNode);
      });
      select.disabled = alreadyVoted;
      optionsWrap.appendChild(select);

      let tasteInput = null;
      let creativityInput = null;

      if (type === "rating") {
        const ratingWrap = document.createElement("div");
        ratingWrap.className = "poll-rating";
        const tasteLabel = document.createElement("label");
        tasteLabel.textContent = "Taste (1-10)";
        tasteInput = document.createElement("input");
        tasteInput.type = "range";
        tasteInput.min = "1";
        tasteInput.max = "10";
        tasteInput.value = "7";
        tasteInput.disabled = alreadyVoted;
        const creativityLabel = document.createElement("label");
        creativityLabel.textContent = "Kreativitaet (1-10)";
        creativityInput = document.createElement("input");
        creativityInput.type = "range";
        creativityInput.min = "1";
        creativityInput.max = "10";
        creativityInput.value = "7";
        creativityInput.disabled = alreadyVoted;
        ratingWrap.appendChild(tasteLabel);
        ratingWrap.appendChild(tasteInput);
        ratingWrap.appendChild(creativityLabel);
        ratingWrap.appendChild(creativityInput);
        optionsWrap.appendChild(ratingWrap);
      }

      const submit = document.createElement("button");
      submit.className = "poll-submit";
      submit.type = "button";
      submit.textContent = alreadyVoted ? "Stimme abgegeben" : "Abstimmen";
      submit.disabled = alreadyVoted;
      submit.addEventListener("click", () => {
        const voteState = getUserVoteState();
        if (voteState[poll.id]) {
          return;
        }
        const selected = Number(select.value);
        const all = getStoredPolls();
        const targetPoll = all.find((item) => item.id === poll.id);
        if (!targetPoll || Number.isNaN(selected) || !targetPoll.options[selected]) {
          return;
        }

        const targetType = targetPoll.type || "rating";
        if (targetType === "rating") {
          const taste = tasteInput ? Number(tasteInput.value) : 7;
          const creativity = creativityInput ? Number(creativityInput.value) : 7;
          if (typeof targetPoll.options[selected].tasteTotal !== "number") {
            targetPoll.options[selected].tasteTotal = 0;
          }
          if (typeof targetPoll.options[selected].creativityTotal !== "number") {
            targetPoll.options[selected].creativityTotal = 0;
          }
          targetPoll.options[selected].tasteTotal += taste;
          targetPoll.options[selected].creativityTotal += creativity;
        }
        targetPoll.options[selected].votes += 1;
        saveStoredPolls(all);
        voteState[poll.id] = true;
        saveUserVoteState(voteState);
        renderPolls();
      });
      optionsWrap.appendChild(submit);
      card.appendChild(optionsWrap);
    }

    const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);
    const colors = ["#1f6fe5", "#4e95ff", "#7fb2ff", "#9ec5ff", "#bfd8ff", "#dcecff"];
    const parts = [];
    let cursor = 0;
    poll.options.forEach((option, idx) => {
      const pct = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
      const from = cursor;
      const to = cursor + pct;
      cursor = to;
      parts.push(`${colors[idx % colors.length]} ${from}% ${to}%`);
    });
    if (!parts.length) {
      parts.push("#dcecff 0% 100%");
    }

    const resultRow = document.createElement("div");
    resultRow.className = "poll-result-row";
    const pie = document.createElement("div");
    pie.className = "poll-pie";
    pie.style.background = `conic-gradient(${parts.join(", ")})`;
    resultRow.appendChild(pie);
    const legend = document.createElement("ul");
    legend.className = "poll-legend";
    poll.options.forEach((option) => {
      const li = document.createElement("li");
      const tasteTotal = typeof option.tasteTotal === "number" ? option.tasteTotal : 0;
      const creativityTotal = typeof option.creativityTotal === "number" ? option.creativityTotal : 0;
      const tasteAvg = option.votes > 0 ? (tasteTotal / option.votes).toFixed(1) : "-";
      const creatAvg = option.votes > 0 ? (creativityTotal / option.votes).toFixed(1) : "-";
      li.textContent = `${option.label}: ${option.votes} Stimmen · Taste ${tasteAvg} · Kreativitaet ${creatAvg}`;
      legend.appendChild(li);
    });
    resultRow.appendChild(legend);
    card.appendChild(resultRow);

    if (currentRole === "admin") {
      const adminActions = document.createElement("div");
      adminActions.className = "poll-admin-actions";
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "poll-delete-btn";
      deleteBtn.dataset.pollId = poll.id;
      deleteBtn.textContent = "Abstimmung loeschen";
      adminActions.appendChild(deleteBtn);
      card.appendChild(adminActions);
    }

    pollList.appendChild(card);
  });
}

function updateEventPage(nextEvent, showBoughtMessage) {
  if (!eventPageTitle || !eventInfoText) {
    return;
  }

  if (!nextEvent) {
    eventPageTitle.textContent = "Event";
    eventInfoText.textContent =
      "Sobald das Event losgeht, werden hier weitere Infos, Abstimmungen oder Aktionen veroeffentlicht.";
    return;
  }

  if (nextEvent.type === "planned") {
    eventPageTitle.textContent = `${nextEvent.title} (Planned)`;
    eventInfoText.textContent =
      "Dieses Planned Event hat noch kein fixes Datum. Stimme im Kalender auf der Ticketseite fuer passende Wochenendtermine ab.";
    return;
  }

  eventPageTitle.textContent = nextEvent.title;
  const date = new Date(`${nextEvent.date}T${nextEvent.time}`);
  const when = `${date.toLocaleDateString("de-DE")} ${date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit"
  })}`;

  if (showBoughtMessage) {
    eventInfoText.textContent = `Du hast dir ein Ticket gekauft fuer ${nextEvent.title}. Eventstart: ${when}. Sobald das Event losgeht, werden hier weitere Infos, Abstimmungen oder Aktionen veroeffentlicht.`;
  } else {
    eventInfoText.textContent = `Eventstart: ${when}. Sobald das Event losgeht, werden hier weitere Infos, Abstimmungen oder Aktionen veroeffentlicht.`;
  }
}

function mountTicketPurchase() {
  if (!buyTicketBtn) {
    return;
  }
  buyTicketBtn.addEventListener("click", () => {
    const next = getNextEvent();
    if (!next) {
      if (ticketStatus) {
        ticketStatus.textContent = "Aktuell kein Ticket verfuegbar.";
      }
      return;
    }
    if (next.type === "planned") {
      setPage("ticket");
      return;
    }
    const price = typeof next.price === "number" ? next.price : 7;
    saveTicketPurchase({
      eventId: getEventId(next),
      title: next.title,
      date: next.date,
      time: next.time,
      price,
      boughtAt: new Date().toISOString()
    });
    updateTicketReminder();
    updateEventPage(next, true);
    if (ticketSuccessText) {
      ticketSuccessText.textContent = `Du hast dir ein Ticket gekauft fuer das Event "${next.title}".`;
    }
    if (ticketStatus) {
      ticketStatus.textContent = `Ticket reserviert fuer ${formatEuro(price)}.`;
    }
    setPage("ticket-success");
    window.setTimeout(() => {
      setPage("event");
    }, 1600);
  });
}

function mountPlannedVoting() {
  if (!plannedCalendar || !plannedVoteStatus) {
    return;
  }
  plannedCalendar.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    if (target.classList.contains("planned-finalize-btn")) {
      if (currentRole !== "admin") {
        plannedVoteStatus.textContent = "Nur Admin kann einen Termin fixieren.";
        return;
      }
      const term = target.dataset.term || "";
      const eventData = getNextEvent();
      if (!eventData || eventData.type !== "planned" || !term) {
        return;
      }
      const time = plannedFinalizeTime && plannedFinalizeTime.value ? plannedFinalizeTime.value : "11:00";
      const events = loadEvents();
      const plannedId = getEventId(eventData);
      const nextEvents = events.map((item) => {
        if (getEventId(item) !== plannedId) {
          return item;
        }
        return {
          ...item,
          type: "regular",
          date: term,
          time
        };
      });
      saveEvents(nextEvents);
      const finalized = nextEvents.find((item) => getEventId(item) === plannedId);
      if (finalized) {
        saveFixedNotice({
          eventId: getEventId(finalized),
          title: finalized.title,
          date: finalized.date,
          time: finalized.time,
          fixedAt: new Date().toISOString()
        });
      }
      plannedVoteStatus.textContent = `Termin ${term} um ${time} als Event gesetzt. Tickets sind aktiv.`;
      renderEventList();
      updateCalendarCard();
      return;
    }

    if (!target.classList.contains("planned-vote-btn")) {
      return;
    }
    if (currentRole === "admin") {
      plannedVoteStatus.textContent = "Admin kann nur sehen oder Termin fixieren.";
      return;
    }
    const vote = target.dataset.vote;
    const termCard = target.closest(".planned-day");
    if (!vote || !termCard) {
      return;
    }
    const term = termCard.dataset.term || "";
    const eventData = getNextEvent();
    if (!eventData || eventData.type !== "planned") {
      return;
    }
    const eventId = getEventId(eventData);
    const allVotes = getPlannedVotes();
    if (!allVotes[eventId]) {
      allVotes[eventId] = {};
    }
    if (!allVotes[eventId][term]) {
      allVotes[eventId][term] = { yes: 0, no: 0, voters: {} };
    }
    const slot = allVotes[eventId][term];
    const previousVote = slot.voters[currentUser] || "";
    if (previousVote === vote) {
      plannedVoteStatus.textContent = "Stimme bleibt unveraendert.";
      return;
    }
    if (previousVote === "yes") {
      slot.yes = Math.max(0, slot.yes - 1);
    }
    if (previousVote === "no") {
      slot.no = Math.max(0, slot.no - 1);
    }
    slot.voters[currentUser] = vote;
    if (vote === "yes") {
      slot.yes += 1;
    } else {
      slot.no += 1;
    }
    savePlannedVotes(allVotes);
    plannedVoteStatus.textContent = "Stimme gespeichert.";
    renderPlannedCalendar(eventData);
  });
}

function mountCalendarWidget() {
  if (!calendarWidget) {
    return;
  }
  calendarWidget.addEventListener("click", () => {
    const next = getNextEvent();
    if (hasTicketForEvent(next)) {
      setPage("event");
      return;
    }
    setPage("ticket");
  });
}

function mountReminderActions() {
  if (fixedEventNotice && calendarWidget) {
    fixedEventNotice.addEventListener("click", () => {
      if (activePage !== "home") {
        setPage("home");
      }
      setTimeout(() => {
        calendarWidget.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
    });
  }

  if (ticketReminder && calendarWidget) {
    ticketReminder.addEventListener("click", () => {
      if (activePage !== "home") {
        setPage("home");
      }
      setTimeout(() => {
        calendarWidget.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
    });
  }

  if (goToEventBtn) {
    goToEventBtn.addEventListener("click", () => {
      setPage("event");
    });
  }
}

function getDefaultFruefrueAnswers() {
  return [
    { text: "FRueFRue ist mein Sunday-Moodboard in echt.", firstName: "Leni" },
    { text: "Hier trifft guter Coffee auf gute People, no cap.", firstName: "Mio" },
    { text: "Ein safe space fuer Brunch, Talks und neue Connections.", firstName: "Nika" }
  ];
}

function renderRandomFruefrueQuote() {
  if (!fruefrueQuote || !fruefrueQuoteAuthor) {
    return;
  }
  const answers = getFruefrueAnswers();
  const pool = answers.length ? answers : getDefaultFruefrueAnswers();
  const entry = pool[Math.floor(Math.random() * pool.length)];
  if (!entry) {
    return;
  }
  fruefrueQuote.classList.remove("swap");
  void fruefrueQuote.offsetWidth;
  fruefrueQuote.classList.add("swap");
  fruefrueQuote.textContent = `"${entry.text}"`;
  const author = entry.firstName || entry.username || "Community Voice";
  fruefrueQuoteAuthor.textContent = `- ${author}`;
}

function startFruefrueQuoteRotation() {
  renderRandomFruefrueQuote();
  if (quoteTimer) {
    clearInterval(quoteTimer);
  }
  quoteTimer = setInterval(renderRandomFruefrueQuote, 4200);
}

function mountFruefrueAnswerForm() {
  if (!fruefrueAnswerForm || !fruefrueAnswerInput || !fruefrueAnswerStatus) {
    return;
  }
  fruefrueAnswerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = fruefrueAnswerInput.value.trim();
    if (!text) {
      fruefrueAnswerStatus.textContent = "Drop bitte einen kurzen Satz.";
      return;
    }
    const answers = getFruefrueAnswers();
    answers.unshift({
      text: text.slice(0, 220),
      username: currentUser || "anon",
      firstName: currentFirstName || "Guest",
      createdAt: new Date().toISOString()
    });
    saveFruefrueAnswers(answers.slice(0, 120));
    fruefrueAnswerInput.value = "";
    fruefrueAnswerStatus.textContent = "Nice, dein Quote ist jetzt live im Feed.";
    renderRandomFruefrueQuote();
  });
}

function renderSpotifySongs() {
  if (!spotifySongList) {
    return;
  }
  const songs = getSpotifySongs();
  spotifySongList.innerHTML = "";
  if (!songs.length) {
    const empty = document.createElement("li");
    empty.textContent = "Noch keine Tracks gedroppt.";
    spotifySongList.appendChild(empty);
    return;
  }
  songs.forEach((song) => {
    const item = document.createElement("li");
    const by = song.byFirstName || song.by || "Guest";
    if (song.link) {
      const link = document.createElement("a");
      link.href = song.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `${song.title} - ${song.artist}`;
      item.appendChild(link);
      const suffix = document.createElement("span");
      suffix.textContent = ` · gedroppt von ${by}`;
      item.appendChild(suffix);
    } else {
      item.textContent = `${song.title} - ${song.artist} · gedroppt von ${by}`;
    }
    spotifySongList.appendChild(item);
  });
}

function mountSpotifySongForm() {
  if (!spotifySongForm || !spotifySongTitle || !spotifySongArtist || !spotifySongStatus) {
    return;
  }
  spotifySongForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = spotifySongTitle.value.trim();
    const artist = spotifySongArtist.value.trim();
    const link = spotifySongLink ? spotifySongLink.value.trim() : "";
    if (!title || !artist) {
      spotifySongStatus.textContent = "Bitte Songtitel und Artist eintragen.";
      return;
    }
    if (link && !link.startsWith("http")) {
      spotifySongStatus.textContent = "Spotify Link bitte als gueltige URL.";
      return;
    }
    const songs = getSpotifySongs();
    songs.unshift({
      title: title.slice(0, 80),
      artist: artist.slice(0, 80),
      link,
      by: currentUser || "anon",
      byFirstName: currentFirstName || "Guest",
      createdAt: new Date().toISOString()
    });
    saveSpotifySongs(songs.slice(0, 200));
    spotifySongForm.reset();
    spotifySongStatus.textContent = "Track added. Playlist gets hotter.";
    renderSpotifySongs();
  });
}

function renderFacts(isAnimated) {
  if (
    !factsUserCount ||
    !factsAvgAge ||
    !factsAgeRange ||
    !factsAvgLevel ||
    !factsLevelRange ||
    !factsGenderPie ||
    !factsFemaleCount ||
    !factsMaleCount ||
    !factsDiversCount
  ) {
    return;
  }

  const users = getClubUsers();
  const count = users.length;
  const female = users.filter((user) => user.gender === "weiblich").length;
  const male = users.filter((user) => user.gender === "maennlich").length;
  const divers = users.filter((user) => user.gender === "divers").length;

  const ageValues = users.map((user) => Number(user.age)).filter((value) => Number.isFinite(value) && value > 0);
  const avgAge = ageValues.length ? ageValues.reduce((sum, value) => sum + value, 0) / ageValues.length : 0;
  const minAge = ageValues.length ? Math.min(...ageValues) : 0;
  const maxAge = ageValues.length ? Math.max(...ageValues) : 0;

  const gradeIndices = users.map((user) => gradeToIndex(user.level)).filter((value) => value >= 0);
  const avgGradeIndex = gradeIndices.length
    ? Math.round(gradeIndices.reduce((sum, value) => sum + value, 0) / gradeIndices.length)
    : -1;
  const minGradeIndex = gradeIndices.length ? Math.min(...gradeIndices) : -1;
  const maxGradeIndex = gradeIndices.length ? Math.max(...gradeIndices) : -1;

  const totalGender = Math.max(1, female + male + divers);
  const femalePct = (female / totalGender) * 100;
  const malePct = (male / totalGender) * 100;
  const diversPct = (divers / totalGender) * 100;
  factsGenderPie.style.background = `conic-gradient(#ff9fcc 0% ${femalePct}%, #7fb2ff ${femalePct}% ${
    femalePct + malePct
  }%, #ffd37f ${femalePct + malePct}% 100%)`;

  if (isAnimated) {
    animateNumber(factsUserCount, count, "", 0);
    animateNumber(factsAvgAge, avgAge, "", 1);
    animateNumber(factsFemaleCount, female, "", 0);
    animateNumber(factsMaleCount, male, "", 0);
    animateNumber(factsDiversCount, divers, "", 0);
  } else {
    factsUserCount.textContent = String(count);
    factsAvgAge.textContent = avgAge ? avgAge.toFixed(1) : "0";
    factsFemaleCount.textContent = String(female);
    factsMaleCount.textContent = String(male);
    factsDiversCount.textContent = String(divers);
  }

  factsAgeRange.textContent = minAge && maxAge ? `${minAge} / ${maxAge}` : "- / -";
  factsAvgLevel.textContent = avgGradeIndex >= 0 ? indexToGrade(avgGradeIndex) : "-";
  factsLevelRange.textContent =
    minGradeIndex >= 0 && maxGradeIndex >= 0 ? `${indexToGrade(minGradeIndex)} / ${indexToGrade(maxGradeIndex)}` : "- / -";
}

function renderAdminUserList() {
  if (!adminUserList || !adminUserStatus) {
    return;
  }
  if (currentRole !== "admin") {
    adminUserList.innerHTML = "";
    adminUserStatus.textContent = "";
    return;
  }

  const users = getAllUsers();
  const entries = Object.entries(users).sort((a, b) => a[0].localeCompare(b[0], "de"));
  adminUserList.innerHTML = "";

  if (!entries.length) {
    const row = document.createElement("li");
    row.textContent = "Keine Nutzer gefunden.";
    adminUserList.appendChild(row);
    return;
  }

  entries.forEach(([username, user]) => {
    const row = document.createElement("li");
    const label = document.createElement("span");
    const firstName = user.firstName || "-";
    const lastName = user.lastName || "-";
    const age = user.age ? `${user.age}` : "-";
    const gender = user.gender || "-";
    const level = user.level || "-";
    label.textContent = `${username} · ${firstName} ${lastName} · ${user.role} · ${gender} · ${age} · ${level}`;
    row.appendChild(label);

    if (username !== "admin") {
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "admin-user-delete";
      removeBtn.dataset.username = username;
      removeBtn.textContent = "Loeschen";
      row.appendChild(removeBtn);
    }

    adminUserList.appendChild(row);
  });
}

function mountAdminUserActions() {
  if (!adminUserList) {
    return;
  }
  adminUserList.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains("admin-user-delete")) {
      return;
    }
    if (currentRole !== "admin") {
      return;
    }
    const username = (target.dataset.username || "").trim();
    if (!username || username === "admin") {
      return;
    }

    const customUsers = getRegisteredUsers();
    if (customUsers[username]) {
      delete customUsers[username];
      saveRegisteredUsers(customUsers);
    }

    const deleted = new Set(getDeletedUsers().map((name) => String(name).toLowerCase()));
    deleted.add(username.toLowerCase());
    saveDeletedUsers(Array.from(deleted));

    if (adminUserStatus) {
      adminUserStatus.textContent = `${username} wurde geloescht.`;
    }
    renderAdminUserList();
    renderFacts(false);
  });
}

function mountLogout() {
  if (!logoutBtn) {
    return;
  }
  logoutBtn.addEventListener("click", () => {
    currentUser = "";
    currentRole = "";
    currentFirstName = "";
    document.body.classList.remove("logged-in", "logging-in", "is-admin", "has-ticket");
    loginScreen.classList.remove("hidden");
    appShell.classList.add("hidden");
    if (loginForm) {
      loginForm.reset();
    }
    if (loginError) {
      loginError.textContent = "";
    }
    if (registerStatus) {
      registerStatus.textContent = "";
    }
    if (adminUserStatus) {
      adminUserStatus.textContent = "";
    }
    if (ticketReminder) {
      ticketReminder.classList.add("hidden");
    }
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
    if (quoteTimer) {
      clearInterval(quoteTimer);
      quoteTimer = null;
    }
    setPage("home");
  });
}

function mountEventUploads() {
  if (!publishDriveBtn || !eventDriveInput) {
    return;
  }

  publishDriveBtn.addEventListener("click", () => {
    if (currentRole !== "admin") {
      if (eventImageStatus) {
        eventImageStatus.textContent = "Nur Admin kann den Drive Link veroeffentlichen.";
      }
      return;
    }

    const link = eventDriveInput.value.trim();
    if (!link.startsWith("http")) {
      if (eventImageStatus) {
        eventImageStatus.textContent = "Bitte einen gueltigen Drive Link eingeben.";
      }
      return;
    }

    saveEventDriveLink(link);
    renderEventGallery();
    eventDriveInput.value = "";
    if (eventImageStatus) {
      eventImageStatus.textContent = "Drive Link veroeffentlicht.";
    }
  });
}

function mountPollCreator() {
  if (!createPollBtn || !pollQuestion || !pollOptions || !pollType) {
    return;
  }

  createPollBtn.addEventListener("click", () => {
    if (currentRole !== "admin") {
      if (pollStatus) {
        pollStatus.textContent = "Nur Admin kann Abstimmungen erstellen.";
      }
      return;
    }
    const question = pollQuestion.value.trim();
    const type = pollType.value === "choice" ? "choice" : "rating";
    const options = pollOptions.value
      .split(",")
      .map((option) => option.trim())
      .filter(Boolean);

    if (!question || options.length < 2) {
      if (pollStatus) {
        pollStatus.textContent = "Bitte Frage und mindestens 2 Optionen angeben.";
      }
      return;
    }

    const polls = getStoredPolls();
    polls.push({
      id: `${Date.now()}`,
      type,
      question,
      options: options.map((label) => ({ label, votes: 0, tasteTotal: 0, creativityTotal: 0 })),
      createdBy: currentUser || "gast"
    });
    saveStoredPolls(polls);
    pollQuestion.value = "";
    pollOptions.value = "";
    pollType.value = "rating";
    if (pollStatus) {
      pollStatus.textContent = "Abstimmung erstellt.";
    }
    renderPolls();
  });
}

function mountPollDeletion() {
  if (!pollList) {
    return;
  }
  pollList.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains("poll-delete-btn")) {
      return;
    }
    if (currentRole !== "admin") {
      return;
    }
    const pollId = target.dataset.pollId || "";
    if (!pollId) {
      return;
    }
    const polls = getStoredPolls().filter((poll) => poll.id !== pollId);
    saveStoredPolls(polls);
    if (pollStatus) {
      pollStatus.textContent = "Abstimmung geloescht.";
    }
    renderPolls();
  });
}

function renderArchiveViewer() {
  if (!archiveViewerImage || !archiveViewerLabel || !archiveCurrentEvent) {
    return;
  }
  const event = archiveEvents[archiveCurrentEvent];
  if (!event || !event.images.length) {
    return;
  }
  const index = ((archiveCurrentIndex % event.images.length) + event.images.length) % event.images.length;
  archiveCurrentIndex = index;
  archiveViewerImage.src = event.images[index];
  archiveViewerLabel.textContent = `${event.title} - Foto ${index + 1} von ${event.images.length}`;
}

function openArchiveViewer(eventKey) {
  const event = archiveEvents[eventKey];
  if (!event || !archiveViewer) {
    return;
  }
  archiveCurrentEvent = eventKey;
  archiveCurrentIndex = 0;
  renderArchiveViewer();
  archiveViewer.classList.remove("hidden");
}

function closeArchiveViewer() {
  if (!archiveViewer) {
    return;
  }
  archiveViewer.classList.add("hidden");
}

function mountArchiveViewer() {
  archivePlayButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.archiveEvent;
      openArchiveViewer(key || "");
    });
  });

  if (archiveCloseBtn) {
    archiveCloseBtn.addEventListener("click", closeArchiveViewer);
  }

  if (archivePrevBtn) {
    archivePrevBtn.addEventListener("click", () => {
      archiveCurrentIndex -= 1;
      renderArchiveViewer();
    });
  }

  if (archiveNextBtn) {
    archiveNextBtn.addEventListener("click", () => {
      archiveCurrentIndex += 1;
      renderArchiveViewer();
    });
  }

  if (archiveViewer) {
    archiveViewer.addEventListener("click", (event) => {
      if (event.target === archiveViewer) {
        closeArchiveViewer();
      }
    });
  }
}

function mountArchiveCarousel() {
  if (!archiveTrack || !archiveNextScene) {
    return;
  }
  archiveNextScene.addEventListener("click", () => {
    archiveSceneIndex = archiveSceneIndex === 0 ? 1 : 0;
    archiveTrack.classList.toggle("shifted", archiveSceneIndex === 1);
  });
}

function setPage(route) {
  const nextRoute = route || "home";
  activePage = nextRoute;

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.id === `page-${nextRoute}`);
  });

  document.querySelectorAll(".menu-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === nextRoute);
  });

  if (nextRoute === "fakten") {
    renderFacts(true);
  }
  if (nextRoute === "spotify") {
    renderSpotifySongs();
  }
}

function mountMenuLinks() {
  document.querySelectorAll("[data-route]").forEach((item) => {
    item.addEventListener("click", () => setPage(item.dataset.route));
  });
}

function startEventFilm() {
  if (!eventTrack || eventFrames.length === 0) {
    return;
  }
  if (eventTrack.children.length > 0) {
    return;
  }

  // Duplicate the sequence for seamless infinite marquee movement.
  for (let round = 0; round < 2; round += 1) {
    eventFrames.forEach((src, index) => {
      const item = document.createElement("div");
      item.className = "event-track-item";

      const img = document.createElement("img");
      img.src = src;
      img.alt = `Event Foto ${index + 1}`;
      img.loading = "eager";
      item.appendChild(img);
      eventTrack.appendChild(item);
    });
  }
}

function login(username, password) {
  const user = getAllUsers()[username];
  if (!user) {
    return null;
  }
  if (user.password !== password) {
    return null;
  }
  return { ...user, username };
}

function handleRegister() {
  if (
    !regFirstNameInput ||
    !regLastNameInput ||
    !regPasswordInput ||
    !regGenderInput ||
    !regAgeInput ||
    !regLevelInput ||
    !registerStatus
  ) {
    return;
  }
  const firstName = regFirstNameInput.value.trim();
  const lastName = regLastNameInput.value.trim();
  const password = regPasswordInput.value.trim();
  const gender = regGenderInput.value;
  const age = Number(regAgeInput.value);
  const level = regLevelInput.value;

  if (!firstName || !lastName || !password || !gender || !level) {
    registerStatus.textContent = "Bitte alle Felder ausfuellen.";
    return;
  }
  if (password.length < 4) {
    registerStatus.textContent = "Passwort muss mindestens 4 Zeichen haben.";
    return;
  }
  if (!Number.isFinite(age) || age < 10 || age > 99) {
    registerStatus.textContent = "Bitte ein gueltiges Alter angeben (10-99).";
    return;
  }
  if (gradeToIndex(level) < 0) {
    registerStatus.textContent = "Bitte einen gueltigen Klettergrad waehlen.";
    return;
  }

  const users = getAllUsers();
  const username = generateRandomUsername(users);
  const customUsers = getRegisteredUsers();
  customUsers[username] = {
    password,
    role: "gast",
    firstName,
    lastName,
    gender,
    age,
    level
  };
  saveRegisteredUsers(customUsers);

  if (usernameInput) {
    usernameInput.value = username;
  }
  if (passwordInput) {
    passwordInput.value = password;
  }
  registerStatus.textContent = `Registriert! Dein Username: ${username}`;
  if (loginError) {
    loginError.textContent = "";
  }
  regFirstNameInput.value = "";
  regLastNameInput.value = "";
  regPasswordInput.value = "";
  regGenderInput.value = "weiblich";
  regAgeInput.value = "";
  regLevelInput.value = "4a";
  renderFacts(false);
  renderAdminUserList();
}

function handleLogin() {
  if (!usernameInput || !passwordInput || !loginError || !loginScreen || !appShell) {
    return;
  }

  const username = String(usernameInput.value || "").trim().toLowerCase();
  const password = String(passwordInput.value || "").trim();

  if (!username || !password) {
    loginError.textContent = "Bitte Benutzername und Passwort eingeben.";
    return;
  }

  const user = login(username, password);
  if (user) {
    loginError.textContent = "";
    if (registerStatus) {
      registerStatus.textContent = "";
    }
    appShell.classList.remove("hidden");
    currentUser = user.username;
    currentRole = user.role;
    currentFirstName = user.firstName || user.username;
    if (welcomeUser) {
      welcomeUser.textContent = currentFirstName;
    }
    if (profileUsername) {
      profileUsername.textContent = `${user.username} (${currentFirstName} ${user.lastName || ""})`;
    }
    if (profileRole) {
      profileRole.textContent = currentRole;
    }
    setAdminVisibility(currentRole === "admin");
    renderAdminUserList();
    // Requested temporary behavior: clear ticket status on each fresh login.
    clearTicketPurchase();
    setTicketVisibility(false);
    if (ticketReminder) {
      ticketReminder.classList.add("hidden");
    }
    document.body.classList.add("logging-in");
    setPage("home");
    startEventFilm();
    renderEventList();
    updateCalendarCard();
    renderPolls();
    renderEventGallery();
    renderFacts(false);
    renderSpotifySongs();
    startFruefrueQuoteRotation();
    window.setTimeout(() => {
      document.body.classList.remove("logging-in");
      document.body.classList.add("logged-in");
      loginScreen.classList.add("hidden");
    }, 650);
    return;
  }

  loginError.textContent = "Falsche Daten. Nutze admin/gast (1234) oder registriere dich.";
}

if (loginBtn) {
  loginBtn.addEventListener("click", handleLogin);
}

if (registerBtn) {
  registerBtn.addEventListener("click", handleRegister);
}

if (passwordInput) {
  passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleLogin();
    }
  });
}

if (regPasswordInput) {
  regPasswordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleRegister();
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleLogin();
  });
}

mountMenuLinks();
normalizeLogos();
mountEventTypeToggle();
mountEventForm();
mountEventDelete();
mountTicketPurchase();
mountPlannedVoting();
mountCalendarWidget();
mountReminderActions();
mountFruefrueAnswerForm();
mountSpotifySongForm();
mountAdminUserActions();
mountLogout();
mountEventUploads();
mountPollCreator();
mountPollDeletion();
mountArchiveViewer();
mountArchiveCarousel();
renderEventGallery();
renderPolls();
renderFacts(false);
renderSpotifySongs();
