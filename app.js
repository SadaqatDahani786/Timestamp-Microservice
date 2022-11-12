/*
 ** **
 ** ** ** IMPORTS
 ** **
 */
const express = require("express");
const cors = require("cors");

/*
 ** **
 ** ** ** INITS
 ** **
 */
const app = express();

/*
 ** **
 ** ** ** MIDDLEWARES
 ** **
 */
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

/*
 ** **
 ** ** ** HTTP SERVER
 ** **
 */
app.listen("8080", () => {
  console.log("Servers is running on port\t\t[8080]");
});
