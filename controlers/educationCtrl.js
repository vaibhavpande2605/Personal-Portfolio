const res = require("express/lib/response");
const educationSchema=require("../models/educationModels");


//  education

// get education user
exports.getEducation = async(req,res)=>{
   
    const education = await educationSchema.find();

  try {
    res.json(education);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
}


// add education user
exports.addEducation = async(req,res)=>{
    const { education } = req.body;

  try {
    const newEducation = new educationSchema({
      title: req.body.title,
      school: req.body.school,
      city: req.body.city,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    });

    await newEducation.save();
    res.json(newEducation);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }

}


// get specific user id
exports.getEducationId = async(req,res)=>{
    try {
        const education = await educationSchema.findById(req.params.id);
        res.json(education);
      } catch (error) {
        res.status(500).json({ msg: "server problem" });
      }
}


// update specific user
exports.updateEducation = async(req,res)=>{
    

    const {education}=req.body;
  
  try {
    const newEducation = await educationSchema.findByIdAndUpdate(req.params.id,{
      title: req.body.title,
      school: req.body.school,
      city: req.body.city,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    });
  
    let results=await newEducation.save();
    await results;
    res.json({msg:"Item updated"})
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
      
  }
}


// delete specific user
exports.deleteEducation= async(req,res)=>{
    const education= await educationSchema.findByIdAndDelete(req.params.id)
    education;
    res.json({msg:"Item deleted"})
  
}