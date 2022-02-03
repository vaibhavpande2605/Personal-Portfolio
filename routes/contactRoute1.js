 const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const nodemailer = require('nodemailer');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());


app.get("/", (req, res) => {
    resizeBy.send('welcome to my form')
  
});


router.post("/contact", (req, res) => {
    let data = req.body;
  
    // sat is protocol for transporting messages every mail providers support this protocol
    let smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      //    the port of connect
      port: 465,
      //    for authenticate
      auth: {
        user: "vaibhavpande194@gmail.com",
        pass: "Omsai@123",
      },
    });
    let mailOptions = {
      from: data.email,
      to: "vaibhavpande194@gmail.com",
      subject: `Message from ${data.name}`,
      html: `
      <h3>Information</h3>
      <ul>
       <li>Name: ${data.name}</li>
       <li>email: ${data.email}</li>
       <li>subject: ${data.subject}</li>
      </ul>
      
      <h3>Message</h3>
      <p>${data.message}</p>
      `,
    };
    smtpTransport.sendMail(mailOptions, (error, response) => {
      try {
        if (error) return res.status(400).json({ msg:" error" });
        else {
          return res.status(200).json({ msg: "Messsage was sent" });
        }
      } catch (error) {
        res.status(500).json({ msg: error });
      }
    });

    smtpTransport.close();
  });
  
  module.exports = router;
  