"use strict";

const { Router } = require("express");
const router = Router();
const chapterController = require("./controllers/chapterController");
const homeController = require("./controllers/homeController");

// GET
router.get("/", homeController.index);
router.get(/chapter/, chapterController.nextQuestion, chapterController.renderView);

// POST
router.post("/checkAnswer", chapterController.checkAnswer, chapterController.redirectView);

module.exports = router;