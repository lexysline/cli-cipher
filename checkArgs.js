const fs = require('fs');
const { program } = require('commander');

program
  .storeOptionsAsProperties(false)
  .requiredOption('-a, --action [type]', 'an action encode/decode')
  .requiredOption('-s, --shift <number>', 'a shift')
  .option('-i, --input', 'an input file')
  .option('-o, --output', 'an output file');

program.parse(process.argv);

// console.log(action)

module.exports = program;
