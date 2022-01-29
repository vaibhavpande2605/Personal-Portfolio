const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({

  
    title: { type: String, required: true },
    school: { type: String, required: true },
    city: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
})

module.exports = mongoose.model('education',educationSchema);