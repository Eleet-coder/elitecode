import path from "path";
import fs from "fs";
import express from "express";
import { pool } from "./models/model";
import { flushSync } from "react-dom";

import userController from "./userController";
import cookieController from "./cookieController";
import problemController from "./problemController";

// var cors = require('cors');
import cookieParser from "cookie-parser";

const PORT = 3000;

const app: any = express();

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use("/build", express.static(path.join(__dirname, "../build")));
app.use("/client", express.static(path.join(__dirname, "../client")));

const writeFile = (req, res, next) => {
  console.log('writefile')
  return next()
}

app.post("/export", 
writeFile,
(req, res) => {
  console.log("this is user export ", req.body);
  const { tag, solution, problems } = req.body;


  fs.mkdirSync(path.join(__dirname, "../../", tag));

  // console.log("this is user export part3 ", req.body);

  fs.writeFileSync(
    path.join(__dirname, "../../", tag, `${problems}.js`),
    solution
  );
});


app.post("/save", problemController.saveProblems, (req, res) => {
  console.log("this is user save ", req.body);
  return res.send({ msg: "Progress Successfully Saved" });
});

app.get(
  "/getProblems",
  cookieController.checkCookie,
  problemController.getProblems,
  (req, res) => {
    return res.send(res.locals.problems);
    // console.log('get problems',res);
  }
);

// Login and signup below //

app.post(
  "/login",
  userController.login,
  cookieController.giveCookie,
  (req, res) => {
    console.log("this is user login ", req.body);
    // return res.sendStatus(200)
    return res.redirect("/problems");
  }
);

app.post("/signup", userController.signup, (req, res) => {
  // redirect to login page
  console.log("this is user signup", req.body);
  return res.redirect("/login");
});

app.get("/*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.use((req, res) => res.status(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// module.exports = app;
