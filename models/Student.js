const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
  marks: [{
    class: { type: Schema.Types.ObjectId, ref: 'Class' },
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    marks: { type: Number, required: true }
  }]
  // You can add more fields as per your requirements
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
