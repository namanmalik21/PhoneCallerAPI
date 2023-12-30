const express = require("express");
const sequelize = require("./Config/dbConfig");
const authController = require("./controllers/authcontroller");
const userController = require("./controllers/usercontroller");
const spamController = require('./controllers/spamcontroller');
const searchController = require('./controllers/searchcontroller');
const User = require("./models/user");

const app = express();
app.use(express.json());

// Routes
app.post("/register", authController.registerUser);
app.post("/login", authController.loginUser);
app.get("/profile", userController.getUserProfile);
app.post("/spam", spamController.markNumberAsSpam);
app.get('/searchUsers', searchController.searchUsers);

const PORT = process.env.PORT || 8080;

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
