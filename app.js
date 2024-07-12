const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Amalitech Stipends!!!");
});

app.listen(8080, () => {
    console.log("Server listening on port 3000...");
});