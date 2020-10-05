const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

const commander = require('./checkArgs');
const cipher = require('./ceaserCipher.js');
const transformStream = require('./transformStream');

const { action, shift, input, output } = commander.opts();

const readStrem = input
  ? fs.createReadStream(path.join(__dirname), input)
  : process.stdin;

const writeStream = output
  ? fs.createWriteStream(path.join(__dirname, output), { flags: 'a+' })
  : process.stdout;

const transform = new transformStream(cipher, action, shift);

pipeline(readStrem, writeStream, (err) => {
  if (err) {
    console.log(`Error message: ${err}`);
  } else {
    console.log(`pipe done`);
  }
});
