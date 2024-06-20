const Teacher = require('../models/Teacher');

// Fetch all teachers from the database
exports.getAllTeachers = async () => {
  try {
    const teachers = await Teacher.find();
    return teachers;
  } catch (error) {
    throw new Error(`Error while fetching teachers: ${error.message}`);
  }
};

// Fetch a teacher by ID from the database
exports.getTeacherById = async (teacherId) => {
  try {
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      throw new Error('Teacher not found');
    }
    return teacher;
  } catch (error) {
    throw new Error(`Error while fetching teacher: ${error.message}`);
  }
};

// Create a new teacher
exports.createTeacher = async (teacherData) => {
  try {
    const newTeacher = new Teacher(teacherData);
    const savedTeacher = await newTeacher.save();
    return savedTeacher;
  } catch (error) {
    throw new Error(`Error while creating teacher: ${error.message}`);
  }
};

// Update a teacher by ID
exports.updateTeacher = async (teacherId, teacherData) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(teacherId, teacherData, { new: true });
    if (!updatedTeacher) {
      throw new Error('Teacher not found');
    }
    return updatedTeacher;
  } catch (error) {
    throw new Error(`Error while updating teacher: ${error.message}`);
  }
};

// Delete a teacher by ID
exports.deleteTeacher = async (teacherId) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);
    if (!deletedTeacher) {
      throw new Error('Teacher not found');
    }
    return deletedTeacher;
  } catch (error) {
    throw new Error(`Error while deleting teacher: ${error.message}`);
  }
};
