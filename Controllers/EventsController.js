const { fetch_event, edit_event, create_event, delete_event } = require('../Routers/EventRouter');

const eventrouter = require("express").Router()

eventrouter.get("/schedule",fetch_event);
eventrouter.put("/schedule/:id",edit_event);
eventrouter.post("/schedule",create_event);
eventrouter.delete("/schedule/:id",delete_event);

module.exports= eventrouter;