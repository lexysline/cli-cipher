function ceaserCipher(str, num) {
  if (num < 0) return ceaserCipher(str, num + 26);

  let output = '';
  //   let regexp = /[a-z]/;

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (current.match(/[a-z]/i)) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        current = String.fromCharCode(((charCode - 65 + num) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        current = String.fromCharCode(((charCode - 97 + num) % 26) + 97);
      }
    }

    output += current;
  }

  return `${output}`;
}

module.export = ceaserCipher;
