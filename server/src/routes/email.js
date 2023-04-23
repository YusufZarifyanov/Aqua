const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

router.post(
    "/send",
    (req, res) => {
        console.log(1);

        res.status(200);
    }
);

module.exports = router;
