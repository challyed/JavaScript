var randomid= Math.random();

var fname = prompt("What is your name?");
confirm("Is this correct? Your name is " + fname);

var gender = prompt("Are you a boy or girl?");
confirm("You are a " + gender);

var age = prompt("How old are you?");
if(age<13){
  alert("you are too young to have a pokemon");

} else {
alert("Your're " + age + "? Congrats!");
}

var poke =  prompt("What pokemon are you going to pick? charmander or squirtle");

if(poke === 'charmander'){
  alert("The fire type," + poke + ".");
}

else if(poke=== 'squirtle'){
  alert("The water type," + poke + ".");
}

else{
   alert("That's a cool one too" + poke + " .");
}

alert("Here is your poke id, #" + randomid + ".");
