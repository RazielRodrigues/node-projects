const express = require('express');
const router = express.Router();

router.post("/create", (req, res) => {
    res.send("CREATE")
})

router.get("/read", (req, res) => {
    res.send("READ")
})

router.put("/update", (req, res) => {
    res.send("UPDATE")
})

router.delete("delete", (req, res) => {
    res.send("DELETE")
})

const download = (req, res, next) => {
    console.log('Downloading...')
    next();
}

router.get("/download", download, (req, res) => {
    res.download(__dirname + './../../public/download/travel.txt')
})

module.exports = router;