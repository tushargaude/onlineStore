"use strict";

const express = require("express");
const cors = require("cors");
const { Routes } = require("./routes");
require('dotenv').config()

const app = express();
const port = process.env.PORT || 2000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

module.exports = app;

app.listen(port, () => {
  console.log(
    `Server running on ${port} in ${process.env.NODE_ENV} Environment`
  );
});

/* you can pass your auth middleware from here if needed */
Routes.UserRoutes(app);

app.get("/serviceName/v1/health/:email", (_, res) => {
  console.log(_.params);
  res.send({
    type: "success",
    message: _.params.email,
  });
});
