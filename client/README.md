# NekoGoo Baka Hub

## Web App ([site](https://nekogoo.github.io), [repo](https://github.com/NekoGoo/nekogoo.github.io))

Personal site for hobbies, aspirations, game news, game design, engine info, and patch notes.

## Game Development Overview

I'm presently working on a single-player fantasy adventure game with dynamic story telling; it can draw from a continually expanding pool of community content.&nbsp; Players begin with access to the game's main story and can gain the ability to opt into community content as the first of many account-wide unlocks.

The game will stand upon the Erotic RPG Engine (eRPGe), a RPG creation tool focused on browser interactions and management of erotic game data.&nbsp; Its engine will utilize modern cloud backup and optimized to rapidly read large quantities of content.

---

<!-- ## System Inspirations

> **Game Features**: The rules that govern and guide player actions in relation to the game world's response to them.

- Corruption of Champions [Wiki](https://wiki.smutosaur.us/CoC/Main_Page 'Erotic browser based flash text game')
- Sims 3 [Wikia](http://sims.wikia.com/wiki/The_Sims_Resource 'fan site'), [Relationships](https://strategywiki.org/wiki/The_Sims_3/Relationships 'Basic concepts to relationships in the Sims 3'), [Life States](https://sims.fandom.com/wiki/Life_state 'Special appearance and abilities')

--- -->

### Project Tech Stack

_Languages:_ HTML, CSS, JavaScript, SCSS, TypeScript

Angular, Angular Material, NGRX (data store, redux)

### Dev Run Steps

Find the container ID or name

```bash
docker ps
```

Access the running dev container

```bash
docker exec -it --user vscode <container_id_or_name> /bin/bash
```

Navigate to the project directory and run the app

```bash
cd /workspaces/nekogoo.github.io/client
npm run dev
```

### Project Commands Used

Generate a new Angular application ([tutorial](https://angular.io/tutorial/toh-pt5), [layouts](https://indepth.dev/posts/1235/how-to-reuse-common-layouts-in-angular-using-router-2), [RxJS](https://www.learnrxjs.io))

```bash
ng new <app-name>
```

Install [Tailwind CSS](https://tailwindcss.com/docs/guides/angular) with configuration file ([CheatSheet](https://nerdcave.com/tailwind-cheat-sheet), [Need-to-Know](https://www.bitovi.com/blog/tailwind-css-with-angular-v12-what-you-need-to-know), [Use with preprocessors](https://tailwindcss.com/docs/using-with-preprocessors), [Box Shadow](https://tailwindcss.com/docs/box-shadow))

```bash
npm i -D tailwindcss
npx tailwindcss init
```

Install [Angular Material](https://material.angular.io) ("custom" theme, 'y' typography, 'y' animations) ([background](https://material.angular.io/guide/theming#application-background-color))

```bash
ng add @angular/material
```

Install [NGRX](https://ngrx.io) [Store](https://ngrx.io/guide/store) for state management

```bash
ng add @ngrx/store --minimal=false --statePath=core/store
ng add @ngrx/store-devtools --skip-confirmation
ng add @ngrx/effects --skip-confirmation
ng add @ngrx/entity --skip-confirmation
ng add @ngrx/data --skip-confirmation
```

- [Vite as development server](https://angular.io/guide/esbuild#vite-as-a-development-server): v17+, is encapsulated within the Angular CLI dev-server builder and currently cannot be directly configured
- [Hot Module Replacement](https://angular.dev/tools/cli/esbuild#hot-module-replacement) is planned for a future version

---

#### Deployment Options

Install [GitHub Pages deployment package for Angular](https://www.npmjs.com/package/angular-cli-ghpages) ([Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows))

```bash
ng add angular-cli-ghpages
```

---

### Angular 'generate' Commands Used

Generate a new Angular component

```bash
ng g c <component-name>
```

Generate a new Angular module

```bash
ng g m <module-name>
```

Generate a new Angular route guard

```bash
ng g g <guard-name>
```

---

### Angular 'update' Commands Used

[Update](https://update.angular.io) Angular framework ([version compatibility](https://angular.io/guide/versions)), Angular Materials, and [NgRx](https://ngrx.io/guide/migration/v17)

```bash
ng update @angular/core@<release-version> @angular/cli@<release-version>
ng update @angular/material@<release-version>
ng update @ngrx/store@<release-version>
```

### Angular Migration Commands (optional)

[Migrate](https://material.angular.io/guide/mdc-migration) legacy Material components to MDC-based ones

```bash
ng generate @angular/material:mdc-migration
```

[Migrate](https://angular.io/guide/standalone-migration) existing Angular project to standalone

```bash
ng generate @angular/core:standalone
```

[Migrate](https://blog.angular.io/introducing-angular-v17-4d7033312e4b) existing Angular project to use new [control flow](https://angular.io/guide/control_flow) (v17+)

```bash
ng generate @angular/core:control-flow
```
