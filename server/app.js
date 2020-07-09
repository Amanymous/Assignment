const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./keys");

require("./models/user");

app.use(express.json());
app.use(require("./route/Api"));

mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting ", err);
});

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON", PORT);
});
