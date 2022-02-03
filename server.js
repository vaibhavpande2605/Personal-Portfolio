const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("", () => {
  resizeBy.send("welcome to my from");
});

app.post("/api/forma", (req, res) => {
  let data = req.body;

  // sat is protocol for transporting messages every mail providers support this protocol
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    //    the port of connect
    port: 465,
    //    for authenticate
    auth: {
      user: "vaibhavpande193@gmail.com",
      pass: "Omsai@123",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "vaibhavpande193@gmail.com",
    subject: ` ${data.subject}`,
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
   
      if (error) 
      res.send({error})
      else {
        res.send('successs')
      }
   
  });

  smtpTransport.close();
});



const PORT = process.env.PORT||3001;



app.listen(PORT, () =>{
 console.log(`Server running on port ${PORT} 🔥`);
 
 
});