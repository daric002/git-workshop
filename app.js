"use strict";
const packageInfo = require("./package.json");
const express = require("express");
const port = Number(process.env.PORT) || 3000;

const app = express();

app.get("/", (req, res, next) => res.status(200).send({ message: "hej" }));

//kosntig ändiring

const server = app.listen(port, () => {
  console.log(`${packageInfo.name} listening on port ${server.address().port}`);
});
