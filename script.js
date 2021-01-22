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