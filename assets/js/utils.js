// Shared helpers for Clear Vote.
// Everything runs in the browser. No data leaves the device unless the user
// explicitly shares a result link or image.

export const STORAGE_KEY = "clearvote.answers.v1";
export const QUIZ_VERSION = "2026-11-04.1";

export const STANCE_LABELS = {
  "2": "Strongly supports",
  "1": "Supports",
  "0": "Mixed or conditional",
  "-1": "Opposes",
  "-2": "Strongly opposes",
};

export const STANCE_SHORT = {
  "2": "+2",
  "1": "+1",
  "0": "0",
  "-1": "−1",
  "-2": "−2",
};

export const LIKERT_LABELS = [
  { value: -2, short: "Strongly disagree", face: "−−" },
  { value: -1, short: "Disagree", face: "−" },
  { value: 0, short: "Unsure", face: "0" },
  { value: 1, short: "Agree", face: "+" },
  { value: 2, short: "Strongly agree", face: "++" },
];

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function partyById(parties, id) {
  return parties.find((party) => party.id === id);
}

export function sectionById(sections, id) {
  return sections.find((section) => section.id === id);
}

export function allStatements(sections) {
  return sections.flatMap((section) =>
    section.statements.map((statement) => ({ ...statement, section }))
  );
}

export function loadAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    if (parsed.version && parsed.version !== QUIZ_VERSION) {
      // The content changed. Keep answers only for statement ids that still
      // exist; the caller can decide whether to show a notice.
    }
    return parsed.answers && typeof parsed.answers === "object"
      ? parsed.answers
      : {};
  } catch {
    return {};
  }
}

export function saveAnswers(answers) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: QUIZ_VERSION,
        updated: new Date().toISOString(),
        answers,
      })
    );
  } catch {
    // Storage can be unavailable in private mode. The survey still works
    // for the current page view.
  }
}

export function clearAnswers() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export function answeredCount(answers, sections) {
  return allStatements(sections).filter((statement) => {
    const value = answers[statement.id];
    return value !== undefined && value !== null;
  }).length;
}

export function skippedCount(answers, sections) {
  return allStatements(sections).filter(
    (statement) => answers[statement.id] === null
  ).length;
}

export function isAnswered(answers, id) {
  const value = answers[id];
  return value !== undefined && value !== null;
}

export function matchScore(userValue, partyValue) {
  // 1 = identical, 0 = opposite ends of the five-point scale.
  return 1 - Math.abs(userValue - partyValue) / 4;
}

export function computeResults(answers, sections, parties) {
  const statements = allStatements(sections);
  const userAnswered = statements.filter((statement) =>
    isAnswered(answers, statement.id)
  );

  const partyResults = parties.map((party) => {
    const scored = [];
    for (const statement of statements) {
      const userValue = answers[statement.id];
      const position = statement.positions?.[party.id];
      if (!isAnswered(answers, statement.id) || !position) continue;
      scored.push({
        statement,
        position,
        userValue,
        score: matchScore(userValue, position.stance),
      });
    }
    const total = scored.reduce((sum, item) => sum + item.score, 0);
    const percentage = scored.length ? (total / scored.length) * 100 : null;
    return {
      party,
      percentage,
      matched: scored.length,
      coverage: userAnswered.length
        ? (scored.length / userAnswered.length) * 100
        : 0,
      scored,
    };
  });

  const ranked = [...partyResults]
    .filter((result) => result.percentage !== null && result.matched >= 8)
    .sort((a, b) => {
      if (b.percentage !== a.percentage) return b.percentage - a.percentage;
      if (b.matched !== a.matched) return b.matched - a.matched;
      return a.party.name.localeCompare(b.party.name);
    });

  const top = ranked[0] || null;

  const sectionResults = sections.map((section) => {
    const rows = parties.map((party) => {
      const scored = [];
      for (const statement of section.statements) {
        const userValue = answers[statement.id];
        const position = statement.positions?.[party.id];
        if (!isAnswered(answers, statement.id) || !position) continue;
        scored.push(matchScore(userValue, position.stance));
      }
      return {
        party,
        percentage: scored.length
          ? (scored.reduce((sum, value) => sum + value, 0) / scored.length) * 100
          : null,
        matched: scored.length,
      };
    });
    return { section, rows };
  });

  return {
    statements,
    userAnswered,
    partyResults,
    ranked,
    top,
    sectionResults,
  };
}

export function topAgreements(result, limit = 3) {
  if (!result) return [];
  return [...result.scored]
    .filter((item) => item.score >= 0.75)
    .sort((a, b) => b.score - a.score || a.statement.id.localeCompare(b.statement.id))
    .slice(0, limit);
}

export function topDifferences(result, limit = 3) {
  if (!result) return [];
  return [...result.scored]
    .filter((item) => item.score <= 0.5)
    .sort((a, b) => a.score - b.score || a.statement.id.localeCompare(b.statement.id))
    .slice(0, limit);
}

export function formatPercent(value) {
  if (value === null || value === undefined || Number.isNaN(value)) return "–";
  return `${Math.round(value)}%`;
}

export function matchColour(value) {
  // 0 = warm red, 50 = neutral sand, 100 = green. Used only for the
  // "match by issue" heatmap, never for party identity.
  const clamped = Math.max(0, Math.min(100, value));
  const hue = (clamped / 100) * 135;
  return {
    bg: `hsl(${hue} 48% 88%)`,
    ink: `hsl(${hue} 55% 24%)`,
    border: `hsl(${hue} 35% 76%)`,
  };
}

export function encodeAnswers(answers, sections) {
  const statements = allStatements(sections);
  const digits = statements.map((statement) => {
    const value = answers[statement.id];
    if (value === undefined || value === null) return "5";
    return String(value + 2);
  });
  const payload = `v1.${digits.join("")}`;
  try {
    return btoa(payload).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
  } catch {
    return "";
  }
}

export function decodeAnswers(encoded, sections) {
  if (!encoded) return null;
  try {
    const base64 = encoded.replaceAll("-", "+").replaceAll("_", "/");
    const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
    const payload = atob(padded);
    if (!payload.startsWith("v1.")) return null;
    const digits = payload.slice(3);
    const statements = allStatements(sections);
    if (digits.length !== statements.length) return null;
    const answers = {};
    statements.forEach((statement, index) => {
      const digit = Number(digits[index]);
      if (digit >= 0 && digit <= 4) answers[statement.id] = digit - 2;
      else answers[statement.id] = null;
    });
    return answers;
  } catch {
    return null;
  }
}

export function resultUrl(answers, sections) {
  const encoded = encodeAnswers(answers, sections);
  const url = new URL("results.html", window.location.href);
  if (encoded) url.searchParams.set("r", encoded);
  return url.toString();
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      return true;
    } catch {
      return false;
    }
  }
}

export async function shareLink(answers, sections, title, text) {
  const url = resultUrl(answers, sections);
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return "shared";
    } catch (error) {
      if (error?.name === "AbortError") return "cancelled";
    }
  }
  const copied = await copyText(url);
  return copied ? "copied" : "failed";
}

export function downloadFile(filename, content, type = "application/json") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function debounce(fn, wait = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

export function scrollToId(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}
