const express = require("express");
const router = express.Router();

const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../client/public/');
  },
  filename: (req, file, cb) => {
    cb(null, 'file.pdf');
  }
});

// Create the multer instance
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), (req, res) => {
    // Handle the uploaded file
    res.json({ message: 'File uploaded successfully!' });
  })

module.exports = router;
