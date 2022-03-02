const dotenv = require("dotenv").config();
const express = require("express");
const colors = require("colors");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`.yellow.bold);
});
