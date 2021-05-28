// packages
import axios from 'axios';

// get data

const ryanPromise = axios.get('https://api.github.com/users/ryanroat');
const scottPromise = axios.get('https://api.github.com/users/stolinski');
const wesPromise = axios.get('https://api.github.com/users/wesbos');

Promise
  .all([ryanPromise, scottPromise, wesPromise])
  .then(([ryan, scott, wes]) => {
    console.log(ryan.data.name, scott.data.name, wes.data.name);
  });
