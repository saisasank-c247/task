const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  from_date: {
    type: String,
  },
  to_date: {
    type: String,
  }, 
},{timestamps: true});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;