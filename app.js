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
const PORT = 8080;

/*
 ** **
 ** ** ** MIDDLEWARES
 ** **
 */
app.use(cors({ optionsSuccessStatus: 200 })); // Some old browsers choke on 204
app.use(express.static("public")); // Serve static files from public folder

/*
 ** **
 ** ** ** ROUTES
 ** **
 */
/**
 ** =====================================
 ** Route Index
 ** =====================================
 */
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

/**
 ** =====================================
 ** Route API start
 ** =====================================
 */
app.get("/api", (req, res) => {
  //1) Date object
  const date = new Date();

  //2) Send a response
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

/**
 ** =====================================
 ** Route Get Date
 ** =====================================
 */
app.get("/api/:date", (req, res) => {
  //1) Vars & Init
  const paramDate = req.params.date;
  const date = new Date(paramDate);

  //2) Set time in utc utc milliseconds if invalid
  if (date.toString() === "Invalid Date") date.setTime(paramDate);

  //3) If still Invalid Date, return with error
  if (!date || date.toString() === "Invalid Date")
    return res.json({
      error: "Invalid Date",
    });

  //4) Send a response
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

/*
 ** **
 ** ** ** HTTP SERVER
 ** **
 */
app.listen(PORT, () => {
  console.log(`Servers is running on port:\t[${PORT}]`);
});
