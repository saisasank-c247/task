var express = require('express');
const mongoose = require("mongoose");
var cors = require('cors')
//external controllers
var { getUsers, insertUser, updateUser, removeUser } = require('./apis/controllers/user');

//express library
var app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(
  "mongodb://localhost:27017/mytask",
  {
    useNewUrlParser: true
  }
);

//user routes
app.get("/users", getUsers);
app.post("/users/insert", insertUser);
app.put("/users/update/:id", updateUser);
app.delete("/users/delete/:id", removeUser);


app.get('*', function (req, res) {
  res.send("You are not authorized to visit backend apis")
})

let port = process.env.port || 3001;
app.listen(port, function () {
  console.log('backend started at ' + port)
})