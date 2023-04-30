var EventModel = require('../models/event')

async function getEvents(request,response) {
    const events = await EventModel.find({}).sort({createdAt: "descending"});
    try {
        response.status(200).send(events);
    } catch (error) {
        response.status(500).send(error);
    }
}

async function insertEvent(request,response) {
    const event = new EventModel(request.body);
    try {
        await event.save();
        response.status(201).send(event);
    } catch (error) {
        response.status(500).send(error);
    }
}

async function updateEvent(request,response){
    try {
        await EventModel.findByIdAndUpdate(request.params.id, {
            name:request.body.name,
            age:request.body.age,
            email:request.body.email,
            password:request.body.password
        });
        response.status(204).send(request.body);
      } catch (error) {
        response.status(500).send(error);
      }
}

async function removeEvent(request,response){
    try {
        await EventModel.findByIdAndDelete(request.params.id);
        response.status(200).send();
      } catch (error) {
        response.status(500).send(error);
      }
}


module.exports = {
    getEvents,
    insertEvent,
    updateEvent,
    removeEvent
}