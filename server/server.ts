import path from 'path'
import fs from 'fs'
import express from "express"
import { pool } from './models/model';
import { flushSync } from 'react-dom';

// var cors = require('cors');

const PORT = 3000;

const app: any = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/client', express.static(path.join(__dirname, '../client')));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.post("/save", (req, res) => {
  console.log('this is user save ',req.body);
  
});

app.post("/export", (req, res) => {
  console.log('this is user export ',req.body);
  const {
    tag,solution,problems
  } = req.body;
  fs.mkdirSync(path.join(__dirname,'../../desktop', tag))
  fs.writeFileSync(path.join(__dirname,'../../desktop', tag,`${problems}.js`),solution)
  
  
})

//this is the login endpoint ,for the req.body
//the req.body is {
// username:''
// password:''
//}
app.post("/login", (req, res) => {
  console.log('this is user login ',req.body);

});
//this is the login endpoint ,for the req.body
//the req.body is {
// username:''
// password:''
// email:''
//}
app.post("/signup", (req, res) => {
  console.log('this is user signup',req.body);

});



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
