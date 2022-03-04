const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({path: "./.env"})

const url = process.env.DB_URL;
const PORT = process.env.DB_PORT;
const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

app.use(express.json());
app.use(cors());

//conneting to a mongo atlas
mongoose
  .connect(
    url,
    connectionOptions
  )
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log("The server is listening on port " + PORT);
});
