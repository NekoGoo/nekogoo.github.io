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

### Commands Used

Generate a new Angular application ([tutorial](https://angular.io/tutorial/toh-pt5))

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

Add [jQuery](https://jquery.com) and [Bootstrap](https://getbootstrap.com) to the application (_reminder_: add to angular.json)

```bash
npm i jquery bootstrap
npm i @types/jquery @types/bootstrap
```

Install [font awesome](https://www.npmjs.com/package/@fortawesome/angular-fontawesome)

```bash
ng add @fortawesome/angular-fontawesome
```

Install lodash

```bash
npm i lodash
npm i @types/lodash
```

Install GitHub Pages deployment package for [Angular](https://www.npmjs.com/package/angular-cli-ghpages)

```bash
ng add angular-cli-ghpages
```

- can also consider adding Angular blog ([Scully](https://scully.io), [example](https://solocoding.dev))

---

Generate a new Angular component

```bash
ng g c <component-name>
```
