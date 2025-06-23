// const Feedback = require('../models/Feedback');

// // @desc    Submit feedback
// // @route   POST /api/feedback
// // @access  Public
// const submitFeedback = async (req, res, next) => {
//   try {
//     const { name, email, message, rating } = req.body;

//     if (!name || !email || !message || !rating) {
//       return res.status(400).json({ success: false, message: 'All fields are required' });
//     }

//     const feedback = await Feedback.create({ name, email, message, rating });

//     res.status(201).json({ success: true, data: feedback });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc    Get all feedbacks (admin only)
// // @route   GET /api/feedback/admin
// // @access  Private (JWT)
// const getAllFeedback = async (req, res, next) => {
//   try {
//     const feedbacks = await Feedback.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, count: feedbacks.length, data: feedbacks });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc    Get a feedback by ID
// // @route   GET /api/feedback/admin/:id
// // @access  Private (JWT)
// const getFeedbackById = async (req, res, next) => {
//   try {
//     const feedback = await Feedback.findById(req.params.id);

//     if (!feedback) {
//       return res.status(404).json({ success: false, message: 'Feedback not found' });
//     }

//     res.status(200).json({ success: true, data: feedback });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc    Delete a feedback by ID
// // @route   DELETE /api/feedback/:id
// // @access  Private (JWT)
// const deleteFeedback = async (req, res, next) => {
//   try {
//     const feedback = await Feedback.findById(req.params.id);

//     if (!feedback) {
//       return res.status(404).json({ success: false, message: 'Feedback not found' });
//     }

//     await Feedback.findByIdAndDelete(req.params.id);

//     res.status(200).json({ success: true, message: 'Feedback deleted' });
//   } catch (error) {
//     next(error);
//   }
// };

// // ✅ Export all functions at once
// module.exports = {
//   submitFeedback,
//   getAllFeedback,
//   getFeedbackById,
//   deleteFeedback
// };


const Feedback = require('../models/Feedback');

// @desc    Submit feedback
// @route   POST /api/feedback
// @access  Public
const submitFeedback = async (req, res, next) => {
  console.log("🟡 Incoming Feedback Submission:", req.body); // 🔍 Log incoming data

  try {
    const { name, email, message, rating } = req.body;

    if (!name || !email || !message || !rating) {
      console.warn("⚠️ Missing required fields in feedback submission");
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const feedback = await Feedback.create({ name, email, message, rating });
    console.log("✅ Feedback saved to database:", feedback);

    res.status(201).json({ success: true, data: feedback });
  } catch (error) {
    console.error("❌ Error in submitFeedback:", error.message);
    next(error);
  }
};

// @desc    Get all feedbacks (admin only)
// @route   GET /api/feedback/admin
// @access  Private (JWT)
const getAllFeedback = async (req, res, next) => {
  try {
    console.log("🔐 Admin requested all feedbacks");
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: feedbacks.length, data: feedbacks });
  } catch (error) {
    console.error("❌ Error in getAllFeedback:", error.message);
    next(error);
  }
};

// @desc    Get a feedback by ID
// @route   GET /api/feedback/admin/:id
// @access  Private (JWT)
const getFeedbackById = async (req, res, next) => {
  try {
    console.log("🔍 Fetching feedback by ID:", req.params.id);
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      console.warn("⚠️ Feedback not found for ID:", req.params.id);
      return res.status(404).json({ success: false, message: 'Feedback not found' });
    }

    res.status(200).json({ success: true, data: feedback });
  } catch (error) {
    console.error("❌ Error in getFeedbackById:", error.message);
    next(error);
  }
};

// @desc    Delete a feedback by ID
// @route   DELETE /api/feedback/:id
// @access  Private (JWT)
const deleteFeedback = async (req, res, next) => {
  try {
    console.log("🗑️ Deleting feedback with ID:", req.params.id);
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      console.warn("⚠️ Feedback not found for deletion:", req.params.id);
      return res.status(404).json({ success: false, message: 'Feedback not found' });
    }

    await Feedback.findByIdAndDelete(req.params.id);
    console.log("✅ Feedback deleted:", req.params.id);

    res.status(200).json({ success: true, message: 'Feedback deleted' });
  } catch (error) {
    console.error("❌ Error in deleteFeedback:", error.message);
    next(error);
  }
};

// ✅ Export all functions at once
module.exports = {
  submitFeedback,
  getAllFeedback,
  getFeedbackById,
  deleteFeedback
};
