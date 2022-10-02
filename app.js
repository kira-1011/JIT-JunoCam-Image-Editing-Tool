const express = require("express");
const metadataJson = require("./metadata.json");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

const PORT = 3500 | process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

app.get("/", (req, res) => {
    res.render("index",{metadataJson});
});

app.get("/editor", (req, res) => {
    res.render("editor");
});

