// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

hbs.registerHelper("ifEquals", function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});
const capitalize = require("./utils/capitalize");
const projectName = "2ModuleProject";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);
const newsRoutes = require("./routes/news.routes");
app.use("/news", newsRoutes);
const sportsRoutes = require("./routes/sports.routes");
app.use("/categories", sportsRoutes);
const economyRoutes = require("./routes/economy.routes");
app.use("/categories", economyRoutes);
const gamesRoutes = require("./routes/games.routes");
app.use("/categories", gamesRoutes);
const profileRoutes = require("./routes/profile.routes");
app.use("/profile", profileRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

// testing navbar highlight

module.exports = app;
