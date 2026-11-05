import { GLOSSARY } from "./survey-data.js?v=20261105";
import { escapeHtml } from "./utils.js?v=20261105";

const root = document.getElementById("glossary-root");
const search = document.getElementById("glossary-search");
const count = document.getElementById("glossary-count");

const entries = Object.entries(GLOSSARY).sort((a, b) =>
  a[1].term.localeCompare(b[1].term, "en-NZ")
);

function render(filter = "") {
  if (!root) return;
  const query = filter.trim().toLowerCase();
  const filtered = entries.filter(([id, item]) => {
    if (!query) return true;
    return (
      item.term.toLowerCase().includes(query) ||
      item.definition.toLowerCase().includes(query) ||
      id.includes(query)
    );
  });

  if (count) {
    count.textContent = `${filtered.length} of ${entries.length} terms`;
  }

  if (!filtered.length) {
    root.innerHTML = `<div class="notice"><div><strong>No matching terms.</strong><p>Try a different word, or clear the search.</p></div></div>`;
    return;
  }

  root.innerHTML = `<div class="glossary-grid">${filtered
    .map(
      ([id, item]) => `
        <article class="glossary-card" id="${escapeHtml(id)}">
          <h2>${escapeHtml(item.term)}</h2>
          <p>${escapeHtml(item.definition)}</p>
          <a class="small" href="./index.html#survey">Back to the survey</a>
        </article>`
    )
    .join("")}</div>`;
}

search?.addEventListener("input", (event) => render(event.target.value));
render();

// Support deep links such as glossary.html#aukus.
if (window.location.hash) {
  const target = document.getElementById(window.location.hash.slice(1));
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}
