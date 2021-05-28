/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
function sleep(amount) {
  return new Promise((resolve, reject) => {
    if (amount < 300) {
      return reject('too fast');
    }
    setTimeout(() => resolve(`Slept for ${amount}`), amount);
  });
}

sleep(500)
  .then((result) => {
    console.log(result);
    return sleep(1000);
  })
  .then((result) => {
    console.log(result);
    return sleep(250);
  })
  .then((result) => {
    console.log(result);
    return sleep(750);
  })
  .catch((result) => {
    console.log(result);
    return sleep(900);
  })
  .then((result) => {
    console.log(result);
    console.log('done');
  });
