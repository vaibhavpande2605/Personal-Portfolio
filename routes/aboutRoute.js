const router = require("express").Router();
const {
  getAbout,
  addAbout,
  deleteAbout,
  getAboutId,
  updateAbout,
} = require("../controlers/aboutCtrl");

// const aboutSchema = require("../models/aboutModel");

// About

// get about data
router.get("/about", getAbout);

// add about user

router.post("/about", addAbout);

// get specific about user by id

router.get("/about/:id", getAboutId);

// update specific about user by id

router.put("/about/update/:id", updateAbout);

// delete user
router.delete("/about/:id", deleteAbout);

module.exports = router;
