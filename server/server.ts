// const path = require("path");
// const express = require("express");

import path from 'path'
import express from "express"

// var cors = require('cors');

const PORT = 8080;

const app: any = express();

app.use(express.json());
// app.use(cors());
// app.use(express.static("build"));
// app.use(express.static("/assets"))

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.post("/signup", )


app.post("/login", )


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
