
//create array
let chocoFact = [' Augustus Gloop', ' Violet Beauregarde', ' Veruca Salt', ' Mike Tevé', ' Charlie Bucket'];

// create function
const revFact = function (array) {
//new array
let newArray = [];
//define size
let size = array.length;
//define last position
let lastName = size-1;
//go travel througth array in reverse
for (let i=lastName; i>=0; i--) {
    newArray.push(array[i]); //adding next element
}
return newArray;
}
console.log(revFact(chocoFact));