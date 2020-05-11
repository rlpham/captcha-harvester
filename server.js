const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(PORT, function() {
    console.log(`Server started on localhost:${PORT}`)
});
