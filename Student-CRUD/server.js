const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://choudharyyogesh219_db_user:OcO3jWsKeMFrcMvy@cluster0.htwesqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
const studentSchema = new mongoose.Schema({
name: String,
age: Number,
grade: String,
});
const Student = mongoose.model('Student', studentSchema);
app.post('/students', async (req, res) => {
const student = new Student(req.body);
await student.save();
res.status(201).send(student);
});
app.get('/students', async (req, res) => {
const students = await Student.find();
res.send(students);
});
app.put('/students/:id', async (req, res) => {
const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.send(student);
});
app.delete('/students/:id', async (req, res) => {
await Student.findByIdAndDelete(req.params.id);
res.send({ message: 'Student deleted' });
});
app.listen(3000, () => console.log('Server running on port 3000'));