const url = new URL('https://www.example.com/p/a/t/h?query=string');

const host = url.hostname; // example.com
const pathname = url.pathname; // /p/a/t/h
const searchParams = url.searchParams; // {query: 'string'}


//// create one:

const createdUrl = new URL('https://www.example.com');
createdUrl.pathname = '/p/a/t/h';
createdUrl.search = '?query=string';
 
createUrl.toString(); // Creates https://www.example.com/p/a/t/h?query=string



/////////////////////////////////////////////////////////////

// QUERYSTRING MODULE

const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';
const querystring = require('querystring')

// split the url just before the ? and choose the 2nd part, the query string
const queryToParse = url.split('?')[1]

// parse it (utile pour modifier l'url)
const parsedQuery = querystring.parse(queryToParse) // Returns { course: node, lesson: http}

// add an extra property
parsedQuery.exercise = 'querystring'

const modifiedQueryString = querystring.stringify(parsedQuery)