// const path = require("path");
// const express = require("express");
// const multer = require("multer");

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename(req, file, cb) {
//     cb(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// function checkFileType(file, cb) {
//   const fileTypes = /jpg|jpeg|png/;
//   const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//   // const mimeType = fileTypes.test(file.mimeType);

//   if (extname) {
//     return cb(null, true);
//   } else {
//     cb("Images only");
//   }
// }

// const upload = multer({
//   storage,
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// });

// router.post("/", upload.single("image"), (req, res) => {
//   console.log(`/${req.file.path}`);
//   res.send(`/${req.file.path}`);
// });

// module.exports = router;

const multer = require("multer");
const express = require("express");
const DatauriParser = require("datauri/parser");
const cloudinary = require("cloudinary").v2;
const asyncHandler = require("express-async-handler");

const parser = new DatauriParser();
const router = express.Router();

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("images only"));
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const uploadImage = asyncHandler(async (req, res) => {
  try {
    parser.format(".jpeg", req.file.buffer);
    const response = await cloudinary.uploader.upload(parser.content);

    res.send(response.url);
  } catch (e) {
    console.error(e);
  }
});

const uploadSettings = upload.single("image");

router.route("/").post(uploadSettings, uploadImage);

module.exports = router;
