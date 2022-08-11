const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./src/routes/creature.routes"));

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to cindy's application." });
});

const db = require("./src/db/conn.js");
const port = process.env.PORT || 8081
app.listen(port, () => {
  db.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});


