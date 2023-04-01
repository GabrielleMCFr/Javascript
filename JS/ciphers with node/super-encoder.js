// use bash command : node super-encoder.js encode or node super-encoder.js decode

// Import the encryptors functions here.
const encryptors = require('./encryptors.js')
const { caesarCipher } = encryptors;
const { symbolCipher } = encryptors;
const { reverseCipher } = encryptors;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  const afterCaesar = caesarCipher(str, 11);
  const afterSymbol = symbolCipher(afterCaesar);
  const afterReverse = reverseCipher(afterSymbol);
  return afterReverse;
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  const decReverse = reverseCipher(str);
  const decSymbol = symbolCipher(decReverse);
  const decCaesar = caesarCipher(decSymbol, -11);
  return decCaesar;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);