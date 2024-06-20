const Course = require('../models/Course');

// Fetch all courses from the database
exports.getAllCourses = async () => {
  try {
    const courses = await Course.find();
    return courses;
  } catch (error) {
    throw new Error(`Error while fetching courses: ${error.message}`);
  }
};

// Fetch a course by ID from the database
exports.getCourseById = async (courseId) => {
  try {
    const course = await Course.findById(courseId);
    if (!course) {
      throw new Error('Course not found');
    }
    return course;
  } catch (error) {
    throw new Error(`Error while fetching course: ${error.message}`);
  }
};

// Create a new course
exports.createCourse = async (courseData) => {
  try {
    const newCourse = new Course(courseData);
    const savedCourse = await newCourse.save();
    return savedCourse;
  } catch (error) {
    throw new Error(`Error while creating course: ${error.message}`);
  }
};

// Update a course by ID
exports.updateCourse = async (courseId, courseData) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, courseData, { new: true });
    if (!updatedCourse) {
      throw new Error('Course not found');
    }
    return updatedCourse;
  } catch (error) {
    throw new Error(`Error while updating course: ${error.message}`);
  }
};

// Delete a course by ID
exports.deleteCourse = async (courseId) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    if (!deletedCourse) {
      throw new Error('Course not found');
    }
    return deletedCourse;
  } catch (error) {
    throw new Error(`Error while deleting course: ${error.message}`);
  }
};
