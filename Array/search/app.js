//create array
const mapuNumbers = ['Kiñe', 'Epu', 'Küla', 'Meli', 'Kechu'];
//create function
const search = function (array,element) {
    let size = array.length;
    for (let i=0; i<=size; i++) {
        if (array[i] === element) {
        return i;
        }
    }
}
console.log(search((mapuNumbers),'Epu'));