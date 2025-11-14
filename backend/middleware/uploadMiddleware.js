const multer = require('multer');

// Configure multer storage
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the destination directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

 // File filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only .jpeg, .png and .jpg files are allowed'), false);
    }
};

// Initialize multer with storage and file filter
const upload = multer({ storage, fileFilter });

module.exports = upload;