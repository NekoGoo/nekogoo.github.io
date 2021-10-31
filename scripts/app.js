let message = 'Hello, world!';
console.log(message);
const character1 = {
    name_first: "Kimihito",
    name_last: "Kurusu"
};
const character2 = {
    name_first: "Suu",
    name_last: ""
};
function welcomeCharacter(character) {
    return `Hey, ${character.name_first} ${character.name_last}`;
}
let welcomeMessage = welcomeCharacter(character2);
console.log(welcomeMessage);
export {};
//# sourceMappingURL=app.js.map