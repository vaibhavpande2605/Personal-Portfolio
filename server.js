require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use("/message", require("./routes/messageRoute"));
app.use("/user", require("./routes/userRoute"));
app.use("/", require("./routes/aboutRoute"));
app.use("/", require("./routes/projectRoute"));
app.use("/", require("./routes/educRoutes"));
app.use("/", require("./routes/skillsRoute"));
app.use("/", require("./routes/experienceRoutes"));
app.use("/", require("./routes/messageRoute"));
app.use("/", require("./routes/upload"));

// connect to mongodb

const URI = process.env.MONGO_URL;

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    else {
      return console.log("mongodb connected");
    }
  }
);

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} 🔥`);
});
