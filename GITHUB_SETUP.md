# WeScore — GitHub and GitHub Pages guide

This uses the same Git / `gh-pages` approach taught in **React Project Deployment to GitHub Pages.pdf**.

## A. First test locally

1. Open the extracted `WeScore` folder in VS Code.
2. In the terminal run `npm install` (with internet access).
3. Run `npm start`, then verify every page, search, favourite and contact form.
4. Run `npm run build` and check for a successful build.

## B. Create a GitHub repository

1. Sign in to https://github.com/.
2. Create an **empty** repository named `WeScore` (do not add an online README at creation if you already have one).
3. Run in your project directory, replacing `YOUR-USERNAME`:

```bash
git init
git add .
git commit -m "Initial WeScore Phase 1 frontend"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/WeScore.git
git push -u origin main
```

`git status` shows changes; `git log --oneline` lists your commits. Commit and push any real subsequent changes to build a genuine history. GitHub sign-in may require credential manager or a personal access token; do not store tokens in the repository.

## C. Add the project homepage and deploy

In `package.json`, add this **top-level** field before the `scripts` section, replacing the username:

```json
"homepage": "https://YOUR-USERNAME.github.io/WeScore"
```

For GitHub Pages, the repository name in `homepage` must match your actual repository name **including capitalization**. `App.js` uses `BrowserRouter` with `basename={process.env.PUBLIC_URL}` to make internal React links work when served from `/WeScore/`.

The scripts already exist in `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Then run:

```bash
npm install
npm run deploy
```

If you have not installed `gh-pages` yet, `npm install` installs it from the project's devDependencies. You can also use the doctor's command: `npm install gh-pages --save-dev`.

On GitHub visit **Repository → Settings → Pages**. Choose **Deploy from branch**, select `gh-pages` and `/ (root)`, save. The published homepage should be:

```
https://YOUR-USERNAME.github.io/WeScore/
```

## D. Publish future changes

```bash
git add .
git commit -m "Improve match and team pages"
git push
npm run deploy
```

Make the commit message describe **actual changes**. For the report screenshot, use GitHub's commit history page. This ZIP does not contain a remote or artificial commit history.

### Important React Router caveat on GitHub Pages

`BrowserRouter` is the routing approach in the doctor's lessons. With GitHub Pages, direct refresh of `/WeScore/matches` may display a GitHub 404 because GitHub Pages does not provide a general server-side React fallback. Navigating through the app from the homepage works. If a direct-refresh fix is required, ask the doctor whether a suitable routing strategy is acceptable; do not silently replace taught `BrowserRouter` with an unfamiliar method.

### Deployment troubleshooting

- **Blank page:** check `homepage` value and repository name, run `npm run build` and `npm run deploy` again.
- **404 after opening subpage directly:** use site homepage and navigate via links (the GitHub Pages limitation above).
- **Permission denied:** verify you own the repository and are signed in for Git operations.
- **`gh-pages` not found:** run `npm install` while online.
- **CSS missing:** confirm the bundle was deployed from the latest `build` output.
- **Incorrect remote:** run `git remote -v` and update only if needed.

No GitHub repository or public website has been created on your behalf. You must publish it yourself with your credentials.
