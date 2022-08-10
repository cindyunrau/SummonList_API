const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(require("./src/routes/creature.routes"));

const db = require("./src/db/conn.js");
const port = 8081
app.listen(port, () => {
  // perform a database connection when server starts
  db.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to cindy's application." });
});
