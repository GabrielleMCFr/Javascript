fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'})
})
.then(response => {
  if (response.ok) {
    return response.json()
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message)
})
.then(jsonResponse => {
  return jsonResponse
})


////////////////////////////////////////////////////////////////////////////////

// exo with rebrandly or whatever to shorten urls

// Information to reach API
const apiKey = '';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value
  const data = JSON.stringify({destination: urlToShorten})

  fetch(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json', 'apikey': apiKey},
    body: data
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Request failed!')
    }, networkError => {
      console.log(networkError.message)
    })
  .then(jsonResponse => {
    renderResponse(jsonResponse)
  })
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
