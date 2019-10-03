const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            let now = Date.now();
            let extname = path.extname(file.originalname);
            let name = path.basename(file.originalname, extname);

            cb(null, `${name}-${now}${extname}`);
        }
    })
};