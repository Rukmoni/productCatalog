const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')

const phones = require("./phones.json");
const app = express()


app.use(cors())

const PORT = 5000;



app.get("/phones", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Data collected",
    data: phones,
  });
});

app.listen(PORT, () => {
  console.log(`Serving running on http://localhost:${PORT}`);
});
