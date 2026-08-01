const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const ENV = process.env.ENVIRONMENT || "LOCAL";


app.get("/", (req, res) => {

    res.send(`Application running in ${ENV}`);

});


app.get("/health", (req, res) => {

    res.status(200).send("OK");

});


app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});