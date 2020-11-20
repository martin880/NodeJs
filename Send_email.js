var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'martinlumbangaol880@gmail.com',
        pass: ''
    }
});

var mailOptions = {
    from: 'martinlumbangaol880@gmail.com',
    to: 'pb161510063@upbatam.ac.id',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: '<h1>Hellooooo</h1>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});