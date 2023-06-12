const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	asd : {
        type: String
    }
});

module.exports = mongoose.model('students',studentSchema);