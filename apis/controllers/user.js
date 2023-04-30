var UserModel = require('../models/user')

async function getUsers(request,response) {
    const users = await UserModel.find({}).sort({createdAt: "descending"});
    try {
        response.status(200).send(users);
    } catch (error) {
        response.status(500).send(error);
    }
}

async function insertUser(request,response) {
    const user = new UserModel(request.body);
    try {
        await user.save();
        response.status(201).send(user);
    } catch (error) {
        response.status(500).send(error);
    }
}

async function updateUser(request,response){
    try {
        await UserModel.findByIdAndUpdate(request.params.id, {
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

async function removeUser(request,response){
    try {
        await UserModel.findByIdAndDelete(request.params.id);
        response.status(200).send();
      } catch (error) {
        response.status(500).send(error);
      }
}


module.exports = {
    getUsers,
    insertUser,
    updateUser,
    removeUser
}