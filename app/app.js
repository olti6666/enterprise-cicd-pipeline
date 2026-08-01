const express = require("express");

const app = express();

<<<<<<< HEAD
const PORT = process.env.PORT || 3000;

const ENV = process.env.ENVIRONMENT || "LOCAL";

app.get("/", (req, res) => {

    res.send(`Application running in ${ENV}`);

});

=======
const PORT = 3000;


app.get("/", (req, res) => {

    res.send("Enterprise CI/CD Application Running");

});


>>>>>>> main
app.get("/health", (req, res) => {

    res.status(200).send("OK");

});

<<<<<<< HEAD
=======

>>>>>>> main
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});