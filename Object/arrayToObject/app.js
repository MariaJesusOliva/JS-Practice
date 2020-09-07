const charquican = [['Protein', 'Egg'], ['Carbo', 'Potatoes'], ['Veggies', 'Pumpkin and corn']];

const toObject = function (array) {
    let newObject = {};
    let size = array.length;
    for (let i=0; i<size; i++) {
        newObject [array[i][0]] = array[i][1];
    }
    return newObject;
}
console.log(toObject(charquican));