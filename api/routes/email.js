// To setup product related routes.
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'axel86@ethereal.email',
        pass: 'WEVpVkQk79x36hhhPv'
    }
});

router.get('/', (req, res, next) => {
    
    const options = {
        from: 'diego@teste.com.br',
        to: 'diegonassula@gmail.com',
        subject: 'Reset Password',
        html: `You are receiving this email because you(maybe someone else) wanted to change your password.\nIf it was not you, ignore this email.`,
        attachments: [
            {   // file on disk as an attachment
                filename: 'icon.png',
                path: './files/icon.png' // stream this file
            }
         ]
      };

      /**
       * 
       * attachments: [
            {   // utf-8 string as an attachment
                filename: 'text1.txt',
                content: 'hello world!'
            },
            {   // binary buffer as an attachment
                filename: 'text2.txt',
                content: new Buffer('hello world!','utf-8')
            },
            {   // file on disk as an attachment
                filename: 'text3.txt',
                path: '/path/to/file.txt' // stream this file
            },
            {   // filename and content type is derived from path
                path: '/path/to/file.txt'
            },
            {   // stream as an attachment
                filename: 'text4.txt',
                content: fs.createReadStream('file.txt')
            },
            {   // define custom content type for the attachment
                filename: 'text.bin',
                content: 'hello world!',
                contentType: 'text/plain'
            },
            {   // use URL as an attachment
                filename: 'license.txt',
                path: 'https://raw.github.com/andris9/Nodemailer/master/LICENSE'
            },
            {   // encoded string as an attachment
                filename: 'text1.txt',
                content: 'aGVsbG8gd29ybGQh',
                encoding: 'base64'
            },
            {   // data uri as an attachment
                path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
            }
         ]}
       */



      
    
      transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: "Internal Server Error!" });
        }
        console.log(info.response);
    
        return res.status(200).json({ success: "Email sent successfully!!" });
    })
});

router.post('/', (req, res, next) => {
       res.status(201).json({
           message: 'Handling POST requests to /products'
       });
});



module.exports = router;