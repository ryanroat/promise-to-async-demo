/* eslint-disable linebreak-style */
/* eslint-disable no-console */
fetch('https://api.github.com/users/ryanroat')
  .then((userData) => userData.json())
  .then((user) => console.log(user));
