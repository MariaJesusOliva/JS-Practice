
 //create var age and ask menu
 let age = parseInt(prompt('¿How old are you?'));
 if (age < 3) {
    alert('You are a toddler');
  } else if (age < 5) {
        alert('You are a preschool.');
  } else if (age < 12) {
        alert('You are a gradeschooler.');
  } else if (age < 18) {
    alert('You are a teenager.');
  } else if (age < 21) {
    alert('You are a young adult');
  } else if (age < 40) {
    alert('You are an adult');
} else {
    alert('ERROR! Write an integer')
}