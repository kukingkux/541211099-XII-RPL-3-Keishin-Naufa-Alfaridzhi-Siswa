const express = require("express");
const app = express();

const connectDB = require("./config/db");
const userrouter = require("./router/users");
const port = 3001;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(userrouter);

//

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//

connectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
