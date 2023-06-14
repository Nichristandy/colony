export default function (req, res) {
    require('dotenv').config();

    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'colonysendmail@gmail.com',
          pass: process.env.password,
        },
        secure: true,
      })

      const mailData = {
        from: 'colonysendmail@gmail.com',
        to: 'colonyutopia@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div>
        <p>Sent from:${req.body.email}</p>
        <p>Phone number: ${req.body.phone}</p>
        <p> Full Name: ${req.body.name}</p>
        <div>request: ${req.body.request}</div>
        <div>attached file: ${req.body.attach}</div>`
       }

       transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })

    console.log(req.body)
  }