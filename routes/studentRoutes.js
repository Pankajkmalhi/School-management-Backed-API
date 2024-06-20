const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route to get all students
router.get('/', studentController.getStudents);

// Route to get a specific student by ID
router.get('/:id', studentController.getStudent);

// Route to create a new student
router.post('/', studentController.createStudent);

// Route to update a student by ID
router.put('/:id', studentController.updateStudent);

// Route to delete a student by ID
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
