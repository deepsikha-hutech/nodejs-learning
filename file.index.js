const fs = require('node:fs');

fs.stat('D:\\training\\nodejs-learning\\filedescriptors.js', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  stats.isFile(); // true
  stats.isDirectory(); // false
  stats.isSymbolicLink(); // false
  stats.size; // 1024000 //= 1MB
});



fs.stat('D:\\training\\nodejs-learning\\filedescriptors.js', (err, stats) => {
  if (err) {
    console.error(err);
  }
  // we have access to the file stats in `stats`
});

