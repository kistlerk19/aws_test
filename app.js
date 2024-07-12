const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Amalitech AWS ReStart We need our Stipends!!!");
});

app.listen(8080, () => {
    console.log("Server listening on port 3000...");
});