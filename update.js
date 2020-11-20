var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' Saya sedang belajar node js.', function(err) {
    if (err) throw err;
    console.log('Updated!');
});