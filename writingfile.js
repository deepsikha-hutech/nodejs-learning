const fs = require('node:fs');

const content = 'Some content!';

fs.writeFile('D:\\training\\nodejs-learning\\filedescriptors.js', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
