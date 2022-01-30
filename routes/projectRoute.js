const router = require("express").Router();
const projectSchema = require("../models/projectModels");

const { $where } = require("../models/projectModels");

//  project

// get project user
router.get("/project", async (req, res) => {
  const project = await projectSchema.find();

  try {
    res.json(project);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
});

// add project user
router.post("/project", async (req, res) => {
  const { project } = req.body;

  const newProject = new projectSchema({
    title: req.body.title,
    description: req.body.description,
    technologies: req.body.technologies,
    haveLink: req.body.haveLink,
    link: req.body.link,
    projectImage: req.body.projectImage,
  });
  await newProject.save();
  res.json(newProject);
});

// get project specific user id
router.get("/project/:id", async (req, res) => {
  try {
    const project = await projectSchema.findById(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
});

// update project specific user
router.put("/project/update/:id", async (req, res) => {
  const { project } = req.body;

  try {
    const newProject = await projectSchema.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      technologies: req.body.technologies,
      haveLink: req.body.haveLink,
      link: req.body.link,
      projectImage: req.body.projectImage,
    });

    let results = await newProject.save();
    await results;
    res.json({ msg: "Item updated" });
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
});

// delete project specific user
router.delete("/project/:id", async (req, res) => {
  const project = await projectSchema.findByIdAndDelete(req.params.id);
  project;
  res.json({ msg: "Item deleted" });
});

module.exports = router;
