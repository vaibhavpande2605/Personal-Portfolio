const userSchema = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

const userCtrl = {


    
  // register
  registerUser: async (req, res) => {

    const { username, email, password } = req.body;

    try {

        const user = await userSchema.findOne({ email: email });
        if (user) {
          return res.status(400).json({ msg: "email already exits" });
        }
          // create big  password and then update the schema
          const passwordHash = await bcrypt.hash(password, 10);
          const newUser = new userSchema({
            username: username,
            email: email,
            password: passwordHash
          })
    
          await newUser.save();
          res.json({ msg: "register success" });
        
      
    
        
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
   
  },


  // login
  loginUser: async (req, res) => {
    

    try {
        const { email, password } = req.body;
        const user = await userSchema.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({msg:"Incorrect password"})

        }

        // if login is successful
          const payload= {
            id:user._id,
            name:user.username
          }

          const token = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn:"100"})
    
          
          res.json({ token})
        
      } catch (error) {
        return res.status(500).json({msg:error.message})
    }
    
 },


//verify
  verifiedToken: async (req, res) => {
    try {
      
      const token=req.headers("Authorization")
      if(!token) return res.send(false)

      jwt.verify(token,process.env.TOKEN_SECRET,async(error,verify)=>{
        if(error)
        return res.send(false)


      const user = await userSchema.findById(verify.id)
      if(!user)return res.send(false)
      return res.send(true)
      })




    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  }
}



module.exports = userCtrl;
