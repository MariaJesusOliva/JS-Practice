 
//Ask name
const name = prompt("¿Cuál es tu nombre?");
//Take first initial
const firstInitial = name.slice(0,1);
//Seaching second initial position
const secondInitialPosition = name.indexOf(" ") +1;
//Take second initial
const secondInitial = name.slice(secondInitialPosition,secondInitialPosition+1);
//Plus initials
const firstLetters = firstInitial+secondInitial;
//Turn initials into majuscule
const firstLettersFinal = firstLetters.toUpperCase();
//Show it
document.write(firstLettersFinal);