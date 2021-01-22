var database = [
  {
    username: 'Andrew',
    password: 'password'
  },
  {
    username: 'Lindsay',
    password: 'password'
  },
  {
    username: 'Ruth',
    password: 'password'
  }
];

var newsFeed = [
  {
    username: 'Jakub',
    timeline: 'So tired from all that learning'
  },
  {
    username: 'Sally',
    timeline: 'JavaScript is soooo coool!'
  },
  {
    username: 'Ruth',
    timeline: 'Meow meow meow'
  }
];
function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === username &&
      database[i].password === password) {
      return true;
  }
}
return false;
};

function signIn(username, password) {

  if (isUserValid(username, password)) {
        console.log(newsFeed);
  } else {
    alert ("Sorry, wrong username and password");
  }
};

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");



signIn(userNamePrompt, passwordPrompt);