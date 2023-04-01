// EXAMPLE GET

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function
// Code goes here
const getSuggestions = async () => {
  const wordQuery = inputField.value
  const endpoint = url + queryParams + wordQuery
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'})
    if (response.ok) {
      const jsonResponse = await response.json()
      renderResponse(jsonResponse)
    }
  }
  catch(error) {
    console.log(error)
  }
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


// WHAT CHANGES FOR POST
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
			method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
				'apikey': apiKey
      }
    });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}
