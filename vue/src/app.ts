// import _ from 'lodash';
// import bootstrap from 'bootstrap';

const message = 'Hello, world!';
console.log(message);

interface Character {
  name_first: string;
  name_last: string;
  [key: string]: unknown;
}

// const character1: Character = {
//   name_first: 'Kimihito',
//   name_last: 'Kurusu',
// };

const character2: Character = {
  name_first: 'Suu',
  name_last: '',
};

function welcomeCharacter(character: Character): string {
  return `Hey, ${character.name_first} ${character.name_last}`;
}
const welcomeMessage = welcomeCharacter(character2);
console.log(welcomeMessage);

// -------- Enable BootStrap Tooltips (old method) --------
// $(function() {
//     // Enable Bootstrap tooltips everywhere // https://getbootstrap.com/docs/4.6/components/tooltips
//     $('[data-bs-toggle="tooltip"]').tooltip();
// });

// -------- Enable BootStrap Tooltips --------
// const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
// const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl);
// });

function bg_body(bgColor) {
  document.body.style.backgroundColor = bgColor;
}

function bg_app(bgImage = 'none') {
  const app = document.getElementById('app');
  if (!app) return;
  app.style.backgroundImage = bgImage;
  app.style.backgroundRepeat = 'no-repeat';
}

export { bg_body, bg_app };
