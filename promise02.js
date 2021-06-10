/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const url = 'https://jsonplaceholder.typicode.com/todos/2';

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
