const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Option',
    },
  ],
  vote: {
    type: Boolean,
    default: false,
  },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
