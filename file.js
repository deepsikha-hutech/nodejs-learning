const path = require('node:path');

const notes = 'D:\\training\\nodejs-learning\\filedescriptors.js';
const name = 'nodejs-learning';
path.join('/', 'nodejs-learning', name, 'filedescriptors.js'); // '/users/joe/notes.txt'


path.dirname(notes); // /users/joe
// path.basename(notes); // notes.txt
path.basename(notes, path.extname(notes)); // notes

path.extname(notes); // .txt

