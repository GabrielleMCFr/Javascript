// GET REQUEST

const getData = async () => {
    try {
      const response = await fetch('https://api-to-call.com/endpoint')
      if (response.ok ) {
        const jsonResponse = await response.json()
        return jsonResponse
      }
      throw new Error('Request failed!')
    }
    catch(error) {
      console.log(error)
    }
  }

// with async :
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint')
    if (response.ok ) {
      const jsonResponse = await response.json()
      return jsonResponse
    }
    throw new Error('Request failed!')
  }
  catch(error) {
    console.log(error)
  }
}


// POST REQUEST

const getData2 = async () => {
    try {
      const response = await fetch('https://api-to-call.com/endpoint', {
        method: 'POST',
        body: JSON.stringify({id: 200})
      })
      if(response.ok){
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch(error) {
      console.log(error);
    }
  }

// with async:

const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
    })
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}


/////////////////////////////////////////////////////////////////////
// EXO

  // information to reach API
const apiKey = '';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value
  const data = JSON.stringify({destination: urlToShorten})
  try {
    const response = await fetch(url, {
      method: 'POST', 
      body: data,
      headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
      }
    })

    if (response.ok) {
      const jsonResponse = await response.json()
      renderResponse(jsonResponse)
    }
  }
  catch(error) {
    console.log(error)
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


// ex async await with error catching
const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try {
    let value = await cookBeanSouffle()
    console.log(`${value} is served!`)
  }
  catch(error) {
    console.log(error)
    console.log('Ordering a pizza!')
  }
}

hostDinnerParty


// other exo GET

// Information to reach API
const url = 'https://api.datamuse.com/words?'
// 'rel_rhy=' is the start of a parameter for the query string. This parameter will narrow your search to words that rhyme
const queryParams = 'rel_rhy='

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value
  // endpoint will store the value of the entire URL and query string.
  const endpoint = url + queryParams + wordQuery
  // create a new xmlhttprequest
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response)
}
  }
  xhr.open('GET', endpoint)
  xhr.send()
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


// fetch await async with get
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// Code goes here
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);



// fetch await async with post
/ information to reach API
const apiKey = 'a893ce78bdee40d4b949053535d699d5';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value
  const data = JSON.stringify({destination: urlToShorten})
  try {
    const response = await fetch(url, {
      method: 'POST', 
      body: data,
      headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
      }
    })

    if (response.ok) {
      const jsonResponse = await response.json()
      renderResponse(jsonResponse)
    }
  }
  catch(error) {
    console.log(error)
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
