 
//ask sentence
let motSent = prompt ('Tell me a motivational sentence!')
//fuction to put phrase in separate lines
//create function
const sepaSent = function (array) {
    let newArray =[];
    let numArray = array.value;
    let size = numArray.length;
for (let i=0; i>=size; i++) {
    newArray.push(array[i]);
}
    return newArray
}
console.log(sepaSent(motSent));
//fuction to count characters
//fuction to count spaces