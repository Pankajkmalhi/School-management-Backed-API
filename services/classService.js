const Class = require('../models/Class');

// Fetch all classes from the database
exports.getAllClasses = async () => {
  try {
    const classes = await Class.find();
    return classes;
  } catch (error) {
    throw new Error(`Error while fetching classes: ${error.message}`);
  }
};

// Fetch a class by ID from the database
exports.getClassById = async (classId) => {
  try {
    const foundClass = await Class.findById(classId);
    if (!foundClass) {
      throw new Error('Class not found');
    }
    return foundClass;
  } catch (error) {
    throw new Error(`Error while fetching class: ${error.message}`);
  }
};

// Create a new class
exports.createClass = async (classData) => {
  try {
    const newClass = new Class(classData);
    const savedClass = await newClass.save();
    return savedClass;
  } catch (error) {
    throw new Error(`Error while creating class: ${error.message}`);
  }
};

// Update a class by ID
exports.updateClass = async (classId, classData) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(classId, classData, { new: true });
    if (!updatedClass) {
      throw new Error('Class not found');
    }
    return updatedClass;
  } catch (error) {
    throw new Error(`Error while updating class: ${error.message}`);
  }
};

// Delete a class by ID
exports.deleteClass = async (classId) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(classId);
    if (!deletedClass) {
      throw new Error('Class not found');
    }
    return deletedClass;
  } catch (error) {
    throw new Error(`Error while deleting class: ${error.message}`);
  }
};
