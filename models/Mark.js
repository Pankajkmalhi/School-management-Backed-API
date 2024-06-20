const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const markSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  class: { type: Schema.Types.ObjectId, ref: 'Class', required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
  marks: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Mark', markSchema);
