# NekoGoo Baka Hub

## Main Run Commands

- `npm start`
- `npm run build`

## Project Setup - Notable Steps & Commands

> Project Technology Stack & References

### [Scaffold Vue Project With Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

- `npm init vite@latest <project-name> -- --template vue-ts`
- `cd <project-name>`
- create project _README.md_ and _.gitignore_

#### Vue 3 + Vite Template/Scaffold

Template uses Vue 3 `<script setup>` SFCs ([script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)).

##### Recommended IDE Setup

> [VSCode](https://code.visualstudio.com) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

##### Packages automatically included by `init vite`

- `npm i vue`
- `npm i -D vite @vitejs/plugin-vue`
- `npm i -D typescript vue-tsc`

### Install Project Dependencies

> [Install and configure ESLint, Prettier, and Tailwind CSS using Vite](https://vuejsexamples.com/install-and-configure-eslint-prettier-and-tailwind-css-using-vite)

- `npm i -D eslint`
  - _.eslintrc.js_: add 'eslint:recommended' to 'extends' ([eslint rules](https://eslint.org/docs/rules))
- `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
- `npm i -D eslint-config-airbnb`
  - Applies Airbnb's JavaScript styleguide to ESLint
  - _.eslintrc.js_: add 'airbnb' to 'extends' ([eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb))
- `npm i -D eslint-plugin-vue`
- `npm i -D eslint-plugin-html`
  - _.eslintrc.js_: add 'html' to 'plugins' ([eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html))
- `npm i -D typescript sass` ([CSS Pre-processors](https://vitejs.dev/guide/features.html#css-pre-processors))
- `npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser`
- `npm i -D eslint-config-airbnb-typescript`

---

- `npm i -D bootstrap jquery lodash`
- `npm i -D @types/bootstrap @types/jquery @types/lodash`
- `npm i -D gh-pages`

---

#### Do NOT Use

- _package.json_: 'browserslist' not required with Vite ([Production Compatibility](https://vitejs.dev/guide/build.html))
- `npm i -D typescript @vue/eslint-config-typescript`
  - `@vue/eslint-config-typescript` is specifically designed for use by `@vue/cli` & `create-vue` setups
  - _.eslintrc.js_: add 'plugin:vue/vue3-essential' & '@vue/eslint-config-typescript' to 'extends' ([@vue/eslint-config-typescript](https://www.npmjs.com/package/@vue/eslint-config-typescript))

---

### Reference Links

- Markdown [Cheat Sheet](https://www.markdownguide.org/cheat-sheet 'A quick reference to the Markdown syntax')
- TypeScript [Official](https://www.typescriptlang.org/docs 'TypeScript Official Documentation'), [VS Code](https://code.visualstudio.com/docs/languages/typescript 'TypeScript in Visual Studio Code')
