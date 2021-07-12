// >> Object Master Asssignment

const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// # 1 :
const list1 = [...pokémon];
const number1 = list1.filter( val => val.id % 3 === 0 );
console.log(number1);

// # 2 :
const list2 = [...pokémon];
const number2 = list2.filter( val => val.types.includes("fire") );
console.log(number2);

// # 3 :
const list3 = [...pokémon];
const number3 = list3.filter( val => val.types.length > 1 );
console.log(number3);

// # 4 :
const list4 = [...pokémon];
const number4 = list4.map( val => val.name );
console.log(number4);

// # 5 :
const list5 = [...pokémon];
const number5 = list5.filter( val => val.id > 99 ).map( val => val.name );
console.log(number5);

// # 6 :
const list6 = [...pokémon];
const number6 = list6.filter( val => val.types.includes("poison") ).map( val => val.name );
console.log(number6);

// # 7 :
const list7 = [...pokémon];
const number7 = list7.filter( val => val.types[1] === "flying" ).map( val => val.types[0] );
console.log(number7);

// # 8 :
const list8 = [...pokémon];
const number8 = list8.filter( val => val.types.includes("normal") );
console.log(number8.length);