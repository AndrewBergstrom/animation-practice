var database = [
  {
    username:'Andrew',
    password:'password'
  }
];

var newsFeed = [
  {
    username:'Jakub',
    timeline:'So tired from all that learning'
  },
  {
    username:'Sally',
    timeline:'JavaScript is soooo coool!'
  }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");

function signIn(username, password) {
  if (username === database[0].username && password === database[0].password) {
        console.log(newsFeed);
  } else {
    alert ("Sorry, wrong username and password");
  }
};

signIn(userNamePrompt, passwordPrompt);

// function declaration
function newFunction(){

};

// function expression
var newFunction = function () {

};

// function expression w/ name
var newFunction = function nameFunction() {

};

// function expression / anonymous function
var newFunction = function() {

};

// Expression - something that produces a value
1 + 3;
var a =2;
return true;

// calling or invoking a function
alert()
newFunction(param1, param2);

// assign a variable
var a = true;

// function vs method
function thisIsAFunction(){

};

var obj = {

  thisIsAMethod:function(){

  }
};
// how we access a function: calling or invoking the function
thisIsAFunction(); 

// how we access a method: using the dotin front of it
obj.thisIsAMethod()
