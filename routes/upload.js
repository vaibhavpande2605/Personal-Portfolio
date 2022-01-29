const router = require("express").Router();
const cloudinary = require("cloudinary");
const { error } = require("console");
const fs = require("fs");

// we will upload image to cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// post upload image
router.post("/upload", (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("no files uploaded");
    }
    const file = req.files.file;
    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "size is too big" });
    }

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Incorrect file format" });
    }

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: "udemy" },
      async (error, result) => {
        if (error) throw error;

        removeTmp(file.tempFilePath);
        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    );
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// delete image
router.post("/destroy", async(req, res) => {
const { public_id } = req.body;

  try {
    if (!public_id) {
         return res.status(400).json({ msg: "no images selcted" });
    }
    cloudinary.v2.uploader.destroy(public_id, async (error, result) => {
      if (error) throw error;
      res.json({ msg: "Image deleted " });
    });
  } catch (error) {
    res.status(500).json({ msg:error.message });
  }
});

const removeTmp = (path) => {
  fs.unlink(path, (error) => {
    if (error) throw error;
  });
};

module.exports = router;
