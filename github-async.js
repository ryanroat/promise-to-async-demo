// packages
import axios from 'axios';

// get data
const getDetails = async function () {
  const ryanPromise = axios.get('https://api.github.com/users/ryanroat');
  const scottPromise = axios.get('https://api.github.com/users/stolinski');
  const wesPromise = axios.get('https://api.github.com/users/wesbos');

  const promises = [ryanPromise, scottPromise, wesPromise];

  const [ryan, scott, wes] = await Promise.all(promises);
  console.log(ryan.data.name, scott.data.name, wes.data.name);
};

getDetails().catch((error) => {
  console.log('ERROR!');
  console.error(error);
});
