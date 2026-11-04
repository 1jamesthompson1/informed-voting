import { PARTIES, SECTIONS, META } from "./survey-data.js?v=20261104";
import {
  LIKERT_LABELS,
  answeredCount,
  clearAnswers,
  escapeHtml,
  isAnswered,
  loadAnswers,
  saveAnswers,
  scrollToId,
} from "./utils.js?v=20261104";

const answers = loadAnswers();
const sectionsRoot = document.getElementById("survey-sections");
const desktopNav = document.getElementById("section-nav");
const mobileNav = document.getElementById("mobile-section-nav");
const progressText = document.getElementById("progress-text");
const progressTrack = document.getElementById("progress-track");
const progressFill = document.getElementById("progress-fill");
const resultsLink = document.getElementById("results-link");
const footerMessage = document.getElementById("footer-message");
const finishLink = document.getElementById("finish-link");

const total = SECTIONS.reduce((sum, section) => sum + section.statements.length, 0);

function statementNumber(section, index) {
  return `${section.number}.${index + 1}`;
}

function renderNav() {
  const items = SECTIONS.map(
    (section) => `
      <li>
        <a href="#section-${section.id}" data-nav-section="${section.id}">
          <span class="nav-num">${String(section.number).padStart(2, "0")}</span>
          <span>${escapeHtml(section.shortTitle)}</span>
        </a>
      </li>`
  ).join("");
  if (desktopNav) desktopNav.innerHTML = items;
  if (mobileNav) mobileNav.innerHTML = items;
}

function renderSections() {
  if (!sectionsRoot) return;
  sectionsRoot.innerHTML = SECTIONS.map((section) => {
    const statements = section.statements
      .map((statement, index) => {
        const id = statement.id;
        const value = answers[id];
        const checked = (candidate) =>
          value === candidate ? " checked" : "";
        const options = LIKERT_LABELS.map(
          (option) => `
            <label>
              <input
                type="radio"
                name="answer-${id}"
                value="${option.value}"
                data-statement="${id}"
                ${checked(option.value)}
              >
              <span class="face" aria-hidden="true">${option.face}</span>
              <span class="label-text">${escapeHtml(option.short)}</span>
            </label>`
        ).join("");

        return `
          <article class="statement-card${value !== undefined && value !== null ? " is-answered" : ""}${value === null ? " is-skipped" : ""}" id="statement-${id}" data-statement="${id}">
            <div class="statement-top">
              <span class="statement-id">${statementNumber(section, index)}</span>
              <span class="statement-status" aria-live="polite"></span>
            </div>
            <h3 class="statement-text">${escapeHtml(statement.text)}</h3>
            <p class="statement-plain">${escapeHtml(statement.plain)}</p>
            <details class="statement-debate">
              <summary>What's the debate?</summary>
              <p>${escapeHtml(statement.context)}</p>
            </details>
            <fieldset class="likert">
              <legend>Your view on: ${escapeHtml(statement.text)}</legend>
              ${options}
            </fieldset>
            <div class="skip-wrap">
              <button class="skip-btn" type="button" data-skip="${id}">Skip this statement</button>
            </div>
          </article>`;
      })
      .join("");

    return `
      <section class="survey-section" id="section-${section.id}" data-section="${section.id}">
        <div class="survey-section-head">
          <span class="survey-section-num">${String(section.number).padStart(2, "0")}</span>
          <div>
            <span class="section-kicker">Section ${section.number} of ${SECTIONS.length}</span>
            <h2>${escapeHtml(section.title)}</h2>
          </div>
        </div>
        <div class="section-context">
          <span class="context-label">The issue</span>
          <p>${escapeHtml(section.intro)}</p>
          <p><strong>What's being debated:</strong> ${escapeHtml(section.blindedHotTopic)}</p>
          <p><strong>The trade-off:</strong> ${escapeHtml(section.debate)}</p>
        </div>
        <div class="statement-list">${statements}</div>
      </section>`;
  }).join("");
}

function updateStatementCard(id) {
  const card = document.querySelector(`[data-statement="${id}"]`);
  if (!card) return;
  const value = answers[id];
  card.classList.toggle("is-answered", value !== undefined && value !== null);
  card.classList.toggle("is-skipped", value === null);
  const status = card.querySelector(".statement-status");
  if (status) {
    if (value === null) status.textContent = "Skipped";
    else if (value !== undefined) status.textContent = "Answered";
    else status.textContent = "";
  }
}

function updateNav() {
  document.querySelectorAll("[data-nav-section]").forEach((link) => {
    const section = SECTIONS.find((item) => item.id === link.dataset.navSection);
    if (!section) return;
    const complete = section.statements.every(
      (statement) => answers[statement.id] !== undefined
    );
    link.classList.toggle("is-done", complete);
  });
}

function updateProgress() {
  const answered = answeredCount(answers, SECTIONS);
  const completed = SECTIONS.reduce(
    (sum, section) =>
      sum + section.statements.filter((statement) => answers[statement.id] !== undefined).length,
    0
  );

  if (progressText) {
    progressText.textContent = `${answered} of ${total} answered`;
  }
  if (progressFill) {
    progressFill.style.width = `${(answered / total) * 100}%`;
  }
  if (progressTrack) {
    progressTrack.setAttribute("aria-valuenow", String(answered));
    progressTrack.setAttribute("aria-valuemax", String(total));
  }
  if (resultsLink) {
    resultsLink.classList.toggle("is-ready", answered > 0);
    resultsLink.setAttribute(
      "aria-label",
      answered > 0 ? "See your results" : "See your results — answer some statements first"
    );
  }
  if (footerMessage) {
    if (answered === 0) {
      footerMessage.innerHTML =
        "<strong>You can finish at any point.</strong> The results page will show how many statements each match is based on, so you can see whether a result is well supported.";
    } else if (answered === total) {
      footerMessage.innerHTML =
        `<strong>All ${total} statements answered.</strong> See your results, or go back and change any answer.`;
    } else {
      footerMessage.innerHTML =
        `<strong>${answered} of ${total} answered.</strong> You can finish now or keep going — the results page will show how complete each match is.`;
    }
  }
  updateNav();
}

function setAnswer(id, value) {
  if (value === undefined) delete answers[id];
  else answers[id] = value;
  saveAnswers(answers);
  updateStatementCard(id);
  updateProgress();
}

function bindEvents() {
  if (!sectionsRoot) return;

  sectionsRoot.addEventListener("change", (event) => {
    const input = event.target.closest('input[type="radio"][data-statement]');
    if (!input) return;
    setAnswer(input.dataset.statement, Number(input.value));
  });

  sectionsRoot.addEventListener("click", (event) => {
    const skip = event.target.closest("[data-skip]");
    if (!skip) return;
    const id = skip.dataset.skip;
    const card = document.querySelector(`[data-statement="${id}"]`);
    if (card) {
      card.querySelectorAll('input[type="radio"]').forEach((input) => {
        input.checked = false;
      });
    }
    setAnswer(id, null);
  });

  document.querySelectorAll(".mobile-jump").forEach((details) => {
    details.addEventListener("click", (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      event.preventDefault();
      details.removeAttribute("open");
      const id = link.getAttribute("href").slice(1);
      requestAnimationFrame(() => scrollToId(id));
    });
  });

  const nextButton = document.getElementById("next-unanswered");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      const next = SECTIONS.flatMap((section) => section.statements).find(
        (statement) => answers[statement.id] === undefined
      );
      if (next) {
        scrollToId(`statement-${next.id}`);
      } else {
        scrollToId("survey-footer");
      }
    });
  }

  const restartButton = document.getElementById("restart-survey");
  if (restartButton) {
    restartButton.addEventListener("click", () => {
      const ok = window.confirm(
        "Clear all your answers on this device? This cannot be undone."
      );
      if (!ok) return;
      clearAnswers();
      Object.keys(answers).forEach((key) => delete answers[key]);
      document.querySelectorAll('input[type="radio"]').forEach((input) => {
        input.checked = false;
      });
      document.querySelectorAll("[data-statement]").forEach((card) => {
        card.classList.remove("is-answered", "is-skipped");
        const status = card.querySelector(".statement-status");
        if (status) status.textContent = "";
      });
      updateProgress();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function observeSections() {
  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll("[data-nav-section]")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.dataset.section;
        links.forEach((link) => {
          link.classList.toggle("is-current", link.dataset.navSection === id);
        });
      });
    },
    { rootMargin: "-18% 0px -68% 0px", threshold: 0 }
  );
  document.querySelectorAll(".survey-section").forEach((section) => observer.observe(section));
}

function showResumeNote() {
  const answered = answeredCount(answers, SECTIONS);
  if (!answered || !sectionsRoot) return;
  const note = document.createElement("div");
  note.className = "notice notice-accent mb-3";
  note.innerHTML = `
    <span aria-hidden="true">✓</span>
    <div>
      <strong>Welcome back — ${answered} answer${answered === 1 ? "" : "s"} saved on this device.</strong>
      <p>You can pick up where you left off, change any answer, or <a href="./results.html">go straight to your results</a>. Nothing is sent to a server.</p>
    </div>`;
  sectionsRoot.before(note);
}

renderNav();
renderSections();
bindEvents();
updateProgress();
observeSections();
showResumeNote();

// The footer's finish link should carry the same answers as the results link.
if (finishLink) {
  finishLink.addEventListener("click", (event) => {
    if (answeredCount(answers, SECTIONS) === 0) {
      event.preventDefault();
      window.alert(
        "Answer at least one statement first — or open the results page to see what it shows without answers."
      );
      scrollToId("survey");
    }
  });
}

// Keep the page usable if the user has JS but storage is unavailable.
window.addEventListener("pageshow", () => {
  updateProgress();
});

// Expose a tiny debug hook for maintainers; no personal data.
window.__clearVote = { answers, total, version: META.version, parties: PARTIES.length };
