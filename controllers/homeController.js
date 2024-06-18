"use strict";

exports.index = (req, res) => {
    res.locals.titlePage = "Home";
    res.render("index");
};