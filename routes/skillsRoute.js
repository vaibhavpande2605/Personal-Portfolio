const router = require("express").Router();
const skillsSchema = require("../models/skillsModel")
// const {
//   getSkills,
//   updateSkills,
//   getSkillsId,
//   addSkills,
//   deleteSkills,
// } = require("../controlers/skillsCtrl");
const { $where } = require("../models/skillsModel");

//  education

// get education user
router.get("/skills",async(req,res)=>{
  const skills = await skillsSchema.find();

  try {
    res.json(skills);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
});


// add education user
router.post("/skills", async (req,res)=>{
 
  try {
    const project = new skillsSchema({
      type: req.body.type,
      level: req.body.level
 
    })

    await skills.save();
    res.json({msg:"Product added"})
} catch (error) {
    res.status(500).json({msg:error})
    
}    
})

// get skills specific user id
router.get("/skills/:id", async(req,res)=>{
  try {
    const skills = await skillsSchema.findById(req.params.id);
    res.json(skills);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
} );



// update education specific user
router.put("/skills/update/:id", async(req,res)=>{
 
  const {skills}=req.body;
  
  try {
    const newSkills = await skillsSchema.findByIdAndUpdate(req.params.id,{
      type: req.body.type,
      level: req.body.level
    });
  
    let results=await newSkills.save();
    await results;
    res.json({msg:"Item updated"})
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
      
  }
});


// delete education specific user
router.delete("/skills/:id",async(req,res)=>{
  const skills = await skillsSchema.findByIdAndDelete(req.params.id);
  skills;
  res.json({ msg: "Item deleted" });
});

module.exports = router;
