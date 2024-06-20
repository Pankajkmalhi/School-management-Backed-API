const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
  // You can add more fields as per your requirements
}, { timestamps: true });

module.exports = mongoose.model('Class', classSchema);
