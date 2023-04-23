require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const emailRouter = require("./routes/email")

const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.use("/email", emailRouter);

app.use((error, req, res, next) => {
    console.log("Error! Message: ", error.message);

    res.status(error.status || 500).json({
        status: error.status || 500,
        message: error.message,
        // stack: error.stack,
    });
});

app.listen(PORT, () => console.log(`Server running in port = ${PORT}`));
