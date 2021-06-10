/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const loadData = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/5';
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};

loadData();
