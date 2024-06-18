"use strict";

const chapterOneQuestions = require("./chapterOne");
const chapterTwoQuestions = require("./chapterTwo");
const chapterThreeQuestions = require("./chapterThree");
const chapterFourQuestions = require("./chapterFour");
const chapterFiveQuestions = require("./chapterFive");
const chapterSixQuestions = require("./chapterSix");

module.exports = {
    "/chapterOne" : chapterOneQuestions,
    "/chapterTwo" : chapterTwoQuestions,
    "/chapterThree" : chapterThreeQuestions,
    "/chapterFour" : chapterFourQuestions,
    "/chapterFive" : chapterFiveQuestions,
    "/chapterSix" : chapterSixQuestions
};
