const router = require("express").Router();
const messageSchema = require("../models/messageModel");

const { $where } = require("../models/messageModel");

//message

// get message user
router.get("/message",async(req, res) => {
  const message = await messageSchema.find();
//   res.send("Hello from get message")

  try {
    res.json(message);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
});

// add project user
router.post("/message", async (req, res) => {
    // res.send("Hello from post message")

  const { message } = req.body;

  const newMessage = new messageSchema({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  });
  await newMessage.save();
  res.json(newMessage);
});

// get message specific user id
router.get("/message/:id", async (req, res) => {
  try {
    const message = await messageSchema.findById(req.params.id);
    res.json(message);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
});

// update message specific user
router.put("/message/update/:id", async (req, res) => {
  const { message } = req.body;

  try {
    const newMessage = await messageSchema.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        isSeen: req.body.isSeen,
    });

    let results = await newMessage.save();
    await results;
    res.json({ msg: "Item updated" });
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
});

// delete project specific user
router.delete("/message/:id", async (req, res) => {
  const message = await messageSchema.findByIdAndDelete(req.params.id);
  message;
  res.json({ msg: "Item deleted" });

});

module.exports = router;
