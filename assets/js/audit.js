import { PARTIES, SECTIONS, META, GLOSSARY } from "./survey-data.js?v=20261105";
import {
  STANCE_LABELS,
  STANCE_SHORT,
  downloadFile,
  escapeHtml,
  partyById,
} from "./utils.js?v=20261105";

const root = document.getElementById("audit-root");
const controls = document.getElementById("audit-controls");

let currentSection = "all";
let currentParty = "all";
let currentSearch = "";
let currentView = "matrix";

const totalStatements = SECTIONS.reduce((sum, section) => sum + section.statements.length, 0);

function positionFor(statement, partyId) {
  return statement.positions?.[partyId] || null;
}

function stanceBadge(stance) {
  if (stance === null || stance === undefined) {
    return `<span class="stance stance-null">–</span>`;
  }
  return `<span class="stance stance-${stance}">${STANCE_SHORT[String(stance)]}</span>`;
}

function sourceLink(position) {
  if (!position?.source?.url) return "";
  const type = position.source.type === "secondary" ? "secondary" : "official";
  return `<a href="${escapeHtml(position.source.url)}" rel="noopener" target="_blank">source</a><span class="source-type ${type}">${type}</span>`;
}

function explainerHtml(statement) {
  const terms = (statement.glossary || [])
    .map((id) => GLOSSARY[id])
    .filter(Boolean);
  if (!terms.length) return "";
  return `<details class="statement-explainer">
    <summary>Short explainer</summary>
    ${terms.map((term) => `<p><strong>${escapeHtml(term.term)}:</strong> ${escapeHtml(term.definition)}</p>`).join("")}
  </details>`;
}

function statementMatches(statement) {
  if (!currentSearch) return true;
  const haystack = [
    statement.text,
    statement.plain,
    statement.context,
    ...Object.values(statement.positions || {}).flatMap((position) => [
      position.evidence,
      position.basis,
      position.source?.label,
    ]),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(currentSearch.toLowerCase());
}

function visibleSections() {
  return SECTIONS.filter(
    (section) => currentSection === "all" || section.id === currentSection
  );
}

function visibleParties() {
  return PARTIES.filter(
    (party) => currentParty === "all" || party.id === currentParty
  );
}

function renderControls() {
  if (!controls) return;
  const sectionOptions = [
    `<option value="all">All sections</option>`,
    ...SECTIONS.map(
      (section) =>
        `<option value="${section.id}"${currentSection === section.id ? " selected" : ""}>${section.number}. ${escapeHtml(section.title)}</option>`
    ),
  ].join("");
  const partyOptions = [
    `<option value="all">All parties</option>`,
    ...PARTIES.map(
      (party) =>
        `<option value="${party.id}"${currentParty === party.id ? " selected" : ""}>${escapeHtml(party.name)}</option>`
    ),
  ].join("");

  controls.innerHTML = `
    <div class="field">
      <label for="audit-section">Section</label>
      <select id="audit-section">${sectionOptions}</select>
    </div>
    <div class="field">
      <label for="audit-party">Party</label>
      <select id="audit-party">${partyOptions}</select>
    </div>
    <div class="field" style="flex:1;min-width:220px">
      <label for="audit-search">Search statements or evidence</label>
      <input id="audit-search" type="search" placeholder="e.g. capital gains, housing, Gaza" value="${escapeHtml(currentSearch)}">
    </div>
    <div class="field">
      <label>View</label>
      <div class="btn-row">
        <button class="btn btn-small ${currentView === "matrix" ? "" : "btn-ghost"}" type="button" data-view="matrix">Matrix</button>
        <button class="btn btn-small ${currentView === "party" ? "" : "btn-ghost"}" type="button" data-view="party">By party</button>
      </div>
    </div>
    <div class="field">
      <label>Data</label>
      <button class="btn btn-small btn-soft" type="button" id="download-json">Download JSON</button>
    </div>
  `;

  controls.querySelector("#audit-section")?.addEventListener("change", (event) => {
    currentSection = event.target.value;
    renderContent();
  });
  controls.querySelector("#audit-party")?.addEventListener("change", (event) => {
    currentParty = event.target.value;
    renderContent();
  });
  controls.querySelector("#audit-search")?.addEventListener("input", (event) => {
    currentSearch = event.target.value;
    renderContent();
  });
  controls.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.view;
      controls.querySelectorAll("[data-view]").forEach((item) => {
        item.classList.toggle("btn-ghost", item.dataset.view !== currentView);
      });
      renderContent();
    });
  });
  controls.querySelector("#download-json")?.addEventListener("click", () => {
    downloadFile(
      "clearvote-positions.json",
      JSON.stringify({ meta: META, parties: PARTIES, sections: SECTIONS }, null, 2),
      "application/json"
    );
  });
}

function renderMatrix() {
  const parties = visibleParties();
  const sections = visibleSections();
  const header = parties
    .map((party) => `<th scope="col">${escapeHtml(party.name)}</th>`)
    .join("");

  const rows = sections.flatMap((section) =>
    section.statements
      .filter(statementMatches)
      .map((statement) => {
        const cells = parties
          .map((party) => {
            const position = positionFor(statement, party.id);
            if (!position) {
              return `<td><div class="stance-cell"><span class="stance stance-null">–</span><span class="small muted">no clear position</span></div></td>`;
            }
            return `<td>
              <div class="stance-cell">
                ${stanceBadge(position.stance)}
                ${sourceLink(position)}
              </div>
            </td>`;
          })
          .join("");
        return `<tr>
          <th scope="row"><span class="audit-sec">${section.number}. ${escapeHtml(section.shortTitle)}</span>${escapeHtml(statement.text)}</th>
          ${cells}
        </tr>`;
      })
  );

  if (!rows.length) {
    return `<div class="notice"><div><strong>No statements match that search.</strong><p>Try a different word or choose “All sections”.</p></div></div>`;
  }

  return `
    <div class="audit-matrix">
      <table>
        <thead><tr><th scope="col">Statement</th>${header}</tr></thead>
        <tbody>${rows.join("")}</tbody>
      </table>
    </div>
    <p class="small muted mt-2">Stance key: +2 strongly supports · +1 supports · 0 mixed/conditional · −1 opposes · −2 strongly opposes · – no clear published position. Click a source link to check the original material. On a phone, scroll sideways to see all parties. Evidence and full citations are in the statement list below.</p>
  `;
}

function renderDetails() {
  const parties = visibleParties();
  const sections = visibleSections();
  const items = sections.flatMap((section) =>
    section.statements
      .filter(statementMatches)
      .map((statement) => {
        const positions = parties
          .map((party) => {
            const position = positionFor(statement, party.id);
            if (!position) {
              return `<div class="audit-pos">
                <div class="audit-pos-party"><span class="party-dot" style="--party-colour:${party.colour}"></span>${escapeHtml(party.name)}</div>
                <div class="audit-pos-evidence"><p class="muted">No clear published position found in the 2026 material reviewed.</p></div>
              </div>`;
            }
            return `<div class="audit-pos">
              <div class="audit-pos-party"><span class="party-dot" style="--party-colour:${party.colour}"></span>${escapeHtml(party.name)}</div>
              <div class="audit-pos-evidence">
                <p>${stanceBadge(position.stance)} <strong>${escapeHtml(STANCE_LABELS[String(position.stance)])}</strong></p>
                <p>${escapeHtml(position.evidence)}</p>
                ${position.basis ? `<p class="small muted">Policy basis: ${escapeHtml(position.basis)}</p>` : ""}
                <p class="audit-pos-source">Source: <a href="${escapeHtml(position.source.url)}" rel="noopener" target="_blank">${escapeHtml(position.source.label)}</a><span class="source-type ${position.source.type === "secondary" ? "secondary" : "official"}">${position.source.type === "secondary" ? "secondary" : "official"}</span></p>
              </div>
            </div>`;
          })
          .join("");
        return `<details class="audit-statement">
          <summary><span class="sid">${statement.id}</span><span>${escapeHtml(statement.text)}</span></summary>
          <div class="audit-body">
            <p class="small muted">${escapeHtml(statement.plain)}</p>
            ${explainerHtml(statement)}
            ${positions}
          </div>
        </details>`;
      })
  );

  if (!items.length) {
    return `<div class="notice"><div><strong>No statements match that search.</strong><p>Try a different word or choose “All sections”.</p></div></div>`;
  }
  return items.join("");
}

function renderPartyProfiles() {
  const parties = visibleParties();
  return parties
    .map((party) => {
      const rows = [];
      for (const section of SECTIONS) {
        for (const statement of section.statements) {
          if (!statementMatches(statement)) continue;
          const position = positionFor(statement, party.id);
          if (!position) continue;
          rows.push(`
            <li>
              <strong>${escapeHtml(statement.text)}</strong><br>
              ${stanceBadge(position.stance)} ${escapeHtml(STANCE_LABELS[String(position.stance)])} — ${escapeHtml(position.evidence)}
              <br><span class="small muted">${escapeHtml(section.shortTitle)} · <a href="${escapeHtml(position.source.url)}" rel="noopener" target="_blank">${escapeHtml(position.source.label)}</a></span>
            </li>`);
        }
      }
      const count = SECTIONS.reduce(
        (sum, section) =>
          sum + section.statements.filter((statement) => positionFor(statement, party.id)).length,
        0
      );
      return `<article class="party-profile">
        <div class="party-profile-head">
          <span class="party-dot" style="--party-colour:${party.colour}"></span>
          <h3>${escapeHtml(party.name)}</h3>
          <span class="meta">${count} of ${totalStatements} statements · ${escapeHtml(party.leader)}</span>
        </div>
        <p class="small muted">${escapeHtml(party.blurb)}</p>
        ${rows.length ? `<ul>${rows.join("")}</ul>` : `<p class="small muted">No matching positions in the current filter.</p>`}
      </article>`;
    })
    .join("");
}

function renderSummary() {
  const partyCounts = PARTIES.map((party) => {
    const count = SECTIONS.reduce(
      (sum, section) =>
        sum + section.statements.filter((statement) => positionFor(statement, party.id)).length,
      0
    );
    return `<span class="tag"><span class="party-dot" style="--party-colour:${party.colour}"></span>${escapeHtml(party.name)}: ${count}/${totalStatements}</span>`;
  }).join("");

  return `<div class="card card-pad mb-3">
    <div class="btn-row" style="justify-content:space-between;align-items:flex-start">
      <div>
        <h2 style="font-size:1.4rem;margin-bottom:0.35rem">The audit trail</h2>
        <p class="small muted mb-0">Every non-null position below is linked to a source. “Official” means the party’s own 2026 material; “secondary” means a reputable cross-check used only where the official material was not specific enough. “No clear position” means we could not find a published 2026 commitment in the material reviewed — it does not mean the party has no view.</p>
      </div>
    </div>
    <div class="match-tags mt-2">${partyCounts}</div>
  </div>`;
}

function renderContent() {
  if (!root) return;
  const summary = renderSummary();
  if (currentView === "party") {
    root.innerHTML = `${summary}${renderPartyProfiles()}`;
  } else {
    root.innerHTML = `${summary}${renderMatrix()}${renderDetails()}`;
  }
}

renderControls();
renderContent();
