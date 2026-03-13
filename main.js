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

const cockogottMedia = [
  { type: "image", src: "./assets/events/IMG_0108.HEIC.png" },
  { type: "image", src: "./assets/events/IMG_0109.HEIC.png" },
  { type: "image", src: "./assets/events/IMG_0110.HEIC.png" },
  { type: "image", src: "./assets/events/IMG_0111.HEIC.png" },
  { type: "image", src: "./assets/events/IMG_0112.HEIC.png" },
  { type: "image", src: "./assets/events/IMG_0113.HEIC.png" }
];

const fruefrue2Media = [
  { type: "image", src: "./assets/events/fruefrue-2-desktop/0784a84a-744a-4cd9-b4a2-9f45d97871e0.jpeg" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/0b774d4c-d096-4149-bfd5-12c452508d97.jpeg" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/1b65b49e-694c-405b-83d1-e9af58e385e0.jpeg" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/3158cfe7-d120-446f-8c1b-8c76b63adb3a.jpeg" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/6F9688C8-3C6D-4442-8398-251199777751.jpeg" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/88f7ecdc-9c7d-4452-9b73-a065fa69b5cc.jpeg" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/IMG_6408.jpeg" },
  { type: "video", src: "./assets/events/fruefrue-2-desktop/IMG_6409.mp4" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/IMG_6410.jpeg" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/a87634f8-3593-4a35-a304-b99c88da7240.jpeg" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/c90c6be0-c114-4cab-abc5-cb5edb34b8f8.jpeg" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/d267c78d-7003-498c-94d1-21b7ae831579.jpeg" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/f2299564-6cc6-4060-973d-4a3fadb1655c.jpeg" },
  { type: "image", src: "./assets/events/fruefrue-2-desktop/fc8eb039-3034-47d2-897a-c3e5c96f1b2a.jpeg" }
];

const papaMedia = [
  { type: "image", src: "./assets/events/papa/IMG_0536.jpeg" },
  { type: "image", src: "./assets/events/papa/IMG_0538.jpeg" },
  { type: "image", src: "./assets/events/papa/IMG_0540.jpeg" },
  { type: "image", src: "./assets/events/papa/PXL_20251123_185250077.jpg" },
  { type: "image", src: "./assets/events/papa/PXL_20251123_184646509.jpg" },
  { type: "image", src: "./assets/events/papa/DSC00202.JPG" },
  { type: "image", src: "./assets/events/papa/DSC00203.JPG" },
  { type: "image", src: "./assets/events/papa/DSC00215.JPG" }
];

const homeFeedMedia = [...fruefrue2Media, ...papaMedia, ...cockogottMedia];

const loginScreen = document.getElementById("loginScreen");
const loginVideoShell = document.querySelector(".login-video-shell");
const appShell = document.getElementById("appShell");
const loginForm = document.getElementById("loginForm");
const loginLoopVideo = document.getElementById("loginLoopVideo");
const loginRevealVideo = document.getElementById("loginRevealVideo");
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
const programTimeline = document.getElementById("programTimeline");
const programTitle = document.getElementById("programTitle");
const programSlot = document.getElementById("programSlot");
const programLane = document.getElementById("programLane");
const programDescription = document.getElementById("programDescription");
const createProgramBtn = document.getElementById("createProgramBtn");
const programStatus = document.getElementById("programStatus");
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
const archiveViewerVideo = document.getElementById("archiveViewerVideo");
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
const spotifyAuthBtn = document.getElementById("spotifyAuthBtn");
const spotifyLogoutBtn = document.getElementById("spotifyLogoutBtn");
const spotifyAuthStatus = document.getElementById("spotifyAuthStatus");
const spotifySongTitle = document.getElementById("spotifySongTitle");
const spotifySongArtist = document.getElementById("spotifySongArtist");
const spotifySongLink = document.getElementById("spotifySongLink");
const spotifySongStatus = document.getElementById("spotifySongStatus");
const spotifySongList = document.getElementById("spotifySongList");

let activePage = "home";
let loginRevealActive = false;
let loginRevealTimeout = null;
const STORAGE_KEY = "fruefrue-events-v1";
const TICKET_STORAGE_KEY = "fruefrue-ticket-v1";
const EVENT_IMAGES_KEY = "fruefrue-event-images-v1";
const EVENT_POLLS_KEY = "fruefrue-event-polls-v1";
const EVENT_DRIVE_KEY = "fruefrue-event-drive-v1";
const EVENT_PROGRAM_KEY = "fruefrue-event-program-v1";
const POLL_VOTES_KEY = "fruefrue-poll-votes-v1";
const PLANNED_VOTES_KEY = "fruefrue-planned-votes-v1";
const USERS_STORAGE_KEY = "fruefrue-users-v1";
const DELETED_USERS_KEY = "fruefrue-deleted-users-v1";
const FIXED_NOTICE_KEY = "fruefrue-fixed-notice-v1";
const FRUEFRUE_ANSWERS_KEY = "fruefrue-answers-v1";
const SPOTIFY_SONGS_KEY = "fruefrue-spotify-songs-v1";
const SPOTIFY_AUTH_KEY = "fruefrue-spotify-auth-v1";
const SPOTIFY_PKCE_VERIFIER_KEY = "fruefrue-spotify-pkce-verifier-v1";
const SPOTIFY_PKCE_STATE_KEY = "fruefrue-spotify-pkce-state-v1";
const SPOTIFY_REDIRECT_ROUTE_KEY = "fruefrue-spotify-route-v1";
const SPOTIFY_CLIENT_ID = "dd17d9878f3544dda2b1286c652365cf";
const SPOTIFY_PLAYLIST_ID = "1ZMxyXU9lfbgHl8x9vv4uE";
const SPOTIFY_PLAYLIST_URL =
  "https://open.spotify.com/playlist/1ZMxyXU9lfbgHl8x9vv4uE?si=99a80bd12c0c46cd&pt=20a83edc59fd41cffb8f517c39114d32";
const WEBSITE_URL = "https://konste459.github.io/FrueFrue/";
const LOGIN_LOOP_CONTINUE_END = 5;
const LOGIN_REVEAL_START = 0.75;
const LOGIN_REVEAL_END = 7;
const SPOTIFY_SCOPES = ["playlist-modify-public", "playlist-modify-private"];
let currentUser = "";
let currentRole = "";
let currentFirstName = "";
let countdownTimer = null;
let archiveCurrentEvent = "";
let archiveCurrentIndex = 0;
let archiveSceneIndex = 0;
let quoteTimer = null;
let loginContinueActive = false;
let loginContinueNeedsWrap = false;

const archiveEvents = {
  "fruefrue-1": {
    title: "FrueFrue 1.0",
    media: []
  },
  "fruefrue-2": {
    title: "FrueFrue 2.0",
    media: [...fruefrue2Media]
  },
  "papa-x-fruefrue": {
    title: "PaPa x FrueFrue",
    media: [...papaMedia]
  },
  "cockogott-x-fruefrue": {
    title: "CockOGott x FrueFrue",
    media: [...cockogottMedia]
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

function getSpotifyAuth() {
  return loadJSON(SPOTIFY_AUTH_KEY, null);
}

function saveSpotifyAuth(auth) {
  saveJSON(SPOTIFY_AUTH_KEY, auth);
}

function clearSpotifyAuth() {
  localStorage.removeItem(SPOTIFY_AUTH_KEY);
}

function getSpotifyRedirectUri() {
  return `${window.location.origin}${window.location.pathname}`;
}

function randomString(length = 64) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let value = "";
  const random = crypto.getRandomValues(new Uint8Array(length));
  for (let i = 0; i < length; i += 1) {
    value += chars[random[i] % chars.length];
  }
  return value;
}

async function sha256(value) {
  const buffer = new TextEncoder().encode(value);
  return crypto.subtle.digest("SHA-256", buffer);
}

function base64UrlEncode(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function parseSpotifyTrackId(link) {
  if (!link) {
    return "";
  }
  const uriMatch = link.match(/^spotify:track:([a-zA-Z0-9]+)$/);
  if (uriMatch) {
    return uriMatch[1];
  }
  const urlMatch = link.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/);
  return urlMatch ? urlMatch[1] : "";
}

function spotifyHasValidToken() {
  const auth = getSpotifyAuth();
  return Boolean(auth && auth.access_token && auth.expires_at && Date.now() < auth.expires_at - 60_000);
}

function updateSpotifyAuthUi() {
  const connected = spotifyHasValidToken();
  if (spotifyAuthBtn) {
    spotifyAuthBtn.classList.toggle("hidden", connected);
  }
  if (spotifyLogoutBtn) {
    spotifyLogoutBtn.classList.toggle("hidden", !connected);
  }
  if (spotifyAuthStatus) {
    spotifyAuthStatus.textContent = connected
      ? "Spotify ist verbunden. Neue Songs gehen direkt in die echte Playlist."
      : "Verbinde Spotify, damit Songs wirklich in der Playlist landen.";
  }
}

async function refreshSpotifyAccessToken(refreshToken) {
  const body = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID,
    grant_type: "refresh_token",
    refresh_token: refreshToken
  });
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error_description || data.error || "Spotify Refresh fehlgeschlagen.");
  }
  const previous = getSpotifyAuth();
  const nextAuth = {
    access_token: data.access_token,
    refresh_token: data.refresh_token || (previous ? previous.refresh_token : ""),
    expires_at: Date.now() + Number(data.expires_in || 3600) * 1000
  };
  saveSpotifyAuth(nextAuth);
  updateSpotifyAuthUi();
  return nextAuth.access_token;
}

async function ensureSpotifyAccessToken() {
  const auth = getSpotifyAuth();
  if (!auth) {
    throw new Error("Spotify ist nicht verbunden.");
  }
  if (spotifyHasValidToken()) {
    return auth.access_token;
  }
  if (!auth.refresh_token) {
    clearSpotifyAuth();
    updateSpotifyAuthUi();
    throw new Error("Spotify Verbindung ist abgelaufen. Bitte neu verbinden.");
  }
  return refreshSpotifyAccessToken(auth.refresh_token);
}

async function spotifyApiFetch(url, options = {}) {
  const accessToken = await ensureSpotifyAccessToken();
  const headers = new Headers(options.headers || {});
  headers.set("Authorization", `Bearer ${accessToken}`);
  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  let response = await fetch(url, { ...options, headers });
  if (response.status === 401) {
    const auth = getSpotifyAuth();
    if (!auth || !auth.refresh_token) {
      clearSpotifyAuth();
      updateSpotifyAuthUi();
      throw new Error("Spotify Verbindung ist abgelaufen. Bitte neu verbinden.");
    }
    const refreshed = await refreshSpotifyAccessToken(auth.refresh_token);
    headers.set("Authorization", `Bearer ${refreshed}`);
    response = await fetch(url, { ...options, headers });
  }

  if (!response.ok) {
    let message = "Spotify Anfrage fehlgeschlagen.";
    try {
      const error = await response.json();
      message = error.error?.message || error.error_description || message;
    } catch {
      // ignore malformed error response
    }
    throw new Error(message);
  }

  if (response.status === 204) {
    return null;
  }
  return response.json();
}

async function exchangeSpotifyCode(code, verifier) {
  const body = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID,
    grant_type: "authorization_code",
    code,
    redirect_uri: getSpotifyRedirectUri(),
    code_verifier: verifier
  });

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error_description || data.error || "Spotify Login fehlgeschlagen.");
  }
  saveSpotifyAuth({
    access_token: data.access_token,
    refresh_token: data.refresh_token || "",
    expires_at: Date.now() + Number(data.expires_in || 3600) * 1000
  });
  updateSpotifyAuthUi();
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

function getStoredPrograms() {
  return loadJSON(EVENT_PROGRAM_KEY, {});
}

function saveStoredPrograms(programs) {
  saveJSON(EVENT_PROGRAM_KEY, programs);
}

function getProgramItemsForEvent(eventId) {
  const all = getStoredPrograms();
  return Array.isArray(all[eventId]) ? all[eventId] : [];
}

function getActiveEventForPage() {
  const nextEvent = getNextEvent();
  if (nextEvent && hasTicketForEvent(nextEvent)) {
    return nextEvent;
  }
  return nextEvent;
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
  const polls = loadJSON(EVENT_POLLS_KEY, []);
  return polls.map((poll) => ({
    ...poll,
    options: (poll.options || []).map((option, index) => ({
      id: option.id || `opt-${index}`,
      label: option.label || `Option ${index + 1}`,
      votes: typeof option.votes === "number" ? option.votes : 0,
      tasteTotal: typeof option.tasteTotal === "number" ? option.tasteTotal : 0,
      creativityTotal: typeof option.creativityTotal === "number" ? option.creativityTotal : 0,
      yesVotes: typeof option.yesVotes === "number" ? option.yesVotes : 0,
      noVotes: typeof option.noVotes === "number" ? option.noVotes : 0
    }))
  }));
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

    const optionsWrap = document.createElement("div");
    optionsWrap.className = "poll-option-grid";

    poll.options.forEach((option) => {
      const optionKey = option.id;
      const optionCard = document.createElement("div");
      optionCard.className = "poll-option-card";

      const optionTitle = document.createElement("p");
      optionTitle.className = "poll-option-title";
      optionTitle.textContent = option.label;
      optionCard.appendChild(optionTitle);

      const previousVote = userVotes[poll.id]?.[optionKey];

      if (type === "rating" && currentRole !== "admin") {
        const ratingWrap = document.createElement("div");
        ratingWrap.className = "poll-rating";

        const tasteLabel = document.createElement("label");
        tasteLabel.textContent = "Taste";
        const tasteInput = document.createElement("input");
        tasteInput.type = "range";
        tasteInput.min = "1";
        tasteInput.max = "10";
        tasteInput.value = String(previousVote?.taste || 7);

        const creativityLabel = document.createElement("label");
        creativityLabel.textContent = "Kreativitaet";
        const creativityInput = document.createElement("input");
        creativityInput.type = "range";
        creativityInput.min = "1";
        creativityInput.max = "10";
        creativityInput.value = String(previousVote?.creativity || 7);

        ratingWrap.appendChild(tasteLabel);
        ratingWrap.appendChild(tasteInput);
        ratingWrap.appendChild(creativityLabel);
        ratingWrap.appendChild(creativityInput);
        optionCard.appendChild(ratingWrap);

        const saveBtn = document.createElement("button");
        saveBtn.className = "poll-submit";
        saveBtn.type = "button";
        saveBtn.textContent = previousVote ? "Bewertung updaten" : "Bewerten";
        saveBtn.addEventListener("click", () => {
          const allPolls = getStoredPolls();
          const targetPoll = allPolls.find((item) => item.id === poll.id);
          const targetOption = targetPoll?.options.find((item) => item.id === optionKey);
          if (!targetPoll || !targetOption) {
            return;
          }
          const voteState = getUserVoteState();
          const pollState = voteState[poll.id] || {};
          const oldVote = pollState[optionKey];
          const taste = Number(tasteInput.value);
          const creativity = Number(creativityInput.value);

          if (oldVote) {
            targetOption.tasteTotal = Math.max(0, targetOption.tasteTotal - (oldVote.taste || 0));
            targetOption.creativityTotal = Math.max(0, targetOption.creativityTotal - (oldVote.creativity || 0));
          } else {
            targetOption.votes += 1;
          }

          targetOption.tasteTotal += taste;
          targetOption.creativityTotal += creativity;
          pollState[optionKey] = { type: "rating", taste, creativity };
          voteState[poll.id] = pollState;
          saveStoredPolls(allPolls);
          saveUserVoteState(voteState);
          renderPolls();
        });
        optionCard.appendChild(saveBtn);
      }

      if (type === "choice" && currentRole !== "admin") {
        const choiceWrap = document.createElement("div");
        choiceWrap.className = "poll-choice-actions";
        const yesBtn = document.createElement("button");
        yesBtn.type = "button";
        yesBtn.className = "poll-choice-btn";
        yesBtn.textContent = "Ja";
        const noBtn = document.createElement("button");
        noBtn.type = "button";
        noBtn.className = "poll-choice-btn";
        noBtn.textContent = "Nein";

        if (previousVote?.choice === "yes") {
          yesBtn.classList.add("active");
        }
        if (previousVote?.choice === "no") {
          noBtn.classList.add("active");
        }

        const applyChoice = (choice) => {
          const allPolls = getStoredPolls();
          const targetPoll = allPolls.find((item) => item.id === poll.id);
          const targetOption = targetPoll?.options.find((item) => item.id === optionKey);
          if (!targetPoll || !targetOption) {
            return;
          }
          const voteState = getUserVoteState();
          const pollState = voteState[poll.id] || {};
          const oldVote = pollState[optionKey]?.choice || "";
          if (oldVote === choice) {
            return;
          }
          if (oldVote === "yes") {
            targetOption.yesVotes = Math.max(0, targetOption.yesVotes - 1);
          }
          if (oldVote === "no") {
            targetOption.noVotes = Math.max(0, targetOption.noVotes - 1);
          }
          if (!oldVote) {
            targetOption.votes += 1;
          }
          if (choice === "yes") {
            targetOption.yesVotes += 1;
          } else {
            targetOption.noVotes += 1;
          }
          pollState[optionKey] = { type: "choice", choice };
          voteState[poll.id] = pollState;
          saveStoredPolls(allPolls);
          saveUserVoteState(voteState);
          renderPolls();
        };

        yesBtn.addEventListener("click", () => applyChoice("yes"));
        noBtn.addEventListener("click", () => applyChoice("no"));
        choiceWrap.appendChild(yesBtn);
        choiceWrap.appendChild(noBtn);
        optionCard.appendChild(choiceWrap);
      }

      const resultRow = document.createElement("div");
      resultRow.className = "poll-result-row";
      const pie = document.createElement("div");
      pie.className = "poll-pie";
      if (type === "choice") {
        const totalChoiceVotes = option.yesVotes + option.noVotes;
        const yesPct = totalChoiceVotes > 0 ? (option.yesVotes / totalChoiceVotes) * 100 : 50;
        pie.style.background = `conic-gradient(#1f6fe5 0 ${yesPct}%, #ffd8d8 ${yesPct}% 100%)`;
      } else {
        const tasteAvg = option.votes > 0 ? option.tasteTotal / option.votes : 0;
        const creativityAvg = option.votes > 0 ? option.creativityTotal / option.votes : 0;
        const tastePct = (tasteAvg / 10) * 100;
        const combined = Math.min(100, tastePct + (creativityAvg / 10) * 48);
        pie.style.background = `conic-gradient(#1f6fe5 0 ${tastePct}%, #7fb2ff ${tastePct}% ${combined}%, #dcecff ${combined}% 100%)`;
      }
      resultRow.appendChild(pie);

      const statWrap = document.createElement("div");
      statWrap.className = "poll-option-stats";
      if (type === "choice") {
        statWrap.innerHTML = `<p>Ja: <strong>${option.yesVotes}</strong></p><p>Nein: <strong>${option.noVotes}</strong></p><p>Teilnahmen: <strong>${option.votes}</strong></p>`;
      } else {
        const tasteAvg = option.votes > 0 ? (option.tasteTotal / option.votes).toFixed(1) : "-";
        const creativityAvg = option.votes > 0 ? (option.creativityTotal / option.votes).toFixed(1) : "-";
        statWrap.innerHTML = `<p>Votes: <strong>${option.votes}</strong></p><p>Taste: <strong>${tasteAvg}</strong></p><p>Kreativitaet: <strong>${creativityAvg}</strong></p>`;
      }
      resultRow.appendChild(statWrap);
      optionCard.appendChild(resultRow);
      optionsWrap.appendChild(optionCard);
    });

    card.appendChild(optionsWrap);

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

function renderProgramTimeline(eventData) {
  if (!programTimeline) {
    return;
  }
  programTimeline.innerHTML = "";
  if (!eventData) {
    const empty = document.createElement("p");
    empty.className = "event-status";
    empty.textContent = "Sobald ein Event aktiv ist, droppt hier der Ablauf.";
    programTimeline.appendChild(empty);
    return;
  }

  const eventId = getEventId(eventData);
  const items = getProgramItemsForEvent(eventId).sort((a, b) => {
    if ((a.sortOrder || 0) !== (b.sortOrder || 0)) {
      return (a.sortOrder || 0) - (b.sortOrder || 0);
    }
    return (a.lane || 1) - (b.lane || 1);
  });

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "event-status";
    empty.textContent = "Noch kein Programm veroeffentlicht.";
    programTimeline.appendChild(empty);
    return;
  }

  const grouped = items.reduce((acc, item) => {
    const slotKey = item.slot || "Open Flow";
    if (!acc[slotKey]) {
      acc[slotKey] = [];
    }
    acc[slotKey].push(item);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([slot, slotItems], slotIndex, entries) => {
    const row = document.createElement("div");
    row.className = "program-row";

    const slotNode = document.createElement("div");
    slotNode.className = "program-slot";
    slotNode.textContent = slot;
    row.appendChild(slotNode);

    const laneWrap = document.createElement("div");
    laneWrap.className = "program-lanes";
    slotItems
      .sort((a, b) => (a.lane || 1) - (b.lane || 1))
      .forEach((item) => {
        const blob = document.createElement("button");
        blob.type = "button";
        blob.className = "program-blob";
        blob.dataset.programId = item.id;
        blob.innerHTML = `<span class="program-blob-title">${item.title}</span><span class="program-blob-lane">Spur ${
          item.lane || 1
        }</span>`;

        const detail = document.createElement("div");
        detail.className = "program-detail hidden";
        detail.innerHTML = `<p>${item.description}</p>`;

        blob.addEventListener("click", () => {
          const isOpen = !detail.classList.contains("hidden");
          laneWrap.querySelectorAll(".program-detail").forEach((node) => node.classList.add("hidden"));
          laneWrap.querySelectorAll(".program-blob").forEach((node) => node.classList.remove("active"));
          if (!isOpen) {
            detail.classList.remove("hidden");
            blob.classList.add("active");
          }
        });

        const stack = document.createElement("div");
        stack.className = "program-blob-stack";
        stack.appendChild(blob);
        stack.appendChild(detail);

        if (currentRole === "admin") {
          const deleteBtn = document.createElement("button");
          deleteBtn.type = "button";
          deleteBtn.className = "program-delete-btn";
          deleteBtn.dataset.programId = item.id;
          deleteBtn.dataset.eventId = eventId;
          deleteBtn.textContent = "Loeschen";
          stack.appendChild(deleteBtn);
        }

        laneWrap.appendChild(stack);
      });
    row.appendChild(laneWrap);

    if (slotIndex < entries.length - 1) {
      row.classList.add("with-connector");
    }

    programTimeline.appendChild(row);
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
    renderProgramTimeline(null);
    return;
  }

  if (nextEvent.type === "planned") {
    eventPageTitle.textContent = `${nextEvent.title} (Planned)`;
    eventInfoText.textContent =
      "Dieses Planned Event hat noch kein fixes Datum. Stimme im Kalender auf der Ticketseite fuer passende Wochenendtermine ab.";
    renderProgramTimeline(nextEvent);
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
  renderProgramTimeline(nextEvent);
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

function mountProgramCreator() {
  if (!createProgramBtn || !programTitle || !programSlot || !programLane || !programDescription) {
    return;
  }
  createProgramBtn.addEventListener("click", () => {
    if (currentRole !== "admin") {
      if (programStatus) {
        programStatus.textContent = "Nur Admin kann Programmpunkte erstellen.";
      }
      return;
    }
    const eventData = getActiveEventForPage();
    if (!eventData || eventData.type === "planned") {
      if (programStatus) {
        programStatus.textContent = "Programmpunkte gehen erst bei einem fixen Event.";
      }
      return;
    }

    const title = programTitle.value.trim();
    const slot = programSlot.value.trim() || "Open Flow";
    const lane = Number(programLane.value || 1);
    const description = programDescription.value.trim();
    if (!title || !description) {
      if (programStatus) {
        programStatus.textContent = "Bitte Titel und Kurzbeschreibung angeben.";
      }
      return;
    }

    const eventId = getEventId(eventData);
    const allPrograms = getStoredPrograms();
    const items = Array.isArray(allPrograms[eventId]) ? allPrograms[eventId] : [];
    const sameSlotCount = items.filter((item) => (item.slot || "Open Flow") === slot).length;
    items.push({
      id: `prg-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      title,
      slot,
      lane,
      description,
      sortOrder: sameSlotCount === 0 ? items.length : items.findIndex((item) => (item.slot || "Open Flow") === slot),
      createdBy: currentUser || "admin"
    });
    allPrograms[eventId] = items;
    saveStoredPrograms(allPrograms);

    programTitle.value = "";
    programSlot.value = "";
    programLane.value = "1";
    programDescription.value = "";
    if (programStatus) {
      programStatus.textContent = "Programmpunkt erstellt.";
    }
    renderProgramTimeline(eventData);
  });
}

function mountProgramDeletion() {
  if (!programTimeline) {
    return;
  }
  programTimeline.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains("program-delete-btn")) {
      return;
    }
    if (currentRole !== "admin") {
      return;
    }
    const eventId = target.dataset.eventId || "";
    const programId = target.dataset.programId || "";
    if (!eventId || !programId) {
      return;
    }
    const allPrograms = getStoredPrograms();
    const items = (allPrograms[eventId] || []).filter((item) => item.id !== programId);
    allPrograms[eventId] = items;
    saveStoredPrograms(allPrograms);
    if (programStatus) {
      programStatus.textContent = "Programmpunkt geloescht.";
    }
    renderProgramTimeline(getActiveEventForPage());
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

async function resolveSpotifyTrack(title, artist, link) {
  const directTrackId = parseSpotifyTrackId(link);
  if (directTrackId) {
    return {
      uri: `spotify:track:${directTrackId}`,
      external_url: `https://open.spotify.com/track/${directTrackId}`
    };
  }

  const query = [`track:${title}`];
  if (artist) {
    query.push(`artist:${artist}`);
  }

  const data = await spotifyApiFetch(
    `https://api.spotify.com/v1/search?type=track&limit=1&q=${encodeURIComponent(query.join(" "))}`
  );
  const track = data && data.tracks && Array.isArray(data.tracks.items) ? data.tracks.items[0] : null;
  if (!track) {
    throw new Error("Kein passender Spotify-Track gefunden.");
  }
  return {
    uri: track.uri,
    external_url: track.external_urls?.spotify || ""
  };
}

async function addSpotifyTrackToPlaylist(trackUri) {
  try {
    await spotifyApiFetch(`https://api.spotify.com/v1/playlists/${SPOTIFY_PLAYLIST_ID}/tracks`, {
      method: "POST",
      body: JSON.stringify({ uris: [trackUri] })
    });
  } catch (error) {
    if (String(error.message || "").includes("Insufficient client scope")) {
      throw new Error("Spotify Rechte fehlen. Bitte Verbindung neu aufbauen.");
    }
    if (String(error.message || "").includes("Forbidden")) {
      throw new Error("Dieser Spotify-Account darf die FRueFRue Playlist nicht bearbeiten.");
    }
    throw error;
  }
}

async function startSpotifyAuth() {
  const verifier = randomString(64);
  const state = randomString(24);
  localStorage.setItem(SPOTIFY_PKCE_VERIFIER_KEY, verifier);
  localStorage.setItem(SPOTIFY_PKCE_STATE_KEY, state);
  localStorage.setItem(SPOTIFY_REDIRECT_ROUTE_KEY, activePage || "spotify");

  const challenge = base64UrlEncode(await sha256(verifier));
  const params = new URLSearchParams({
    response_type: "code",
    client_id: SPOTIFY_CLIENT_ID,
    scope: SPOTIFY_SCOPES.join(" "),
    redirect_uri: getSpotifyRedirectUri(),
    state,
    code_challenge_method: "S256",
    code_challenge: challenge
  });
  window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

async function handleSpotifyAuthCallback() {
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  if (!code && !error) {
    updateSpotifyAuthUi();
    return;
  }

  const expectedState = localStorage.getItem(SPOTIFY_PKCE_STATE_KEY) || "";
  const verifier = localStorage.getItem(SPOTIFY_PKCE_VERIFIER_KEY) || "";
  const route = localStorage.getItem(SPOTIFY_REDIRECT_ROUTE_KEY) || "spotify";

  url.searchParams.delete("code");
  url.searchParams.delete("state");
  url.searchParams.delete("error");
  window.history.replaceState({}, document.title, url.toString());

  if (error) {
    if (spotifyAuthStatus) {
      spotifyAuthStatus.textContent = "Spotify Login wurde abgebrochen oder verweigert.";
    }
    updateSpotifyAuthUi();
    setPage(route);
    return;
  }

  if (!verifier || !expectedState || state !== expectedState) {
    if (spotifyAuthStatus) {
      spotifyAuthStatus.textContent = "Spotify Login konnte nicht verifiziert werden. Bitte neu verbinden.";
    }
    updateSpotifyAuthUi();
    setPage("spotify");
    return;
  }

  try {
    await exchangeSpotifyCode(code, verifier);
    if (spotifyAuthStatus) {
      spotifyAuthStatus.textContent = "Spotify verbunden. Songs landen jetzt direkt in der echten Playlist.";
    }
    setPage(route);
  } catch (callbackError) {
    clearSpotifyAuth();
    if (spotifyAuthStatus) {
      spotifyAuthStatus.textContent = callbackError.message || "Spotify Login fehlgeschlagen.";
    }
  } finally {
    localStorage.removeItem(SPOTIFY_PKCE_VERIFIER_KEY);
    localStorage.removeItem(SPOTIFY_PKCE_STATE_KEY);
    localStorage.removeItem(SPOTIFY_REDIRECT_ROUTE_KEY);
    updateSpotifyAuthUi();
  }
}

function mountSpotifyAuth() {
  if (spotifyAuthBtn) {
    spotifyAuthBtn.addEventListener("click", () => {
      startSpotifyAuth().catch((error) => {
        if (spotifyAuthStatus) {
          spotifyAuthStatus.textContent = error.message || "Spotify Verbindung konnte nicht gestartet werden.";
        }
      });
    });
  }
  if (spotifyLogoutBtn) {
    spotifyLogoutBtn.addEventListener("click", () => {
      clearSpotifyAuth();
      updateSpotifyAuthUi();
      if (spotifyAuthStatus) {
        spotifyAuthStatus.textContent = "Spotify wurde getrennt.";
      }
    });
  }
  updateSpotifyAuthUi();
}

function mountSpotifySongForm() {
  if (!spotifySongForm || !spotifySongTitle || !spotifySongArtist || !spotifySongStatus) {
    return;
  }
  spotifySongForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = spotifySongTitle.value.trim();
    const artist = spotifySongArtist.value.trim();
    const link = spotifySongLink ? spotifySongLink.value.trim() : "";
    if (!link && (!title || !artist)) {
      spotifySongStatus.textContent = "Bitte Spotify Link oder Songtitel plus Artist eintragen.";
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
      link: link,
      by: currentUser || "anon",
      byFirstName: currentFirstName || "Guest",
      createdAt: new Date().toISOString()
    });
    saveSpotifySongs(songs.slice(0, 200));
    spotifySongForm.reset();
    spotifySongStatus.textContent = "Songwunsch gespeichert. Ueber den Invite-Link koennt ihr ihn direkt in Spotify reinziehen.";
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
    resetLoginVideoState();
    startLoginVideoLoop();
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
      options: options.map((label, index) => ({
        id: `opt-${Date.now()}-${index}`,
        label,
        votes: 0,
        tasteTotal: 0,
        creativityTotal: 0,
        yesVotes: 0,
        noVotes: 0
      })),
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
  if (!archiveViewerImage || !archiveViewerVideo || !archiveViewerLabel || !archiveCurrentEvent) {
    return;
  }
  const event = archiveEvents[archiveCurrentEvent];
  const mediaList = event?.media || [];
  if (!event || !mediaList.length) {
    archiveViewerImage.classList.add("hidden");
    archiveViewerImage.removeAttribute("src");
    archiveViewerVideo.classList.add("hidden");
    archiveViewerVideo.pause();
    archiveViewerVideo.removeAttribute("src");
    archiveViewerVideo.load();
    archiveViewerLabel.textContent = `${event?.title || "Event"} - Noch keine Medien hinterlegt.`;
    return;
  }
  const index = ((archiveCurrentIndex % mediaList.length) + mediaList.length) % mediaList.length;
  archiveCurrentIndex = index;
  const media = mediaList[index];
  if (media.type === "video") {
    archiveViewerImage.classList.add("hidden");
    archiveViewerImage.removeAttribute("src");
    archiveViewerVideo.pause();
    archiveViewerVideo.classList.remove("hidden");
    archiveViewerVideo.src = media.src;
    archiveViewerVideo.load();
    archiveViewerVideo.currentTime = 0;
    archiveViewerVideo.play().catch(() => {});
    archiveViewerLabel.textContent = `${event.title} - Video ${index + 1} von ${mediaList.length}`;
  } else {
    archiveViewerVideo.classList.add("hidden");
    archiveViewerVideo.pause();
    archiveViewerVideo.removeAttribute("src");
    archiveViewerVideo.load();
    archiveViewerImage.classList.remove("hidden");
    archiveViewerImage.src = media.src;
    archiveViewerLabel.textContent = `${event.title} - Bild ${index + 1} von ${mediaList.length}`;
  }
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
  if (!archiveViewer || !archiveViewerVideo) {
    return;
  }
  archiveViewerVideo.pause();
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
  if (nextRoute === "event") {
    updateEventPage(getActiveEventForPage(), false);
    renderEventGallery();
    renderPolls();
  }
}

function mountMenuLinks() {
  document.querySelectorAll("[data-route]").forEach((item) => {
    item.addEventListener("click", () => setPage(item.dataset.route));
  });
}

function shuffleMedia(items) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function startEventFilm() {
  if (!eventTrack || homeFeedMedia.length === 0) {
    return;
  }
  if (eventTrack.children.length > 0) {
    return;
  }
  const randomizedFeed = shuffleMedia(homeFeedMedia);

  // Duplicate the sequence for seamless infinite marquee movement.
  for (let round = 0; round < 2; round += 1) {
    randomizedFeed.forEach((media, index) => {
      const item = document.createElement("div");
      item.className = "event-track-item";

      if (media.type === "video") {
        const video = document.createElement("video");
        video.src = media.src;
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;
        video.preload = "metadata";
        configureMediaSnippet(video, 5);
        item.appendChild(video);
      } else {
        const img = document.createElement("img");
        img.src = media.src;
        img.alt = `Event Medium ${index + 1}`;
        img.loading = "eager";
        item.appendChild(img);
      }
      eventTrack.appendChild(item);
    });
  }
}

function configureMediaSnippet(video, lengthSeconds) {
  const onLoaded = () => {
    const duration = Number(video.duration) || 0;
    const usableLength = Math.max(1.5, Math.min(lengthSeconds, duration || lengthSeconds));
    const maxStart = Math.max(0.05, duration - usableLength - 0.15);
    const clipStart = maxStart > 0.05 ? Math.random() * maxStart : 0.05;
    const clipEnd = duration > 0 ? Math.min(duration - 0.05, clipStart + usableLength) : clipStart + usableLength;
    video.dataset.clipStart = String(clipStart);
    video.dataset.clipEnd = String(Math.max(clipStart + 0.3, clipEnd));
    video.currentTime = clipStart;
    video.play().catch(() => {});
  };

  video.addEventListener("loadedmetadata", onLoaded, { once: true });
  video.addEventListener("timeupdate", () => {
    const clipEnd = Number(video.dataset.clipEnd || "0");
    const clipStart = Number(video.dataset.clipStart || "0.05");
    if (clipEnd > 0 && video.currentTime >= clipEnd) {
      video.currentTime = clipStart;
      video.play().catch(() => {});
    }
  });
}

function resetLoginVideoState() {
  loginRevealActive = false;
  loginContinueActive = false;
  loginContinueNeedsWrap = false;
  if (loginRevealTimeout) {
    window.clearTimeout(loginRevealTimeout);
    loginRevealTimeout = null;
  }
  if (!loginLoopVideo || !loginRevealVideo) {
    return;
  }
  loginLoopVideo.pause();
  loginRevealVideo.pause();
  loginLoopVideo.loop = true;
  if (loginVideoShell) {
    loginVideoShell.classList.remove("is-switching");
  }
  loginLoopVideo.classList.remove("hidden-video");
  loginRevealVideo.classList.add("hidden-video");
  try {
    loginLoopVideo.currentTime = 0;
    loginRevealVideo.currentTime = LOGIN_REVEAL_START;
  } catch (error) {
    // Metadata may not be ready yet.
  }
}

function finalizeLoginTransition() {
  if (!loginScreen || !appShell) {
    return;
  }
  loginRevealActive = false;
  loginContinueActive = false;
  if (loginRevealTimeout) {
    window.clearTimeout(loginRevealTimeout);
    loginRevealTimeout = null;
  }
  if (loginRevealVideo) {
    loginRevealVideo.pause();
  }
  document.body.classList.remove("logging-in");
  document.body.classList.add("logged-in");
  loginScreen.classList.add("hidden");
}

function startLoginVideoLoop() {
  if (!loginLoopVideo) {
    return;
  }
  const beginLoop = () => {
    loginLoopVideo.loop = true;
    loginLoopVideo.classList.remove("hidden-video");
    try {
      loginLoopVideo.currentTime = 0;
    } catch (error) {
      // Ignore initial seek issues.
    }
    loginLoopVideo.play().catch(() => {});
  };

  if (loginLoopVideo.readyState >= 1) {
    beginLoop();
    return;
  }

  loginLoopVideo.addEventListener("loadedmetadata", beginLoop, { once: true });
}

function playLoginRevealVideo() {
  if (!loginLoopVideo || !loginRevealVideo) {
    finalizeLoginTransition();
    return;
  }

  loginRevealActive = true;
  loginContinueActive = true;
  loginContinueNeedsWrap = loginLoopVideo.currentTime > LOGIN_LOOP_CONTINUE_END;
  loginLoopVideo.loop = false;
  loginLoopVideo.play().catch(() => {
    startRevealSegment();
  });
}

function startRevealSegment() {
  if (!loginLoopVideo || !loginRevealVideo) {
    finalizeLoginTransition();
    return;
  }
  loginContinueActive = false;
  loginContinueNeedsWrap = false;
  loginRevealVideo.classList.remove("hidden-video");
  if (loginVideoShell) {
    loginVideoShell.classList.add("is-switching");
  }

  const playReveal = () => {
    try {
      loginRevealVideo.currentTime = LOGIN_REVEAL_START;
    } catch (error) {
      // Ignore seek issue.
    }
    loginRevealVideo.play().catch(() => {
      finalizeLoginTransition();
    });
    window.setTimeout(() => {
      loginLoopVideo.pause();
      loginLoopVideo.classList.add("hidden-video");
    }, 180);
    const revealMs = Math.max(300, (LOGIN_REVEAL_END - LOGIN_REVEAL_START) * 1000);
    loginRevealTimeout = window.setTimeout(finalizeLoginTransition, revealMs);
  };

  if (loginRevealVideo.readyState >= 1) {
    playReveal();
    return;
  }

  loginRevealVideo.addEventListener("loadedmetadata", playReveal, { once: true });
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
    playLoginRevealVideo();
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

if (loginLoopVideo) {
  loginLoopVideo.addEventListener("timeupdate", () => {
    if (!loginContinueActive) {
      return;
    }
    if (loginContinueNeedsWrap) {
      return;
    }
    if (loginLoopVideo.currentTime >= LOGIN_LOOP_CONTINUE_END) {
      startRevealSegment();
    }
  });

  loginLoopVideo.addEventListener("ended", () => {
    if (!loginContinueActive) {
      return;
    }
    if (loginContinueNeedsWrap) {
      loginContinueNeedsWrap = false;
      try {
        loginLoopVideo.currentTime = 0;
      } catch (error) {
        finalizeLoginTransition();
        return;
      }
      loginLoopVideo.play().catch(() => {
        finalizeLoginTransition();
      });
    }
  });
}

if (loginRevealVideo) {
  loginRevealVideo.addEventListener("timeupdate", () => {
    if (!loginRevealActive) {
      return;
    }
    if (loginRevealVideo.currentTime >= LOGIN_REVEAL_END) {
      finalizeLoginTransition();
    }
  });

  loginRevealVideo.addEventListener("ended", () => {
    if (loginRevealActive) {
      finalizeLoginTransition();
    }
  });
}

mountMenuLinks();
normalizeLogos();
mountEventTypeToggle();
mountEventForm();
mountEventDelete();
mountTicketPurchase();
mountPlannedVoting();
mountProgramCreator();
mountProgramDeletion();
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
resetLoginVideoState();
startLoginVideoLoop();
