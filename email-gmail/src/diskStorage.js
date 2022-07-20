const multer = require('multer');

const Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./../attachments");
    },
    filename: (req, file, callback) => {
        callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
})

const attachmentUpload = multer({
    storage: Storage,
}).single("attachment");

module.exports = attachmentUpload;