const express = require('express');
const {
  submitFeedback,
  getAllFeedback,
  getFeedbackById,
  deleteFeedback
} = require('../controllers/feedbackController');
const protect = require('../middleware/auth');

const router = express.Router();

router.post('/', submitFeedback);                         // Public: Submit feedback
router.get('/admin', protect, getAllFeedback);            // Admin: Get all feedback
router.get('/admin/:id', protect, getFeedbackById);       // Admin: Get feedback by ID
router.delete('/:id', protect, deleteFeedback);           // Admin: Delete feedback

module.exports = router;
