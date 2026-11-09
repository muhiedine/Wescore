# WeScore — CSCI426 Project Phase 1

**Football fixtures, team directory, standings and saved favourites**

A responsive, original React frontend created for **CSCI426 — Advanced Web Programming** (Phase 1), following the course examples by Dr. Kawthar Messelmani. The custom WeScore concept was approved for the project.

> **Academic demonstration, not a live football results service.** All clubs, scores, dates and standings are fictional. The contact form demonstrates input validation but does not send an email or save a message to a server.

## Features and seven pages

1. **Home** (`/`) — introduction and featured fictional fixtures.
2. **Matches** (`/matches`) — search by club or competition, filter by status, sort by date, and save favourite fixtures in `localStorage`.
3. **Teams** (`/teams`) — browse clubs, search teams/cities and save favourite teams in `localStorage`.
4. **Standings** (`/standings`) — table generated from a JavaScript array using `.map()` and `.sort()`.
5. **Features** (`/features`) — overview of the functionality.
6. **About** (`/about`) — problem, objective and project information.
7. **Contact** (`/contact`) — React controlled inputs with required fields and a demo-only alert.

The desktop navigation also has a React `useState` mobile toggle. The word **WeScore** is a non-clickable text heading in the Navbar and Footer.

## What is inside the project?

```
WeScore/
  public/index.html
  src/index.js
  src/App.js
  src/components/NavBar.js, Footer.js, MatchCard.js
  src/pages/Home.js, Matches.js, Teams.js, Standings.js,
            Features.js, About.js, Contact.js
  src/data/MatchesList.js, TeamsList.js
  src/styles/Global.css, NavBar.css, Footer.css
  docs/screenshots/ (captured desktop/mobile screenshots)
  docs/WeScore_Phase1_Code_Guide.docx
  docs/WeScore_Phase1_Project_Report.pdf
  package.json, .gitignore, README.md, GITHUB_SETUP.md
```

## Requirements and setup

Install **Node.js + npm** and open a terminal in the `WeScore` directory.

```bash
npm install
npm start
```

The development site should open at `http://localhost:3000`.

If using an existing Create React App Offline (CRAO) project from class, replace its `src` and `public/index.html` with the files here and install the matching dependencies. Note: `node_modules` is intentionally **not** in this ZIP because it is machine-generated and very large. Run `npm install` once while online to create it. For an offline quiz or demo, install before disconnecting.

### Production build

```bash
npm run build
```

## React and JavaScript techniques used (all covered by the lectures)

- React functional components returning JSX, `props`, `import/export`.
- `BrowserRouter`, `Routes`, `Route`, `Link` from `react-router-dom`.
- `useState`, `onClick`, `onChange`, `onSubmit`, `preventDefault()`.
- Arrays and objects, `.map()`, `.filter()`, `.sort()`, `.includes()`.
- `JSON.parse()`, `JSON.stringify()`, `localStorage.getItem()`, `.setItem()`.
- CSS selectors, Flexbox, responsive media queries, plus CSS layout declarations.

No external football API, backend, database, authentication, additional component library, or pre-built template is used.

## UI screenshots

Screenshots of the actual locally rendered application are in `docs/screenshots/`:

![WeScore homepage](docs/screenshots/home-desktop.png)

![WeScore matches](docs/screenshots/matches-desktop.png)

![WeScore mobile](docs/screenshots/home-mobile.png)

## GitHub publishing

See **[GITHUB_SETUP.md](GITHUB_SETUP.md)** or the detailed **Word code guide** in `docs/`. Create your own GitHub repository, maintain your own commit history, and then deploy using `gh-pages` as taught in the GitHub Pages lecture.

**Important:** The ZIP is *not* already published or connected to your GitHub account. You must configure your own username, repository, and GitHub authentication.

## Phase 1 submission checklist

- [x] React frontend with at least five pages (seven included).
- [x] Dynamic pages for searching, filtering, sorting and saving.
- [x] Responsive desktop/mobile layouts.
- [x] README with description, instructions, screenshots.
- [x] Academic report PDF included under `docs/`.
- [ ] Publish to **your** GitHub repository and demonstrate genuine Git commit history.
- [ ] Publish the frontend to **your** GitHub Pages URL.
- [ ] Supply repository URL, report PDF and group contribution statement in Classroom.

Original coursework intended for adaptation and understanding by the submitting student. The source code is an original WeScore implementation and not a copy of the instructor's sample campus project.
