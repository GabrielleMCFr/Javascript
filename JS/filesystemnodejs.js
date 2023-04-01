const readline = require('readline');
const fs = require('fs');

// read stuff line by line, making a stream. saves RAM.
const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
})

const printData = data => {
  console.log(`Item: ${data}`);
}

myInterface.on('line', printData)




////////////////////////////////////////////////////////////////////


// writable streams :
// read a file, and create another writing a modified version of the read line in it.
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const fileStream = fs.createWriteStream('shoppingResults.txt')

const transformData = line => {
  fileStream.write(`They were out of: ${line}\n`)
}

myInterface.on('line', transformData)