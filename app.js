const TEST_USER = {
  username: "gast",
  password: "1234"
};

const eventFrames = [
  "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=80"
];

const loginScreen = document.getElementById("loginScreen");
const appShell = document.getElementById("appShell");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const eventFilm = document.getElementById("eventFilm");

let activePage = "home";
let frameIndex = 0;

function setPage(route) {
  const nextRoute = route || "home";
  activePage = nextRoute;

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.id === `page-${nextRoute}`);
  });

  document.querySelectorAll(".menu-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === nextRoute);
  });
}

function mountMenuLinks() {
  document.querySelectorAll("[data-route]").forEach((item) => {
    item.addEventListener("click", () => setPage(item.dataset.route));
  });
}

function startEventFilm() {
  if (!eventFilm) {
    return;
  }

  eventFilm.style.backgroundImage = `url(${eventFrames[frameIndex]})`;

  window.setInterval(() => {
    frameIndex = (frameIndex + 1) % eventFrames.length;
    eventFilm.style.backgroundImage = `url(${eventFrames[frameIndex]})`;
  }, 3000);
}

function login(username, password) {
  return username === TEST_USER.username && password === TEST_USER.password;
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const username = String(formData.get("username") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "").trim();

    if (login(username, password)) {
      loginError.textContent = "";
      loginScreen.classList.add("hidden");
      appShell.classList.remove("hidden");
      setPage("home");
      startEventFilm();
      return;
    }

    loginError.textContent = "Falsche Daten. Nutze gast / 1234";
  });
}

mountMenuLinks();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.error("Service worker failed:", error);
    });
  });
}
