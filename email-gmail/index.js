const express = require('express');
const app = express();
const PORT = 3000 || proccess.env.PORT;

app.listen(PORT);
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile('/index.html');
});
