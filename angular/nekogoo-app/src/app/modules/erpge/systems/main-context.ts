// import { mainMenu } from './main';
// import { dataScreen } from './saves';
// import { appearanceScreen, levelScreen, perksScreen, statsScreen } from './playerInfo';

//Start the game!
// console.log('--- Preparing to initialize GameContext ---');
// MAIN.mainMenu();
// const liveData = new GameContext();
// console.log('--- GameContext has been initialized ---');

// Setup game event listeners on initial page load
const buttonMainEl = document.getElementById('buttonMain');
const buttonDataEl = document.getElementById('buttonData');
const buttonLevelEl = document.getElementById('buttonLevel');
const buttonStatsEl = document.getElementById('buttonStats');
const buttonPerksEl = document.getElementById('buttonPerks');
const buttonAppearanceEl = document.getElementById('buttonAppearance');

function mainMenu2(): void {
  console.log('yo from mainMenu');
}

console.log('add event listeners');
if (buttonMainEl) console.log('button exists');
if (buttonMainEl) buttonMainEl.addEventListener('click', mainMenu2);
// if (buttonDataEl) buttonDataEl.addEventListener('click', dataScreen);
// if (buttonLevelEl) buttonLevelEl.addEventListener('click', levelScreen);
// if (buttonStatsEl) buttonStatsEl.addEventListener('click', statsScreen);
// if (buttonPerksEl) buttonPerksEl.addEventListener('click', perksScreen);
// if (buttonAppearanceEl) buttonAppearanceEl.addEventListener('click', appearanceScreen);
console.log('done adding event listeners');

// export { liveData };

export {};
