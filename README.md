# Clear Vote

**Compare policies, not personalities.** A static, source-checked policy comparison for the 2026 New Zealand general election.

The site is a long, blinded survey across 11 areas of government. You answer 44 statements in about 30 minutes, then see which parties match you, where you differ, and how your vote translates into seats under MMP. Every party position is linked to a source on the audit page.

- **Live site:** [james.sjhl.nz/informed-voting](https://james.sjhl.nz/informed-voting/)
- **Election:** Saturday 7 November 2026
- **Data snapshot:** 4 November 2026
- **Parties:** National, Labour, Greens, ACT, New Zealand First, Te Pāti Māori, The Opportunity Party (TOP)
- **License:** MIT (code and original text). Party policy material remains the property of its owners and is cited, not reproduced at length.

## Why this exists

The project is motivated by the idea of the “good voter”: a voter with an accurate model of how the political system works, accurate information about what the parties propose, and values that take other people and future generations seriously. That does not mean a voter who agrees with the author. See [motivation.html](motivation.html) and the original note at [1jamesthompson1/1jamesthompson1.github.io#39](https://github.com/1jamesthompson1/1jamesthompson1.github.io/issues/39).

## What is in the repo

```text
.
├── index.html              # home + the 44-statement survey
├── results.html            # results shell (rendered from localStorage or ?r=)
├── audit.html              # full policy matrix + sources
├── methods.html            # methodology, scoring, limitations
├── motivation.html         # why the project exists
├── 404.html
├── assets/
│   ├── css/styles.css
│   ├── img/logo.svg
│   ├── img/favicon.svg
│   ├── data/positions.json # downloadable audit data
│   └── js/
│       ├── survey-data.js  # generated content: parties, sections, statements, positions
│       ├── utils.js        # scoring, storage, share encoding
│       ├── survey.js       # survey rendering + autosave
│       ├── results.js      # results, MMP graphic, share card
│       ├── audit.js        # matrix, filters, party profiles
│       └── common.js       # mobile nav, external links
├── scripts/build_data.py   # authoring pipeline (optional; see below)
└── .nojekyll
```

## Run locally

No build step is required. Any static file server works:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Do not open `index.html` directly with `file://` — ES modules and `fetch`-free imports work, but some browsers block module loading from local files. Use a server.

## How the data works

The site is static. There is no backend, database or account system.

- `assets/js/survey-data.js` exports `PARTIES`, `SECTIONS` and `META`.
- Each statement has a `positions` object keyed by party id. A position is:
  ```js
  {
    stance: -2 | -1 | 0 | 1 | 2,
    evidence: "Short plain-language explanation",
    basis: "The party policy statement used, if available",
    source: {
      label: "Source title",
      url: "https://…",
      type: "official" | "secondary"
    }
  }
  ```
- A missing party key means **no clear published position** in the material reviewed. It is excluded from that party’s score; it is not treated as zero.
- `META.polling` contains the 2 November 2026 polling snapshot used for the seat graphic. It is a snapshot, not a prediction.
- Answers are stored in `localStorage` under `clearvote.answers.v1`.
- Shared result links encode the answers in the URL (`?r=…`). No personal data is included.

### Authoring pipeline

`scripts/build_data.py` is the authoring tool used to generate `assets/js/survey-data.js`. It expects a local Policy.nz 2026 export at `/tmp/opencode/policy_all.json` (the export is not committed, because it is third-party data). It resolves each policy statement to the best matching citation and falls back to the party’s official policy index when the citation does not match.

You can edit `assets/js/survey-data.js` directly if you prefer. If you do, update `META.version` and add a note to the changelog on `methods.html`. The generated file is the canonical data for the site.

To rebuild with the authoring pipeline:

```bash
# Requires a Policy.nz export at /tmp/opencode/policy_all.json
python3 scripts/build_data.py
```

## Deploy to GitHub Pages

The repo is designed to deploy from the root of the `main` branch:

1. Push to GitHub.
2. Settings → Pages → Build and deployment → Source: **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`.
4. The `.nojekyll` file prevents Jekyll from processing the assets.

All paths are relative, so the site works at a project URL such as `https://james.sjhl.nz/informed-voting/`.

## Sources and corrections

- Official party material is preferred. Secondary sources are labelled and used only where the official material was not specific enough.
- Every non-null position is linked on `audit.html`.
- The full dataset is downloadable at `assets/data/positions.json`.
- If you find an error, open an issue with the statement ID, party, current coding, proposed coding and source. Corrections are logged on the methods page.

This project is independent and not affiliated with any party, candidate or campaign. It does not accept donations or run advertising.

## Privacy

Clear Vote has no server, account, analytics or advertising. Answers stay in the browser’s local storage. A shared result link contains only the encoded answers. Social platforms may add their own tracking when you use a share button; the site itself does not track you.

## License

MIT for the code and original text. See [LICENSE](LICENSE). Party names, logos, policies and quoted material remain the property of their respective owners. The site does not reproduce party logos.
