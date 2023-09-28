require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const emailRouter = require("./routes/email")
const fileRouter = require("./routes/file");

const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());

const cors = require("cors")
app.use(cors());

app.use("/email", emailRouter);
app.use("/file", fileRouter);

app.listen(PORT, () => console.log(`Server running in port = ${PORT}`));
