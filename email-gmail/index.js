require("dotenv").config()
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000 || proccess.env.PORT;

app.listen(PORT);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./attachments");
    },
    filename: (req, file, callback) => {
        callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
})

app.get("/", (req, res) => {
    res.sendFile('/index.html');
});

const attachmentUpload = multer({
    storage: Storage,
}).single("attachment");


// Route to handle sending mails
app.post("/send_email", (req, res) => {
    attachmentUpload(req, res, function (error) {
        if (error) {
            console.log(err);
            return res.send("Error uploading file");
        } else {
            const recipient = req.body.email;
            const subject = req.body.subject;
            const message = req.body.message;
            const attachmentPath = req.file.path;
            console.log("recipient", recipient);
            console.log("subject", subject);
            console.log("message", message);
            console.log("attachmentPath", attachmentPath);

            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: "",
                    pass: "",
                    clientId: "",
                    clientSecret: "",
                    refreshToken: ""
                }
            })

            let mailOptions = {
                from: "",
                to: "",
                subject: "",
                text: ""
            }

            transporter.sendMail(mailOptions, (err, res) => {
                if (err) {
                    console.log(err);
                }

                console.log('ok');
            })


        }
    });
});

console.log(process.env.OK)