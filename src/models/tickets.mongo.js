const mongoose = require('mongoose');

const ticketsSchema = new mongoose.Schema({
  id: { type: Number },
  userId: { type: Number },
  technology: { type: String },
  status: { type: String },
  openDate: { type: Date },
  closeDate: { type: Date },
  satisfactionScore: { type: Number },
});

module.exports = mongoose.model('Tickets', ticketsSchema);
