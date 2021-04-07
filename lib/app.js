//modules
const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const app = express();

// config

app.use(express.urlencoded({ extended: true }));
app.use(todoRoutes);

app.use(express.static("public"));

// connect DB
mongoose
  .connect("mongodb://localhost:27017/todolistDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  })
  .catch((err) => console.log(err));

//view engine
app.set("view engine", "ejs");

//middleware

// const pushItem = (req, res, next) => {
//   if (req.body.button === "add") {
//     items.push({ id: nextId, text: req.body.newItem });
//     nextId++;
//     updateVisibleItems();
//   }
//   next();
// };
