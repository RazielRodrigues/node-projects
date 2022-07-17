require("dotenv").config()
const express = require('express');
const multer = require('multer');
const createTransporter = require("./createTransport")

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

                emailTransporter.sendMail(mailOptions, (err, res) => {
                    if (err) {
                        console.log(err);
                    }

                    console.log("Email sent: " + info.response);

                    fs.unlink(attachmentPath, function (err) {
                        if (err) {
                            return res.end(err);
                        } else {
                            console.log(attachmentPath + " has been deleted");
                            return res.redirect("/success.html");
                        }
                    });

                })

            } catch (error) {
                return console.log(error);
            }

        }
    });
});