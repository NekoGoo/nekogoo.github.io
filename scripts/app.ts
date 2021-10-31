import * as _ from 'lodash';


let message: string = 'Hello, world!';
console.log(message);


interface Character {
    name_first: string;
    name_last: string;
    [key: string]: any
}

const character1: Character = {
    name_first: "Kimihito",
    name_last: "Kurusu"
}

const character2: Character = {
    name_first: "Suu",
    name_last: ""
}


function welcomeCharacter(character: Character): string {
  return `Hey, ${character.name_first} ${character.name_last}`;
}
let welcomeMessage = welcomeCharacter(character2);
console.log(welcomeMessage);
