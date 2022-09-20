// const { body, validationResult } = require("express-validator");
const express = require("express");
const rootRouter = require("./routes");

const app = express();

app.use(express.json());

app.use(rootRouter);

app.listen(8000, () => console.log("server start"));
