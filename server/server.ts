import path from 'path'
import express from "express"
import { pool } from './models/model';

import  userController  from "./userController";
import  cookieController  from "./cookieController";
import  problemController  from "./problemController";

// var cors = require('cors');
import cookieParser from "cookie-parser";

const PORT = 3001;

const app: any = express();

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/client', express.static(path.join(__dirname, '../client')));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.get('/getProblems',  

(req, res) => {
  console.log('this is user login ',req.body);
  return res.send({hi:'hi'})
  // return res.redirect('/problems');
});


//this is the login endpoint ,for the req.body
//the req.body is {
// username:''
// password:''
//}
app.post("/login", 
  userController.login,
  cookieController.giveCookie,
  (req, res) => {
    console.log('this is user login ',req.body);
    // return res.sendStatus(200)
    return res.redirect('/problems');
});

//this is the signup endpoint ,for the req.body
//the req.body is {
// username:''
// password:''
// email:''
//}
app.post("/signup", 
  userController.signup,
  (req, res) => {
    // redirect to login page
    console.log('this is user signup',req.body);
    return res.redirect('/login');
});

//Authorized routes
app.get('/problems',
  cookieController.checkCookie,
  (req, res) => {
    return res.sendStatus(201)
    console.log(res);
})


app.use((req, res) => res.status(404));

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// module.exports = app;
