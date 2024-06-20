const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }]
  // You can add more fields as per your requirements
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
