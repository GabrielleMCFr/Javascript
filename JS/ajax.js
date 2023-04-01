// CODE PASSE PARTOUT POUR REQUETE GET AJAX USING AN XMLHTTPREQUEST OBJECT IN VANILLA JAVASCRIPT.
//  AJAX stands for Asynchronous JavaScript and XML


// declare xhr et le format de reponse et l url 
const xhr = new XMLHttpRequest()
const url = 'https://api-to-call.com/endpoint'

xhr.responseType = 'json'

// event
xhr.onreadystatechange = () => {
  // checks to see if the request has finished and return reponse
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response
  }
}

// .open() creates a new request and the arguments passed in determine the type and URL of the request
xhr.open('GET', url)
xhr.send()


///////////////////////////////////////////////////////////////////////////////


// AJAX POST:
// XHR POST Request

const xhr = new XMLHttpRequest()
const url = 'https://api-to-call.com/endpoint'
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json'

// event
xhr.onreadystatechange = () => {
  // ça ça doit être pour etre sur que la requete est effectuee
  if ( xhr.readyState === XMLHttpRequest.DONE) {
    // The response property will contain the data that we’re getting back from the POST request
    return xhr.response
  }
}

xhr.open('POST', url)
xhr.send(data)



///////////////////////////////////////////////////////////////////////////



// USED IN REAL EXO : 

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