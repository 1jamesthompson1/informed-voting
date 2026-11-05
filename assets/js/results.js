import { PARTIES, SECTIONS, META } from "./survey-data.js?v=20261105";
import {
  LIKERT_LABELS,
  STANCE_LABELS,
  WEIGHT_LABELS,
  answeredCount,
  computeResults,
  copyText,
  debounce,
  decodeResult,
  downloadFile,
  escapeHtml,
  formatPercent,
  loadAnswers,
  loadWeights,
  makeExportPayload,
  matchColour,
  parseResultFile,
  partyById,
  resultUrl,
  saveAnswers,
  saveWeights,
  shareLink,
  topAgreements,
  topDifferences,
} from "./utils.js?v=20261105";

const root = document.getElementById("results-root");
const params = new URLSearchParams(window.location.search);
const sharedCode = params.get("r");
const sharedResult = sharedCode ? decodeResult(sharedCode, SECTIONS) : null;
let sharedMode = Boolean(sharedCode);
let importNotice = "";

let answers = sharedResult?.answers || loadAnswers();
let weights = sharedResult?.weights || loadWeights(SECTIONS);

const partyOrder = ["national", "labour", "green", "act", "nzfirst", "tpm", "top"];
const partyName = (id) => partyById(PARTIES, id)?.name || id;
const partyColour = (id) => partyById(PARTIES, id)?.colour || "#0b6b5e";
const userLabel = (value) =>
  LIKERT_LABELS.find((option) => option.value === value)?.short || "No answer";

function partyStyle(party) {
  return `style="--party-colour:${party.colour}"`;
}

function pct(value) {
  return value === null || value === undefined ? "–" : `${Math.round(value)}%`;
}

function allWeightsZero() {
  return SECTIONS.every((section) => (weights[section.id] ?? 1) === 0);
}

function emptyState(message = "") {
  root.innerHTML = `
    <section class="results-hero">
      <div class="wrap">
        <p class="eyebrow">Your results</p>
        <h1>No answers yet.</h1>
        <p class="lede">${message || "Answer the 48 policy statements first, then come back here to see which parties match you — and where you differ."}</p>
        <div class="btn-row mt-3">
          <a class="btn" href="./index.html#survey">Take the survey <span aria-hidden="true">→</span></a>
          <a class="btn btn-ghost" href="./audit.html">Browse the policy matrix</a>
        </div>
        <div class="card card-pad mt-3">
          <h2 style="font-size:1.3rem">Already saved a result?</h2>
          <p class="small muted">Load a Clear Vote results file to restore your answers and your issue weights.</p>
          <label class="btn btn-soft" for="import-result-empty">Load saved result</label>
          <input id="import-result-empty" class="sr-only" type="file" accept="application/json,.json">
          <p class="small muted mt-2 mb-0" id="import-status-empty" role="status" aria-live="polite"></p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="notice">
          <span aria-hidden="true">◉</span>
          <div>
            <strong>Your answers stay on your device.</strong>
            <p>Clear Vote does not have a server, an account or a database. Answers and weights are saved in your browser’s local storage. A shared result link contains only your answers and weights — no name, email or location.</p>
          </div>
        </div>
      </div>
    </section>`;
  bindImport("import-result-empty", "import-status-empty");
}

function renderHero(results) {
  const top = results.top;
  const answered = results.userAnswered.length;
  const total = META.totalStatements;

  if (allWeightsZero()) {
    return `
      <section class="results-hero">
        <div class="wrap">
          <p class="eyebrow">Your results</p>
          <h1>All issues are set to low importance.</h1>
          <p class="lede">You answered ${answered} of ${total} statements, but every issue is weighted “Low”. Set at least one area to “Normal” or “High” below to see an overall match.</p>
        </div>
      </section>`;
  }

  if (!top) {
    return `
      <section class="results-hero">
        <div class="wrap">
          <p class="eyebrow">Your results</p>
          <h1>Not enough answers for a reliable match.</h1>
          <p class="lede">You answered ${answered} of ${total} statements. A party needs at least eight published positions among your weighted answers before we show a score. Keep going, or lower the weight on areas where you have fewer answers.</p>
          <div class="btn-row mt-3">
            <a class="btn" href="./index.html#survey">Keep answering <span aria-hidden="true">→</span></a>
            <a class="btn btn-ghost" href="./audit.html">Browse the policy matrix</a>
          </div>
        </div>
      </section>`;
  }

  return `
    <section class="results-hero">
      <div class="wrap">
        ${sharedMode ? `
          <div class="notice mb-3 no-print">
            <span aria-hidden="true">↗</span>
            <div>
              <strong>You're viewing a shared result.</strong>
              <p>This link contains someone else's answers and weights. <a href="./index.html#survey">Take the survey yourself</a> to get your own result.</p>
            </div>
          </div>` : ""}
        ${importNotice ? `
          <div class="notice notice-accent mb-3 no-print">
            <span aria-hidden="true">✓</span>
            <div>
              <strong>${escapeHtml(importNotice)}</strong>
              <p>You can keep weighting the issues, change your answers, or download the updated result.</p>
            </div>
          </div>` : ""}
        <div class="result-top">
          <div>
            <p class="eyebrow">Your closest match</p>
            <h1>${escapeHtml(top.party.name)}</h1>
            <p class="lede">${escapeHtml(top.party.fullName)} · led by ${escapeHtml(top.party.leader)}</p>
            <p class="small muted mt-1">Based on ${top.matched} statements where both you and ${escapeHtml(top.party.name)} have a position; ${top.weightedMatched} count towards your weighted score. You answered ${answered} of ${total} statements.</p>
          </div>
          <div class="result-score">
            <span class="big">${Math.round(top.percentage)}%</span>
            <span class="small">weighted alignment</span>
          </div>
        </div>
        <div class="match-tags">
          ${top.weightedMatched < 12 ? `<span class="tag tag-diff">Limited weighted positions — treat with care</span>` : ""}
          ${top.coverage < 50 ? `<span class="tag tag-diff">Covers ${Math.round(top.coverage)}% of your answers</span>` : `<span class="tag tag-ok">Covers ${Math.round(top.coverage)}% of your answers</span>`}
          <span class="tag">Weighted by your priorities</span>
          <span class="tag">Not a vote recommendation</span>
        </div>
      </div>
    </section>`;
}

function renderWeightPanel() {
  const rows = SECTIONS.map((section) => {
    const value = weights[section.id] ?? 1;
    return `
      <div class="weight-row">
        <label for="weight-${section.id}">${escapeHtml(section.shortTitle)}</label>
        <input
          id="weight-${section.id}"
          type="range"
          min="0"
          max="2"
          step="1"
          value="${value}"
          data-weight="${section.id}"
          aria-describedby="weight-help-${section.id}"
        >
        <output for="weight-${section.id}" data-weight-output="${section.id}">${WEIGHT_LABELS[value]}</output>
        <span class="sr-only" id="weight-help-${section.id}">Importance of ${escapeHtml(section.title)}: ${WEIGHT_LABELS[value]}</span>
      </div>`;
  }).join("");

  return `
    <section class="section-tight no-print" id="weight-panel">
      <div class="wrap">
        <div class="card card-pad">
          <div class="weight-head">
            <div>
              <p class="eyebrow">What matters most to you?</p>
              <h2>Weight the issues. Watch the ranking change.</h2>
              <p class="small muted">Every issue starts at “Normal”. Move a slider to “Low” if it matters less to you, or “High” if it matters more. Your answers do not change; only the overall score does.</p>
            </div>
            <button class="btn btn-small btn-ghost" type="button" id="reset-weights">Reset to equal</button>
          </div>
          <div class="weight-grid">${rows}</div>
          <p class="small muted mt-2 mb-0">The section-by-section chart below is not weighted — it shows your raw match in each area. The weights change the overall ranking and the bloc comparison. Your weights are saved on this device and included in shared links and downloaded results.</p>
        </div>
      </div>
    </section>`;
}

function renderRanked(results) {
  const sorted = [...results.partyResults].sort((a, b) => {
    if (a.percentage === null && b.percentage === null) return a.party.name.localeCompare(b.party.name);
    if (a.percentage === null) return 1;
    if (b.percentage === null) return -1;
    return b.percentage - a.percentage;
  });

  const bars = sorted.map((result) => {
    const value = result.percentage;
    const width = value === null ? 0 : Math.max(2, value);
    const coverageText = value === null
      ? "not enough weighted positions"
      : `${result.weightedMatched} weighted statement${result.weightedMatched === 1 ? "" : "s"}`;
    return `
      <div class="party-bar" ${partyStyle(result.party)}>
        <div class="party-bar-name">
          <span class="party-dot"></span>
          ${escapeHtml(result.party.name)}
        </div>
        <div class="party-bar-track" role="img" aria-label="${escapeHtml(result.party.name)}: ${value === null ? "not enough weighted positions" : `${Math.round(value)} percent weighted alignment`}">
          <div class="party-bar-fill" style="width:${width}%"></div>
        </div>
        <div class="party-bar-value">
          ${pct(value)}
          <span class="party-bar-coverage">${escapeHtml(coverageText)}</span>
        </div>
      </div>`;
  }).join("");

  return `
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">The full ranking</p>
          <h2>How every party compares with your answers.</h2>
          <p>Each score is the weighted average match across the statements where both you and the party have a position. It is not a measure of how “good” a party is — only how close its published 2026 positions are to your answers and priorities.</p>
        </div>
        <div class="card card-pad">
          <div class="party-bars">${bars}</div>
          <p class="small muted mt-3 mb-0">“Not enough weighted positions” means the party did not publish a clear 2026 position on enough of the statements you answered and weighted above zero. It is not a score of zero. A party needs at least eight weighted positions to be ranked.</p>
        </div>
      </div>
    </section>`;
}

function renderTopMatch(results) {
  const top = results.top;
  if (!top) return "";

  const sectionScores = results.sectionResults
    .map((row) => {
      const match = row.rows.find((item) => item.party.id === top.party.id);
      return match && match.percentage !== null
        ? { section: row.section, percentage: match.percentage, matched: match.matched }
        : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.percentage - a.percentage);

  const strongest = sectionScores.slice(0, 3);
  const weakest = [...sectionScores].reverse().slice(0, 3);
  const agreements = topAgreements(top, 3);
  const differences = topDifferences(top, 3);

  const tags = (items, type) =>
    items
      .map(
        (item) =>
          `<span class="tag ${type === "ok" ? "tag-ok" : "tag-diff"}">${escapeHtml(item.section.shortTitle)} ${Math.round(item.percentage)}%</span>`
      )
      .join("");

  const agreementList = agreements.length
    ? agreements
        .map(
          (item) => `
            <div class="agreement-item">
              <div class="statement-mini">${escapeHtml(item.statement.text)}</div>
              <div class="meta">${escapeHtml(top.party.name)}: ${escapeHtml(STANCE_LABELS[String(item.position.stance)])} · You: ${escapeHtml(userLabel(item.userValue))} · ${Math.round(item.score * 100)}% match</div>
            </div>`
        )
        .join("")
    : `<p class="small muted">No strong agreements were found in the statements where both you and ${escapeHtml(top.party.name)} have a position.</p>`;

  const differenceList = differences.length
    ? differences
        .map(
          (item) => `
            <div class="agreement-item">
              <div class="statement-mini">${escapeHtml(item.statement.text)}</div>
              <div class="meta">${escapeHtml(top.party.name)}: ${escapeHtml(STANCE_LABELS[String(item.position.stance)])} · You: ${escapeHtml(userLabel(item.userValue))} · ${Math.round(item.score * 100)}% match</div>
            </div>`
        )
        .join("")
    : `<p class="small muted">No strong disagreements were found in the statements where both you and ${escapeHtml(top.party.name)} have a position.</p>`;

  return `
    <section class="section">
      <div class="wrap">
        <div class="top-match-card" ${partyStyle(top.party)}>
          <p class="eyebrow">Your closest party</p>
          <h2>${escapeHtml(top.party.name)}</h2>
          <p class="lede">${escapeHtml(top.party.blurb)}</p>
          <div class="grid-2 mt-3">
            <div>
              <h3 class="h4">Where you line up</h3>
              <div class="match-tags">${tags(strongest, "ok")}</div>
            </div>
            <div>
              <h3 class="h4">Where you differ most</h3>
              <div class="match-tags">${tags(weakest, "diff")}</div>
            </div>
          </div>
          <p class="small muted mt-3 mb-0">These are the sections with the highest and lowest raw match for ${escapeHtml(top.party.name)}. They are a quick guide, not a substitute for the individual statements below. Your issue weights affect the overall ranking, not these section scores.</p>
        </div>

        <div class="grid-2 mt-3">
          <div>
            <h3>Where you agree most</h3>
            <div class="agreement-list">${agreementList}</div>
          </div>
          <div>
            <h3>Where you differ most</h3>
            <div class="agreement-list">${differenceList}</div>
          </div>
        </div>
      </div>
    </section>`;
}

function renderIssueProfile(results) {
  const top = results.top;
  if (!top) return "";

  const rows = results.sectionResults
    .map((row) => {
      const match = row.rows.find((item) => item.party.id === top.party.id);
      if (!match || match.percentage === null) return null;
      return {
        section: row.section,
        percentage: match.percentage,
        matched: match.matched,
        weight: weights[row.section.id] ?? 1,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.percentage - a.percentage);

  if (!rows.length) return "";

  const bars = rows
    .map((row) => {
      const colour = matchColour(row.percentage);
      const weightLabel = WEIGHT_LABELS[row.weight];
      return `
        <div class="issue-row">
          <span class="issue-name">${escapeHtml(row.section.shortTitle)}</span>
          <div class="issue-track" title="${escapeHtml(row.section.title)}: ${Math.round(row.percentage)}% match">
            <div class="issue-fill" style="width:${Math.max(2, row.percentage)}%;background:${colour.bg};border:1px solid ${colour.border}"></div>
          </div>
          <span class="issue-value">${Math.round(row.percentage)}%</span>
          <span class="issue-weight" title="Your importance weight for this area">${escapeHtml(weightLabel)}</span>
        </div>`;
    })
    .join("");

  return `
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">Your issue profile</p>
          <h2>Where you align — and where you don’t.</h2>
          <p>This is your raw match with <strong>${escapeHtml(top.party.name)}</strong> in each area, sorted from strongest to weakest. The badge on the right is the importance you gave that area; it changes the overall ranking, not the bar itself.</p>
        </div>
        <div class="card card-pad">
          <div class="issue-profile">${bars}</div>
          <div class="heatmap-legend mt-2">
            <span><span class="legend-swatch" style="--swatch:hsl(0 48% 88%)"></span> Less aligned</span>
            <span><span class="legend-swatch" style="--swatch:hsl(68 48% 88%)"></span> Mixed</span>
            <span><span class="legend-swatch" style="--swatch:hsl(135 48% 88%)"></span> More aligned</span>
          </div>
        </div>
      </div>
    </section>`;
}

function renderHeatmap(results) {
  const header = PARTIES.map(
    (party) => `<th scope="col">${escapeHtml(party.name)}</th>`
  ).join("");

  const rows = results.sectionResults
    .map((row) => {
      const cells = row.rows
        .map((item) => {
          if (item.percentage === null) {
            return `<td><span class="hm" style="background:var(--surface-2);color:var(--muted)">–</span></td>`;
          }
          const colour = matchColour(item.percentage);
          return `<td><span class="hm" style="--hm-bg:${colour.bg};--hm-ink:${colour.ink};border:1px solid ${colour.border}" title="${escapeHtml(item.party.name)} — ${Math.round(item.percentage)}% match, based on ${item.matched} statement${item.matched === 1 ? "" : "s"}">${Math.round(item.percentage)}%</span></td>`;
        })
        .join("");
      return `<tr><th scope="row">${escapeHtml(row.section.shortTitle)}</th>${cells}</tr>`;
    })
    .join("");

  return `
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">Issue by issue</p>
          <h2>Every party, every area.</h2>
          <p>Each cell is the raw average match in that section, before your weights. A dash means there were not enough published positions from that party in that section. Scroll sideways on a phone.</p>
        </div>
        <div class="heatmap-wrap">
          <table class="heatmap">
            <thead><tr><th scope="col">Section</th>${header}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div class="heatmap-legend">
          <span><span class="legend-swatch" style="--swatch:hsl(0 48% 88%)"></span> Less aligned</span>
          <span><span class="legend-swatch" style="--swatch:hsl(68 48% 88%)"></span> Mixed</span>
          <span><span class="legend-swatch" style="--swatch:hsl(135 48% 88%)"></span> More aligned</span>
        </div>
      </div>
    </section>`;
}

function blocSummary(results, ids) {
  const members = ids
    .map((id) => results.partyResults.find((result) => result.party.id === id))
    .filter((result) => result && result.percentage !== null);
  const seats = members.reduce(
    (sum, result) => sum + (META.polling.seats[result.party.id] || 0),
    0
  );
  const weighted = members.reduce(
    (sum, result) =>
      sum + result.percentage * (META.polling.seats[result.party.id] || 0),
    0
  );
  const percentage = seats ? weighted / seats : null;
  const best = [...members].sort((a, b) => b.percentage - a.percentage)[0] || null;
  return { members, seats, percentage, best };
}

function renderVoteImpact(results) {
  const polling = META.polling;
  const top = results.top;
  const left = blocSummary(results, polling.blocs.left);
  const right = blocSummary(results, polling.blocs.right);
  const leftLeads = left.percentage !== null && right.percentage !== null
    ? left.percentage >= right.percentage
    : null;
  const topBloc = top
    ? polling.blocs.left.includes(top.party.id)
      ? "left"
      : polling.blocs.right.includes(top.party.id)
        ? "right"
        : "unaligned"
    : null;
  const closerBloc = leftLeads ? "left" : "right";
  const tension = top
    ? topBloc === "unaligned"
      ? `Your closest party, <strong>${escapeHtml(top.party.name)}</strong>, is unaligned, so the bloc comparison is a separate choice.`
      : topBloc !== closerBloc
        ? `Your closest party, <strong>${escapeHtml(top.party.name)}</strong>, is in the <strong>${topBloc}</strong> bloc, but your answers are closer to the <strong>${closerBloc}</strong> bloc overall. This is exactly the trade-off the three lenses are meant to show.`
        : ""
    : "";

  const seatOrder = ["labour", "green", "tpm", "top", "national", "act", "nzfirst"];
  const seatDots = seatOrder.flatMap((id) => {
    const seats = polling.seats[id] || 0;
    const party = partyById(PARTIES, id);
    return Array.from({ length: seats }, (_, index) => {
      const highlight = top && top.party.id === id ? " is-highlight" : "";
      return `<span class="seat-dot${highlight}" style="--party-colour:${party.colour}" title="${escapeHtml(party.name)}${highlight ? " — your closest party" : ""}"></span>`;
    });
  }).join("");

  const legend = seatOrder
    .map((id) => {
      const party = partyById(PARTIES, id);
      const seats = polling.seats[id] || 0;
      const vote = polling.votes[id];
      return `<span><span class="party-dot" style="--party-colour:${party.colour}"></span>${escapeHtml(party.name)} ${seats} seat${seats === 1 ? "" : "s"} (${vote}%)</span>`;
    })
    .join("");

  const blocBar = (label, data, colour) => `
    <div class="bloc-bar">
      <span>${label}</span>
      <div class="bloc-bar-track"><div class="bloc-bar-fill" style="width:${data.percentage === null ? 0 : data.percentage}%;--bloc-colour:${colour}"></div></div>
      <span class="bloc-bar-value">${data.percentage === null ? "–" : `${Math.round(data.percentage)}%`}</span>
    </div>`;

  const topSeats = polling.seats[top?.party.id] || 0;
  const topVote = polling.votes[top?.party.id] || 0;
  const topBelowThreshold = topVote < 5 && top?.party.id !== "tpm";
  const topIsTpm = top?.party.id === "tpm";

  const closestScenario = top
    ? `Your answers are closest to <strong>${escapeHtml(top.party.name)}</strong> (${Math.round(top.percentage)}%). In the 2 November polling average, ${escapeHtml(top.party.name)} is on ${topVote}% and would win about ${topSeats} seat${topSeats === 1 ? "" : "s"}. ${
        topBelowThreshold
          ? "That is below the 5% party-vote threshold, so the party would need to win an electorate to enter Parliament. A party vote for it would not by itself produce seats unless it crosses the threshold or wins an electorate."
          : topIsTpm
            ? "Te Pāti Māori is polling below 5% but wins Māori electorate seats, which keeps it in Parliament. Its party vote still matters for its share of list seats."
            : "It is above the 5% threshold in this snapshot, so a party vote for it contributes to its share of the 123 seats."
      }`
    : "";

  const blocScenario = left.percentage !== null && right.percentage !== null
    ? `${tension ? `${tension} ` : ""}Your answers are closer to the <strong>${leftLeads ? "left" : "right"} bloc</strong> (${Math.round(leftLeads ? left.percentage : right.percentage)}%) than the <strong>${leftLeads ? "right" : "left"} bloc</strong> (${Math.round(leftLeads ? right.percentage : left.percentage)}%). The best match in that bloc is <strong>${escapeHtml((leftLeads ? left.best : right.best)?.party.name || "–")}</strong>. If you care most about which side governs, a vote for a party in that bloc may do more to change the government than a vote for a party outside it.`
    : "There are not enough published positions to compare the two blocs reliably.";

  const kingmaker = polling.seats.top > 0 && !polling.blocs.left.includes("top") && !polling.blocs.right.includes("top")
    ? `Under this snapshot, the left bloc has ${left.seats} seats and the right bloc has ${right.seats}. ${polling.majority} seats are needed to govern. <strong>TOP has ${polling.seats.top} seats and is not aligned with either bloc.</strong> That means neither side can reach a majority without it (or without another arrangement). A vote for TOP could increase its leverage in coalition talks — but it is not a prediction, and TOP says it is open to any party.`
    : "Under this snapshot, one bloc can reach a majority without the unaligned party.";

  return `
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">What your vote does</p>
          <h2>Your vote is one input into a 123-seat Parliament.</h2>
          <p>New Zealand uses mixed-member proportional representation (MMP). Your party vote decides the share of seats each party gets; your electorate vote decides the local MP. The graphic below is the 2 November 2026 polling average, not a prediction.</p>
        </div>

        <div class="vote-path" aria-label="How a party vote becomes seats">
          <div class="vote-step"><span class="vote-num">1</span><strong>Your party vote</strong><p>Adds to your party’s total.</p></div>
          <div class="vote-arrow" aria-hidden="true">→</div>
          <div class="vote-step"><span class="vote-num">2</span><strong>5% or an electorate</strong><p>The party must clear the threshold or win a seat.</p></div>
          <div class="vote-arrow" aria-hidden="true">→</div>
          <div class="vote-step"><span class="vote-num">3</span><strong>Sainte-Laguë</strong><p>Seats are shared out in proportion to the party vote.</p></div>
          <div class="vote-arrow" aria-hidden="true">→</div>
          <div class="vote-step"><span class="vote-num">4</span><strong>Government</strong><p>Parties negotiate a majority — 62 seats in this snapshot.</p></div>
        </div>

        <div class="card card-pad">
          <div class="seat-grid" role="img" aria-label="Polling snapshot: ${seatOrder.map((id) => `${partyName(id)} ${polling.seats[id]} seats`).join(", ")}. Total ${polling.totalSeats} seats. Majority ${polling.majority}.">
            ${seatDots}
          </div>
          <div class="seat-legend">${legend}</div>
          <p class="small muted mt-2 mb-0">Polling average: ${polling.date}. Source: <a href="${polling.sourceUrl}" rel="noopener">${polling.source}</a>. ${polling.totalSeats} seats including overhang; ${polling.majority} needed to govern. Seats do not add up to 120 because of overhang seats.</p>
        </div>

        <div class="grid-2 mt-3">
          <div class="card card-pad">
            <h3>Which side is closer to you?</h3>
            <p class="small">Each bloc is weighted by the seats its parties are polling. This is a rough guide to the government you might prefer, not a prediction of the next coalition.</p>
            <div class="bloc-bars">
              ${blocBar("Left bloc", left, "#b01e2e")}
              ${blocBar("Right bloc", right, "#005a9c")}
            </div>
            <p class="small muted mt-2 mb-0">Left: Labour, Greens, Te Pāti Māori. Right: National, ACT, NZ First. TOP is unaligned and excluded from both bars.</p>
          </div>
          <div class="card card-pad">
            <h3>Where the numbers sit</h3>
            <div class="home-stats" style="margin-top:0.8rem">
              <div class="home-stat"><strong>${left.seats}</strong><span>left bloc seats</span></div>
              <div class="home-stat"><strong>${right.seats}</strong><span>right bloc seats</span></div>
              <div class="home-stat"><strong>${polling.seats.top}</strong><span>TOP seats</span></div>
              <div class="home-stat"><strong>${polling.majority}</strong><span>needed to govern</span></div>
            </div>
            <p class="small muted mt-2 mb-0">A party or bloc needs ${polling.majority} seats to command the House. Coalition negotiations can produce arrangements that are not obvious from the campaign.</p>
          </div>
        </div>

        <div class="card card-pad mt-3">
          <h3>Threshold watch</h3>
          <p class="small">A party needs <strong>5% of the party vote</strong> or an <strong>electorate seat</strong> to enter Parliament. This chart shows the 2 November average. The vertical line is the 5% threshold.</p>
          <div class="threshold-chart">
            ${[...seatOrder].sort((a, b) => (polling.votes[b] || 0) - (polling.votes[a] || 0)).map((id) => {
              const party = partyById(PARTIES, id);
              const vote = polling.votes[id] || 0;
              const highlight = top && top.party.id === id;
              return `<div class="threshold-row${highlight ? " is-highlight" : ""}" style="--party-colour:${party.colour}">
                <span class="threshold-name">${escapeHtml(party.name)}</span>
                <div class="threshold-track" title="${escapeHtml(party.name)}: ${vote}% party vote">
                  <div class="threshold-fill" style="width:${Math.min(100, (vote / 30) * 100)}%"></div>
                  <div class="threshold-line" style="left:${(5 / 30) * 100}%"></div>
                </div>
                <span class="threshold-value">${vote}%</span>
              </div>`;
            }).join("")}
          </div>
          <p class="small muted mt-2 mb-0">Te Pāti Māori is below 5% but wins Māori electorate seats, which keeps it in Parliament. A party below the threshold and without an electorate seat does not receive seats from the party vote. Polling is a snapshot, not a prediction.</p>
        </div>

        <div class="scenario-grid mt-3">
          <article class="scenario">
            <h3>Vote for your closest party</h3>
            <p>${closestScenario}</p>
            <div class="scenario-foot">Best if you want your party vote to express your policy preferences as directly as possible.</div>
          </article>
          <article class="scenario">
            <h3>Vote for the side you’d rather see govern</h3>
            <p>${blocScenario}</p>
            <div class="scenario-foot">Best if you care most about which bloc negotiates the next government, rather than which single party is closest to you.</div>
          </article>
          <article class="scenario">
            <h3>Vote for a possible kingmaker</h3>
            <p>${kingmaker}</p>
            <div class="scenario-foot">Best if you want to influence coalition negotiations. It is a judgement call, not a maths answer.</div>
          </article>
        </div>

        <div class="notice mt-3">
          <span aria-hidden="true">◉</span>
          <div>
            <strong>What this does not mean</strong>
            <p>Polls move, coalition deals are unpredictable, and a vote for a small party is not automatically “wasted”. This page does not tell you how to vote. It gives you the current numbers and the trade-offs so you can make your own call.</p>
          </div>
        </div>
      </div>
    </section>`;
}

function renderShare(results) {
  const top = results.top;
  const shareText = top
    ? `My closest party is ${top.party.name} (${Math.round(top.percentage)}%) on Clear Vote — a blind, source-checked comparison of NZ 2026 policies. See your match:`
    : "Clear Vote — a blind, source-checked comparison of NZ 2026 policies.";
  const url = resultUrl(answers, weights, SECTIONS);
  const encodedText = encodeURIComponent(`${shareText} ${url}`);
  const encodedUrl = encodeURIComponent(url);

  return `
    <section class="section share-panel">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">Share or print</p>
          <h2>Keep the result, or pass it on.</h2>
          <p>The share link contains your answers and your issue weights so the recipient sees the same result. It does not contain your name, email or location. Nothing is uploaded to a server.</p>
        </div>
        <div class="card card-pad">
          <div class="btn-row">
            <button class="btn" type="button" id="share-native">Share result</button>
            <button class="btn btn-soft" type="button" id="copy-link">Copy link</button>
            <button class="btn btn-soft" type="button" id="download-card">Download result card</button>
            <button class="btn btn-ghost" type="button" id="print-result">Print</button>
          </div>
          <p class="small muted mt-2" id="share-status" role="status" aria-live="polite"></p>
          <div class="btn-row mt-2">
            <a class="btn btn-small btn-ghost" href="https://bsky.app/intent/compose?text=${encodedText}" rel="noopener" target="_blank">Bluesky</a>
            <a class="btn btn-small btn-ghost" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}" rel="noopener" target="_blank">Facebook</a>
            <a class="btn btn-small btn-ghost" href="https://twitter.com/intent/tweet?text=${encodedText}" rel="noopener" target="_blank">X</a>
            <a class="btn btn-small btn-ghost" href="https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}" rel="noopener" target="_blank">LinkedIn</a>
            <a class="btn btn-small btn-ghost" href="mailto:?subject=${encodeURIComponent("My Clear Vote result")}&body=${encodedText}">Email</a>
          </div>
          <p class="small muted mt-2 mb-0">Social platforms may add their own tracking. Clear Vote itself does not track you. If you prefer, copy the link or download the image and share it yourself.</p>
        </div>

        <div class="print-only mt-3">
          <h2>Clear Vote — 2026 New Zealand election</h2>
          <p>This result is a policy-alignment guide, not a vote recommendation. It is based on published party positions as at 5 November 2026. Every position is sourced on the audit page.</p>
        </div>
      </div>
    </section>`;
}

function renderSaveRestore() {
  return `
    <section class="section no-print">
      <div class="wrap">
        <div class="card card-pad">
          <div class="section-head" style="margin-bottom:0.8rem">
            <p class="eyebrow">Save &amp; restore</p>
            <h2 style="font-size:1.7rem">Download your result. Load it again later.</h2>
            <p class="small">The results file is a small JSON file containing your answers and issue weights. You can save it, email it to yourself, or open it on another device and load it here. It is not uploaded anywhere.</p>
          </div>
          <div class="btn-row">
            <button class="btn" type="button" id="download-result-file">Download results file</button>
            <label class="btn btn-soft" for="import-result">Load saved result</label>
            <input id="import-result" class="sr-only" type="file" accept="application/json,.json">
          </div>
          <p class="small muted mt-2 mb-0" id="save-status" role="status" aria-live="polite"></p>
        </div>
      </div>
    </section>`;
}

function renderBody(results) {
  return `
    ${renderRanked(results)}
    ${renderTopMatch(results)}
    ${renderIssueProfile(results)}
    ${renderHeatmap(results)}
    ${renderVoteImpact(results)}
    ${renderShare(results)}
    ${renderSaveRestore()}`;
}

function renderPage(results) {
  root.innerHTML = `
    <div id="weighted-hero">${renderHero(results)}</div>
    ${renderWeightPanel()}
    <div id="weighted-body">${renderBody(results)}</div>
    <section class="section">
      <div class="wrap">
        <div class="notice notice-accent">
          <span aria-hidden="true">✓</span>
          <div>
            <strong>Check the sources before you vote.</strong>
            <p>Every non-null party position is linked to official party material or, where necessary, a clearly labelled secondary source. If you spot an error, the audit page explains how to flag it.</p>
          </div>
        </div>
        <div class="btn-row mt-3">
          <a class="btn" href="./audit.html">Audit every position <span aria-hidden="true">→</span></a>
          <a class="btn btn-ghost" href="./index.html#survey">Review or change your answers</a>
        </div>
      </div>
    </section>`;
  bindWeightPanel();
  bindShare(results);
  bindSaveRestore(results);
}

function refreshWeighted() {
  saveWeights(weights);
  const results = computeResults(answers, SECTIONS, PARTIES, weights);
  const hero = document.getElementById("weighted-hero");
  const body = document.getElementById("weighted-body");
  if (hero) hero.innerHTML = renderHero(results);
  if (body) body.innerHTML = renderBody(results);
  bindShare(results);
  bindSaveRestore(results);
  document.title = results.top
    ? `My closest party: ${results.top.party.name} — Clear Vote`
    : "Your results — Clear Vote";
}

function bindWeightPanel() {
  const panel = document.getElementById("weight-panel");
  if (!panel) return;

  const update = debounce(() => refreshWeighted(), 80);

  panel.querySelectorAll("input[data-weight]").forEach((input) => {
    input.addEventListener("input", () => {
      const sectionId = input.dataset.weight;
      const value = Number(input.value);
      weights[sectionId] = value;
      const output = panel.querySelector(`[data-weight-output="${sectionId}"]`);
      if (output) output.textContent = WEIGHT_LABELS[value];
      const help = panel.querySelector(`#weight-help-${sectionId}`);
      if (help) {
        const section = SECTIONS.find((item) => item.id === sectionId);
        help.textContent = `Importance of ${section?.title || sectionId}: ${WEIGHT_LABELS[value]}`;
      }
      update();
    });
  });

  const reset = () => {
    for (const section of SECTIONS) weights[section.id] = 1;
    saveWeights(weights);
    panel.querySelectorAll("input[data-weight]").forEach((input) => {
      input.value = "1";
      const output = panel.querySelector(`[data-weight-output="${input.dataset.weight}"]`);
      if (output) output.textContent = WEIGHT_LABELS[1];
    });
    refreshWeighted();
  };

  panel.querySelector("#reset-weights")?.addEventListener("click", reset);
}

function bindShare(results) {
  const status = document.getElementById("share-status");
  const setStatus = (message) => {
    if (status) status.textContent = message;
  };

  document.getElementById("share-native")?.addEventListener("click", async () => {
    const outcome = await shareLink(
      answers,
      weights,
      SECTIONS,
      "My Clear Vote result",
      results.top
        ? `My closest party is ${results.top.party.name} (${Math.round(results.top.percentage)}%) on Clear Vote.`
        : "Clear Vote — compare NZ 2026 policies."
    );
    if (outcome === "copied") setStatus("Link copied to your clipboard.");
    else if (outcome === "failed") setStatus("Could not share automatically. Use “Copy link” instead.");
    else if (outcome === "shared") setStatus("Shared.");
  });

  document.getElementById("copy-link")?.addEventListener("click", async () => {
    const ok = await copyText(resultUrl(answers, weights, SECTIONS));
    setStatus(ok ? "Link copied to your clipboard." : "Could not copy the link. You can copy it from the address bar.");
  });

  document.getElementById("download-card")?.addEventListener("click", async () => {
    await downloadResultCard(results);
    setStatus("Result card downloaded.");
  });

  document.getElementById("print-result")?.addEventListener("click", () => {
    window.print();
  });
}

function bindImport(inputId, statusId) {
  const input = document.getElementById(inputId);
  const status = document.getElementById(statusId);
  if (!input) return;
  input.addEventListener("change", async () => {
    const file = input.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const imported = parseResultFile(text, SECTIONS);
      answers = imported.answers;
      weights = imported.weights;
      sharedMode = false;
      importNotice = "Saved result loaded.";
      saveAnswers(answers);
      saveWeights(weights);
      if (status) status.textContent = "Saved result loaded. Recalculating…";
      showResults();
    } catch (error) {
      if (status) status.textContent = `Could not load that file: ${error.message}`;
    } finally {
      input.value = "";
    }
  });
}

function bindSaveRestore(results) {
  const status = document.getElementById("save-status");
  const setStatus = (message) => {
    if (status) status.textContent = message;
  };

  document.getElementById("download-result-file")?.addEventListener("click", () => {
    const payload = makeExportPayload(answers, weights, results, SECTIONS, META);
    const date = new Date().toISOString().slice(0, 10);
    downloadFile(
      `clearvote-result-${date}.json`,
      JSON.stringify(payload, null, 2),
      "application/json"
    );
    setStatus("Results file downloaded. You can load it again on the results page.");
  });

  bindImport("import-result", "save-status");
}

async function downloadResultCard(results) {
  const top = results.top;
  if (!top) return;
  const canvas = document.createElement("canvas");
  const width = 1200;
  const height = 630;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  const bg = "#f6f2e9";
  const ink = "#1c1d19";
  const muted = "#746f63";
  const accent = "#0b6b5e";

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, width, 10);

  ctx.fillStyle = muted;
  ctx.font = "600 22px ui-monospace, monospace";
  ctx.fillText("CLEAR VOTE  /  2026 NEW ZEALAND ELECTION", 64, 74);

  ctx.fillStyle = ink;
  ctx.font = "600 38px Georgia, serif";
  ctx.fillText("My closest party", 64, 150);

  ctx.fillStyle = top.party.colour;
  ctx.font = "700 96px Georgia, serif";
  ctx.fillText(top.party.name, 64, 255);

  ctx.fillStyle = ink;
  ctx.font = "700 64px ui-monospace, monospace";
  ctx.fillText(`${Math.round(top.percentage)}%`, 64, 335);

  ctx.fillStyle = muted;
  ctx.font = "400 24px ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("weighted policy alignment", 64, 370);

  const topThree = results.ranked.slice(0, 3);
  topThree.forEach((result, index) => {
    const y = 430 + index * 52;
    ctx.fillStyle = result.party.colour;
    ctx.fillRect(64, y - 18, 14, 14);
    ctx.fillStyle = ink;
    ctx.font = "600 24px ui-sans-serif, system-ui, sans-serif";
    ctx.fillText(result.party.name, 94, y - 4);
    ctx.fillStyle = muted;
    ctx.font = "400 22px ui-monospace, monospace";
    ctx.fillText(`${Math.round(result.percentage)}%`, 330, y - 4);
    ctx.fillStyle = "#d8cfbe";
    ctx.fillRect(390, y - 16, 300, 10);
    ctx.fillStyle = result.party.colour;
    ctx.fillRect(390, y - 16, Math.max(4, (result.percentage / 100) * 300), 10);
  });

  const siteUrl = new URL(".", window.location.href).toString()
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  ctx.fillStyle = muted;
  ctx.font = "400 20px ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("A blind, source-checked comparison of party policies.", 64, 570);
  ctx.fillText(`Not a vote recommendation. ${siteUrl}`, 64, 598);

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) return;
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "clearvote-result.png";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function showResults() {
  if (!root) return;
  if (sharedCode && !sharedResult) {
    emptyState("That shared result link is not valid. It may have been cut off when copied. Take the survey to get your own result.");
    return;
  }
  if (answeredCount(answers, SECTIONS) === 0) {
    emptyState();
    return;
  }
  const results = computeResults(answers, SECTIONS, PARTIES, weights);
  renderPage(results);
  document.title = results.top
    ? `My closest party: ${results.top.party.name} — Clear Vote`
    : "Your results — Clear Vote";
}

showResults();
