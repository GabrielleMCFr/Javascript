// routing requests based on their method

const server = http.createServer((req, res) => {
    const { method } = req;
   
    switch(method) {
      case 'GET':
        return handleGetRequest(req, res);
      case 'POST':
        return handlePostRequest(req, res);
      case 'DELETE':
        return handleDeleteRequest(req, res);
      case 'PUT':
        return handlePutRequest(req, res);
      default:
        throw new Error(`Unsupported request method: ${method}`);
    }
  })


// ex function to handle get. Within the handleGetRequest() function, the pathname is being checked to match a known resource, '/projects'. If the pathname matches, the resource data is fetched and then subsequently dispatched from the server as a successful response. Otherwise, the .statusCode property is set to 404, indicating that the resource is not found, and a corresponding error message is dispatched.

function handleGetRequest(req, res) {
    const { pathname } = new URL(req.url);
    let data = {};
   
    if (pathname === '/projects') {
      data = await getProjects();
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(data));
    }
   
    res.statusCode = 404;
    return res.end('Requested resource does not exist');
   
  }






//////////////////////////////////////

const http = require('http');

// Handle get request
const handleGetRequest = (req, res) => {
  const pathname = req.url;

  if (pathname === '/users') {
    res.end(JSON.stringify([]));
  }
}

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});






/////////// autre exemple :

const http = require('http');

const handleGetRequest = (req, res) => {
  // Set GET status code here
  res.statusCode = 200
  return res.end(JSON.stringify({ data: [] }));
}
const handlePostRequest = (req, res) => {
  // Set POST status code here
  res.statusCode = 500
  return res.end("Unable to create record");
}

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    case 'POST':
      return handlePostRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});