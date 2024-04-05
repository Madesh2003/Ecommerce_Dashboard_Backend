const mongoose = require('mongoose');

const schedulerEventSchema = new mongoose.Schema({
    Id:{
     type: Number,
    } ,
    Subject:{ 
      type: String,
    },
    Location: {
     type: String,
    },
    StartTime: {
     type: Date,
    },
    EndTime: {
      type: Date,
    },
    IsAllDay: {
     type: Boolean,
    },
    description: {
     type: String,
    },
  })

module.exports = mongoose.model('SchedulerEvent', schedulerEventSchema);
