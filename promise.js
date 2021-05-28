/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-console */
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}.`);
    if (location === 'Google') {
      resolve('Successfully Googled');
    } else {
      reject('Failed - did not Google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra info + ${response}.`);
  });
}

makeRequest('Facebook')
  .then((response) => {
    console.log('Response received.');
    return processRequest(response);
  })
  .then((processedResponse) => console.log(processedResponse))
  .catch((error) => {
    console.log(error);
  });
