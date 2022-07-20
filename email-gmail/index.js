require("dotenv").config()
const express = require('express');
const createTransporter = require("./src/createTransport")
const attachmentUpload = require("./src/diskStorage")
const fs = require('fs');
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile('/index.html');
});

// Route to handle sending mails
app.post("/send_email", (req, res) => {
    attachmentUpload(req, res, async function (error) {
        if (error) {
            console.log(err);
            return res.send("Error uploading file");
        } else {

            const recipient = req.body.email;
            const subject = req.body.subject;
            const message = req.body.message;
            const attachmentPath = req.file.path;

            let mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: recipient,
                subject: subject,
                text: message,
                attachments: [
                    {
                        patch: attachmentPath
                    },
                ],
            }

            try {

                let emailTransporter = await createTransporter()
                emailTransporter.sendMail(mailOptions, function (err) { if (err) console.log(err); })

                fs.unlink(attachmentPath, function (err, res) { });

                return res.redirect("/success.html");

            } catch (error) {
                return console.log(error);
            }

        }
    });
});

app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening on port ${process.env.PORT}`);
});