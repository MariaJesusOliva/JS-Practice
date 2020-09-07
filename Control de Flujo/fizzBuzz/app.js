//show all numbers
for(let numb = 1; numb <=100; numb++) 
//put fizzbuzz
if (numb % 3 === 0 && numb % 5 ===0) {
    console.log('FizzBuzz');
//put buzz
  } else if (numb % 5 === 0) {
    console.log('Buzz');
//put fizz
  } else if (numb % 3 === 0 ){
      console.log('Fizz')
  } else {
    console.log(numb);
}