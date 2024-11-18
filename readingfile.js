const fs = require('node:fs');

fs.readFile('D:\\training\\nodejs-learning\\filedescriptors.js', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
