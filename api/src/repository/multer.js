import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../stratton_oakmonk/public/imgs');
  },
  filename: function (req, file, cb) {
    const type = file.originalname.split('.').pop();
    const random = Math.random() * 100000;
    cb(null, `${random}.${type}`);
  }
});

export default storage;