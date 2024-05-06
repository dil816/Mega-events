import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(
      null,
      "C:/Users/Osura/Desktop/Ticketing/frontend/public/images"
    );
  },
  filename: function (req, file, cb) {
    return cb(null,` ${file.originalname}`);
  },
});

export const upload = multer({ storage });
