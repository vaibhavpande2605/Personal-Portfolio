const res = require("express/lib/response");
const aboutSchema = require("../models/aboutModel");

//  about

// get about user
exports.getAbout = async (req, res) => {
  const about = await aboutSchema.find();

  try {
    res.json(about);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
};

// add about user
exports.addAbout = async (req, res) => {
  const { about } = req.body;

  try {
    const newabout = new aboutSchema({
      about,
    });

    await newabout.save();
    res.json(newabout);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
};

// get specific user id
exports.getAboutId = async (req, res) => {
  try {
    const about = await aboutSchema.findById(req.params.id);
    res.json(about);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
};

// update specific user
exports.updateAbout = async (req, res) => {
  const { about } = req.body;

  try {
    const newabout = await aboutSchema.findByIdAndUpdate(req.params.id, {
      about,
    });

    let results = await newabout.save();
    await results;
    res.json({ msg: "Item updated" });
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
};

// delete specific user
exports.deleteAbout = async (req, res) => {
  const about = await aboutSchema.findByIdAndDelete(req.params.id);
  about;
  res.json({ msg: "Item deleted" });
};
