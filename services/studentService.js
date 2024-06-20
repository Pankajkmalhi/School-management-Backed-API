const Student = require('../models/Student');

// Fetch all students from the database
exports.getAllStudents = async () => {
  try {
    const students = await Student.find();
    return students;
  } catch (error) {
    throw new Error(`Error while fetching students: ${error.message}`);
  }
};

// Fetch a student by ID from the database
exports.getStudentById = async (studentId) => {
  try {
    const student = await Student.findById(studentId);
    if (!student) {
      throw new Error('Student not found');
    }
    return student;
  } catch (error) {
    throw new Error(`Error while fetching student: ${error.message}`);
  }
};

// Create a new student
exports.createStudent = async (studentData) => {
  try {
    const newStudent = new Student(studentData);
    const savedStudent = await newStudent.save();
    return savedStudent;
  } catch (error) {
    throw new Error(`Error while creating student: ${error.message}`);
  }
};

// Update a student by ID
exports.updateStudent = async (studentId, studentData) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(studentId, studentData, { new: true });
    if (!updatedStudent) {
      throw new Error('Student not found');
    }
    return updatedStudent;
  } catch (error) {
    throw new Error(`Error while updating student: ${error.message}`);
  }
};

// Delete a student by ID
exports.deleteStudent = async (studentId) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    if (!deletedStudent) {
      throw new Error('Student not found');
    }
    return deletedStudent;
  } catch (error) {
    throw new Error(`Error while deleting student: ${error.message}`);
  }
};
