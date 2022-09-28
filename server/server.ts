import path from 'path'
import express from "express"
import { pool } from './models/model';

// var cors = require('cors');

const PORT = 3000;

const app: any = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use(cors());
// app.use(express.static("build"));
// app.use(express.static("/assets"))

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

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
