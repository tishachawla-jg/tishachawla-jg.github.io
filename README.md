# tishachawla-jg.github.io

My personal site. Static HTML, no build step, no dependencies.

```
index.html            home: bio, projects, recent talks and writing, research summary
talks/index.html      full speaking archive
writing/index.html    technical posts, Off Script, external features
research/index.html   publications and awards
assets/style.css      the only stylesheet, shared by every page
assets/main.js        theme toggle, live GitHub star counts, footer year
```

## Running it locally

Any static server will do:

```bash
python -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` straight off disk mostly works,
but the directory links (`talks/`, `writing/`, `research/`) need a server.

## Things to keep current

- **Nav and footer are duplicated in all four pages.** No templating, by design.
  Change one, change all four.
- **Star counts** in `index.html` are hardcoded as a no-JS fallback and refreshed at
  runtime from the GitHub API by `assets/main.js`. The static numbers only matter when
  JS is off or the API is rate-limited.
- **Research stats** (citations, h-index, i10) are hardcoded on the home and research
  pages. Google Scholar has no public API, so these need a manual bump now and then.
- **Upcoming talks** carry an `Upcoming` tag. Move a talk down to the past list once
  it has happened, and add the recording link.

## Deploying

Pushing to `main` publishes via GitHub Pages.
