"use strict";

const express = require("express");
const layouts = require("express-ejs-layouts");
const path = require("path");
const router = require("./router");

const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", path.join(__dirname, "views/layouts/mainLayout.ejs"));

app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use(layouts);
app.use(express.static(path.join(__dirname, "public")));
app.use(router);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});