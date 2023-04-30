var app = require('expres')();
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://madmin:<password>@clustername.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );
  

app.get('/',function(req,res){
    res.send("You are not authorized to visit backend apis")
})

let port = process.env.port || 3000;
app.listen(port, function(){
    console.log('backend started at '+port)
})