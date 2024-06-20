const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Route to get all teachers
router.get('/', teacherController.getTeachers);

// Route to get a specific teacher by ID
router.get('/:id', teacherController.getTeacher);

// Route to create a new teacher
router.post('/', teacherController.createTeacher);

// Route to update a teacher by ID
router.put('/:id', teacherController.updateTeacher);

// Route to delete a teacher by ID
router.delete('/:id', teacherController.deleteTeacher);

module.exports = router;
