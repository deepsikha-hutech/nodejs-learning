const fs = require('node:fs');

const folderName = 'D:\\training\\nodejs-learning\\newfolder';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}
