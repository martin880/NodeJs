var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text,,saya sedang belajar node js', function(err) {
    if (err) throw err;
    console.log('Replaced!');
});