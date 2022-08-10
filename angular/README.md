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

### Project Commands Used

Generate a new Angular application ([tutorial](https://angular.io/tutorial/toh-pt5), [layouts](https://indepth.dev/posts/1235/how-to-reuse-common-layouts-in-angular-using-router-2), [RxJS](https://www.learnrxjs.io))

```bash
ng new <app-name>
```

Install linting & Prettier

```bash
npm i -D eslint prettier
npm i -D eslint-config-airbnb eslint-config-airbnb-typescript
npm i -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-html
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Install Angular Material ("custom" theme, 'y' typography, 'y' animations) ([background](https://material.angular.io/guide/theming#application-background-color))

```bash
ng add @angular/material
```

Install [Angular Flex-Layout](https://github.com/angular/flex-layout) ([wiki](https://github.com/angular/flex-layout/wiki), [API](https://github.com/angular/flex-layout/wiki/API-Documentation))

```bash
npm i @angular/flex-layout
```

Install [GitHub Pages deployment package for Angular](https://www.npmjs.com/package/angular-cli-ghpages) ([Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows))

```bash
ng add angular-cli-ghpages
```

Install [NGRX](https://ngrx.io) [Store](https://ngrx.io/guide/store) for state management

```bash
ng add @ngrx/store --minimal=false --statePath=core/store
```

---

[Default Angular component css display block](https://stackoverflow.com/questions/51032328/angular-component-default-style-css-display-block) (generated components will contain css `:host { display: block; }`)

```json
...
// Set default value in angular.json (Angular v9.1+)
"projectType": "application",
"schematics": {
  "@schematics/angular:component": {
    "displayBlock": true
  }
}
...
```

Install lodash

```bash
npm i lodash
npm i @types/lodash
```

- also consider adding Angular blog ([Scully](https://scully.io), [example](https://solocoding.dev))

### Angular Commands Used

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
