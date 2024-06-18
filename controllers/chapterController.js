"use strict";

const chapterQuestions = require("../config/quizes/chapterQuestions");

let indexQuestion = -1;
let points = 0;
let chapter = "";

exports.nextQuestion = (req, res, next) => {
    indexQuestion++;
    const { url } = req;
    chapter = url;
    res.locals.question = chapterQuestions[chapter][indexQuestion];
    res.locals.view = "quiz";
    res.locals.titlePage = url;
    if (res.locals.question) {
        next();
    } else {
        res.locals.points = points;
        res.locals.score = points / chapterQuestions[chapter].length * 100;
        points = 0;
        indexQuestion = -1;
        res.render("result")
    }

};

exports.checkAnswer = (req, res, next) => {
    const { body } = req;
    const correctAnswer = chapterQuestions[chapter][indexQuestion].answer;
    res.locals.view = chapter.slice(1);
    if (body.answer === correctAnswer) {
        points++;
    } 
    next();
};

exports.renderView = (req, res) => {
    const view = res.locals.view;
    res.render(view);
};

exports.redirectView = (req, res, next) => {
    const view = res.locals.view;
    if (view) {
        res.redirect(view)
    } else {
        next();
    }
};