const express = require('express');
const {
    addIncome,
    getAllIncome,
    deleteIncome,
    downloadIncomesExcel,
} = require('../controllers/incomeController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', protect, addIncome);
router.get('/get', protect, getAllIncome);
router.delete('/:id', protect, deleteIncome);
router.get('/downloadexcel', protect, downloadIncomesExcel);

module.exports = router;