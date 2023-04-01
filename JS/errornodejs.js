// DO : 
// Here we wrote an error-first callback function. This callback does the error handling so there’s no need for a try...catch statement. This is how most Node asynchronous APIs are set up to handle errors. In app.js we require in the api.js module. This time, we’ll use an asynchronous method, api.errorProneAsyncApi(), designed to work like the asynchronous methods in Node.
const api = require('./api.js');

// An error-first callback
let errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};

api.errorProneAsyncApi('problematic input', errorFirstCallback)





// DONT : the error wont be caught that way :
const api = require('./api.js');

// Not an error-first callback
let callbackFunc = (data) => {
   console.log(`Something went right. Data: ${data}\n`);
};
  
try {
  api.naiveErrorProneAsyncFunction('problematic input', callbackFunc);
} catch(err) {
  console.log(`Something went wrong. ${err}\n`);
}

