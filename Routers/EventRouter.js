const Schedule = require("../Models/Events");

 async function fetch_event (req, res) {
    try {
      const scheduleData = await Schedule.find();
      res.json(scheduleData);
    } catch (error) {
      console.error('Error fetching schedule data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
async function create_event (req, res){
    try {
      const newSchedule = req.body;
      console.log(req.body)
      const createdSchedule = await Schedule.create(newSchedule);
      res.status(201).json(createdSchedule);
    } catch (error) {
      console.error('Error creating schedule:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  

 async function edit_event (req, res) {
    try {
      const { id } = req.params;
      const updatedSchedule = req.body;
  
      if (!updatedSchedule._id) {
        return res.status(400).json({ error: 'Missing _id field in request body' });
      }
  
      const result = await Schedule.findByIdAndUpdate(id, updatedSchedule, { new: true });
      res.json(result);
    } catch (error) {
      console.error('Error updating schedule:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  
  async function delete_event (req, res){
    try {
      const { id } = req.params;
      await Schedule.findByIdAndDelete(id);
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting schedule:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }


  module.exports={
    fetch_event,
    create_event,
    edit_event,
    delete_event
  }