

function checkDriverAge(age) {
  var age = prompt("What is your age?");
  if (Number(age) < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    console.log("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
  }
};



//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

var checkDriverAge2 = function() {
  var age = prompt("What is your age?");
	if (Number(age) < 18) {
		console.log("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
    console.log("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
	}

};
checkDriverAge2()


//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

function checkDriverAge(age){
  if(Number(age) < 18 ){
    console.log("Sorry but you are too young to be driving. Powering off.");
  } else if (Number (age) > 18 ){
    console.log("Powering on. Drive safe");
  } else {
    console.log("Congratulations on your first year of driving");
  }
};

checkDriverAge();