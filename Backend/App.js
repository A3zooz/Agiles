require("dotenv").config();
//express app
const express = require("express");
const port = process.env.PORT;

//mongoose database
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MongoUri)
  .then(() => {
    console.log("MongoDB is now connected!");
    // Starting server
    app.listen(port, () => {
      console.log(`Listening to requests on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

//App variables
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
const adminRoutes = require("./routes/adminRouter");
const courseRoutes = require("./routes/courseRouter");
const globalRoutes = require("./routes/globalRouter");
const instructorRoutes = require("./routes/instructorRouter");
app.get("/", (req, res) => {
  res.status(200).send("You have everything installed!");
});

app.use("/course/", courseRoutes);
app.use("/admin/", adminRoutes);
app.use("/global/", globalRoutes);
app.use("/instructor/", instructorRoutes);
