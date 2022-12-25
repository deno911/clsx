# ![deno911/kit - tools for publishing deno modules](https://migo.deno.dev/img.png?titleFontFamily=monospace&titleFontSize=72&titleFontWeight=400&titleTextAnchor=left&titleX=45&titleY=115&subtitleX=50&subtitleY=250&subtitleFontSize=30&subtitleFontWeight=900&subtitleFontFamily=monospace&subtitleTextAnchor=left&width=1000&height=300&bgColor=111827&titleColor=c0ffee&subtitleColor=eee&iconW=300&iconH=128&iconX=760&iconY=30&borderRadius=20&icon=fluent-emoji:sauropod&pxRatio=1.5&title=deno911⁄kit&subtitle=opinionated+starter+kit+for+deno+modules)

✔️ Pre-configured for [**GitHub Codespaces**][codespaces] and
[**Gitpod Workspaces**][gitpod]

✔️ Straightforward and easy to use, regardless of experience level

✔️ Workflows for testing and publishing to [**deno.land**][deno-land] or
[**nest.land**][nest-land]

✔️ Best practice examples for unit testing, project config, CI/CD, and more...

✔️ Built with Deno 🖤

## Features by Filename

### 🧪  `ci.yml`

Includes CI/CD workflows for automated testing + linting using
[GitHub Actions][gh-actions]. **Ensure code quality** and formatting are always
within specifications

### 🔖  `release.yml`

The workflow at `.github/workflows/release.yml` automatically creates a new
Release on your project's repository from every new tag. **Just tag and push**
to create a new release!

### 🪝  `version.ts`

By simply exporting **`prepublish`** and **`postpublish`** functions in
`version.ts`, the publishing workflow can **auto-update versions** in source
files and `README.md`, to keep examples up-to-date! [^A]

### 🥚  `egg.{json,yml}`

During the publish workflow, if an egg.json or egg.yml file is present and
properly configured, your module will be automatically released on
[**nest.land**][nest-land] as well. The integration also enables
[**auto-updating** for your project's dependencies][eggs-update] (using the
`eggs update` command [^B])

<details><summary><strong> ››› <u>Read more about the egg.json file and nest.land</u></strong></summary><br>

This starter kit comes with an egg.json file, to simplify publishing to
[**nest.land**][nest-land] using their [_'eggs'_ interface][eggs-cli]
(optional). If you're unfamiliar with Nest.land, it's a **decentralized**
registry that runs on the [**Arweave network**][arweave], exclusively for Deno
modules. Every version published to their network is **immutable** - it cannot
be edited or deleted, ever.

</details>

### 🚧  package.json

Want to publish a special Node.js version of your module to the
[**npm registry**][npm]? No sweat! Just include a `package.json` file (in the
same directory as your `deno.json` file), exactly how you would for a Node
project.

During the pre-publish process, **pub** will recognize this file and use
[**`dnt`**][dnt][^C] to build a Node-compatible version of your module. This
includes adding any necessary shims. Unless a valid token exists in the
environment as `$NPM_TOKEN` or `$NODE_AUTH_TOKEN`, you'll be prompted for
credentials to complete the step to publish to NPM.

[^A]: [uses the **_"pub"_** command-line interface][pub]\
[^B]: [uses the **_"_eggs_"_** command-line interface][eggs-update]\
[^C]: this feature is still in development 🚧

<br>

## Getting Started

This section assumes you have [**the GitHub CLI**][gh-cli].

### Generate a new repository

Create a new instance with the GitHub CLI, or just create one from your
repository homepage on github.com.

```sh
gh codespace create --repo deno911/kit
```

### [Open in a Gitpod Workspace][open-in-gitpod]

Open a new workspace by prepending `https://gitpod.io/#` to your repository URL
and visiting it in your browser:

```md
https://gitpod.io/#https://github.com/deno911/kit
```

### Code on your own machine

```sh
gh repo clone [repository]

# or, you can just fork this one:
gh repo fork deno911/kit --clone --remote
```

#### Open in Visual Studio Code

```sh
code ./[repository]

# or, if you cloned this repo to a dir named "kit":
code ./starter
```

---

## Contributing

This section assumes you have [**the GitHub CLI**][gh-cli]

### Fork and clone the repository locally

```sh
gh repo fork deno911/kit --clone
```

### Create a new branch for your changes

```sh
git checkout -b fix/typo-in-readme
```

### Make small changes and concise commits

```sh
# hack hack hack...

git commit README.md -m "fix: typos in README.md" && git push
```

> **Note**: keep the scope of your changes relevant and concise.

<details><summary><strong>🐛  <u>If fixing a bug, be sure to create an Issue first</u></strong></summary><br>

Unless, of course, you're fixing a bug for which an issue already exists!

This allows the issue to be connected to your Pull Request, creating a permanent
record of your contribution to the project. It also makes it easier for
maintainers to track project progression.

Creating an issue also ensures you're given proper credit for fixing that bug ;)

</details>

### Open a Pull Request

```sh
gh pr create --title "fix: typos in README.md"
```

**Or just open your repo on GitHub.com and follow the prompts.**

> **Warning**: make sure you select the upstream repo for your PR!

---

<div align="center">

### [🅓🅔🅝🅞⑨①①][deno911]

</div>

[arweave]: https://arweave.org "Arweave Blockchain"
[codespaces]: https://github.com/features/codespaces "GitHub Codespaces Documentation"
[deno911]: https://github.com/deno911 "Projects by Deno911 on GitHub"
[deno-land]: https://deno.land "Deno.land - Official Module Registry"
[nest-land]: https://nest.land "Nest.land - Immutable Module Registry"
[dnt]: https://deno.land/x/dnt "dnt - Deno to Node Transformer"
[eggs-update]: https://docs.nest.land/eggs/updating-all-of-your-dependencies "Nest.land Documentation - Updating Dependencies with the Eggs CLI"
[eggs-cli]: https://docs.nest.land/eggs "Nest.land Documentation - the Eggs CLI"
[gh-cli]: https://cli.github.com "GitHub CLI Homepage"
[gh-actions]: https://actions.github.com "GitHub Actions Documentation"
[gitpod]: https://gitpod.io "Gitpod.io Homepage"
[npm]: https://npmjs.org "NPM Registry"
[open-in-gitpod]: https://gitpod.io/#https://github.com/deno911/kit "Open in a new Gitpod Workspace"
