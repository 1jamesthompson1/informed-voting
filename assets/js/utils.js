// Shared helpers for Clear Vote.
// Everything runs in the browser. No data leaves the device unless the user
// explicitly shares a result link, exports a file or downloads an image.

export const STORAGE_KEY = "clearvote.answers.v1";
export const WEIGHTS_KEY = "clearvote.weights.v1";
export const QUIZ_VERSION = "2026-11-05.1";

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

export const WEIGHT_LABELS = ["Low", "Normal", "High"];

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

export function defaultWeights(sections) {
  const weights = {};
  for (const section of sections) weights[section.id] = 1;
  return weights;
}

export function normaliseWeights(weights, sections) {
  const normalised = {};
  for (const section of sections) {
    const value = Number(weights?.[section.id]);
    normalised[section.id] = [0, 1, 2].includes(value) ? value : 1;
  }
  return normalised;
}

export function loadWeights(sections) {
  try {
    const raw = localStorage.getItem(WEIGHTS_KEY);
    if (!raw) return defaultWeights(sections);
    const parsed = JSON.parse(raw);
    return normaliseWeights(parsed?.weights || parsed, sections);
  } catch {
    return defaultWeights(sections);
  }
}

export function saveWeights(weights) {
  try {
    localStorage.setItem(
      WEIGHTS_KEY,
      JSON.stringify({
        version: QUIZ_VERSION,
        updated: new Date().toISOString(),
        weights,
      })
    );
  } catch {
    // ignore
  }
}

export function clearWeights() {
  try {
    localStorage.removeItem(WEIGHTS_KEY);
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

export function computeResults(answers, sections, parties, weights = {}) {
  const normalisedWeights = normaliseWeights(weights, sections);
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
      const weight = normalisedWeights[statement.section.id] ?? 1;
      scored.push({
        statement,
        position,
        userValue,
        weight,
        score: matchScore(userValue, position.stance),
      });
    }
    const weighted = scored.filter((item) => item.weight > 0);
    const totalWeight = weighted.reduce((sum, item) => sum + item.weight, 0);
    const weightedTotal = weighted.reduce(
      (sum, item) => sum + item.score * item.weight,
      0
    );
    const percentage =
      totalWeight > 0 ? (weightedTotal / totalWeight) * 100 : null;
    return {
      party,
      percentage,
      matched: scored.length,
      weightedMatched: weighted.length,
      coverage: userAnswered.length
        ? (scored.length / userAnswered.length) * 100
        : 0,
      scored,
    };
  });

  const ranked = [...partyResults]
    .filter(
      (result) =>
        result.percentage !== null && result.weightedMatched >= 8
    )
    .sort((a, b) => {
      if (b.percentage !== a.percentage) return b.percentage - a.percentage;
      if (b.weightedMatched !== a.weightedMatched) {
        return b.weightedMatched - a.weightedMatched;
      }
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
    weights: normalisedWeights,
  };
}

export function topAgreements(result, limit = 3) {
  if (!result) return [];
  return [...result.scored]
    .filter((item) => item.score >= 0.75)
    .sort(
      (a, b) =>
        b.score - a.score || a.statement.id.localeCompare(b.statement.id)
    )
    .slice(0, limit);
}

export function topDifferences(result, limit = 3) {
  if (!result) return [];
  return [...result.scored]
    .filter((item) => item.score <= 0.5)
    .sort(
      (a, b) =>
        a.score - b.score || a.statement.id.localeCompare(b.statement.id)
    )
    .slice(0, limit);
}

export function formatPercent(value) {
  if (value === null || value === undefined || Number.isNaN(value)) return "–";
  return `${Math.round(value)}%`;
}

export function matchColour(value) {
  // 0 = warm red, 50 = neutral sand, 100 = green. Used only for the
  // "match by issue" heatmap and issue profile, never for party identity.
  const clamped = Math.max(0, Math.min(100, value));
  const hue = (clamped / 100) * 135;
  return {
    bg: `hsl(${hue} 48% 88%)`,
    ink: `hsl(${hue} 55% 24%)`,
    border: `hsl(${hue} 35% 76%)`,
  };
}

export function encodeResult(answers, weights, sections) {
  const statements = allStatements(sections);
  const answerDigits = statements
    .map((statement) => {
      const value = answers[statement.id];
      if (value === undefined || value === null) return "5";
      return String(value + 2);
    })
    .join("");
  const normalisedWeights = normaliseWeights(weights, sections);
  const weightDigits = sections
    .map((section) => String(normalisedWeights[section.id]))
    .join("");
  const payload = `v2.${answerDigits}.${weightDigits}`;
  try {
    return btoa(payload)
      .replaceAll("+", "-")
      .replaceAll("/", "_")
      .replaceAll("=", "");
  } catch {
    return "";
  }
}

export function decodeResult(encoded, sections) {
  if (!encoded) return null;
  try {
    const base64 = encoded.replaceAll("-", "+").replaceAll("_", "/");
    const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
    const payload = atob(padded);
    const statements = allStatements(sections);
    if (payload.startsWith("v1.")) {
      const digits = payload.slice(3);
      // v1 links were created before the AI section was added. Map the
      // digits to the statements that existed at the time; newer statements
      // remain unanswered rather than invalidating the link.
      if (digits.length > statements.length) return null;
      const answers = {};
      statements.forEach((statement, index) => {
        if (index >= digits.length) return;
        const digit = Number(digits[index]);
        answers[statement.id] =
          digit >= 0 && digit <= 4 ? digit - 2 : null;
      });
      return { answers, weights: defaultWeights(sections), version: "v1" };
    }
    if (payload.startsWith("v2.")) {
      const parts = payload.split(".");
      if (parts.length !== 3) return null;
      const answerDigits = parts[1];
      const weightDigits = parts[2];
      if (answerDigits.length !== statements.length) return null;
      if (weightDigits.length !== sections.length) return null;
      const answers = {};
      statements.forEach((statement, index) => {
        const digit = Number(answerDigits[index]);
        answers[statement.id] =
          digit >= 0 && digit <= 4 ? digit - 2 : null;
      });
      const weights = {};
      sections.forEach((section, index) => {
        const digit = Number(weightDigits[index]);
        weights[section.id] = [0, 1, 2].includes(digit) ? digit : 1;
      });
      return { answers, weights, version: "v2" };
    }
    return null;
  } catch {
    return null;
  }
}

// Backwards-compatible wrappers for older links.
export function encodeAnswers(answers, sections) {
  return encodeResult(answers, defaultWeights(sections), sections);
}

export function decodeAnswers(encoded, sections) {
  const result = decodeResult(encoded, sections);
  return result ? result.answers : null;
}

export function resultUrl(answers, weights, sections) {
  const encoded = encodeResult(answers, weights, sections);
  const url = new URL("results.html", window.location.href);
  if (encoded) url.searchParams.set("r", encoded);
  return url.toString();
}

export function makeExportPayload(answers, weights, results, sections, meta) {
  const ranking = (results?.ranked || []).map((result) => ({
    party: result.party.id,
    partyName: result.party.name,
    alignment: Math.round(result.percentage),
    matched: result.matched,
    weightedMatched: result.weightedMatched,
    coverage: Math.round(result.coverage),
  }));
  return {
    app: "Clear Vote",
    format: "clearvote-result",
    version: meta?.version || QUIZ_VERSION,
    exported: new Date().toISOString(),
    election: meta?.electionName || "2026 New Zealand general election",
    answers,
    weights: normaliseWeights(weights, sections),
    summary: {
      top: results?.top?.party.id || null,
      topName: results?.top?.party.name || null,
      alignment: results?.top ? Math.round(results.top.percentage) : null,
      answered: answeredCount(answers, sections),
      totalStatements: allStatements(sections).length,
      ranking,
    },
  };
}

export function parseResultFile(text, sections) {
  const data = JSON.parse(text);
  if (!data || typeof data !== "object") {
    throw new Error("The file is not a Clear Vote result.");
  }
  if (!data.answers || typeof data.answers !== "object") {
    throw new Error("The file does not contain answers.");
  }
  const statementIds = new Set(
    allStatements(sections).map((statement) => statement.id)
  );
  const sectionIds = new Set(sections.map((section) => section.id));
  const answers = {};
  for (const [id, value] of Object.entries(data.answers)) {
    if (!statementIds.has(id)) continue;
    if (value === null) {
      answers[id] = null;
    } else if ([-2, -1, 0, 1, 2].includes(Number(value))) {
      answers[id] = Number(value);
    }
  }
  if (!Object.keys(answers).length) {
    throw new Error("The file does not contain any recognisable answers.");
  }
  const weights = normaliseWeights(
    data.weights && typeof data.weights === "object" ? data.weights : {},
    sections
  );
  // Keep only known section ids; normaliseWeights handles the rest.
  for (const key of Object.keys(weights)) {
    if (!sectionIds.has(key)) delete weights[key];
  }
  return { answers, weights, exported: data.exported || null, version: data.version || null };
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

export async function shareLink(answers, weights, sections, title, text) {
  const url = resultUrl(answers, weights, sections);
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
