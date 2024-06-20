const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  subjects: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
  // You can add more fields as per your requirements
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);
