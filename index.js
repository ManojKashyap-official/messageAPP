const express= require('express');
const app =express();
const path=require('path');
const bodyParser=require('body-parser')
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1134070",
  key: "a6946c269873d90748c4",
  secret: "f97dcbc45406ebc5f9ac",
  cluster: "ap2",
  useTLS: true
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));




app.post('/message',function(req,res){
    console.log(req.body)
    const newMessage={
        user:req.body.name,
        message:req.body.message
    }
    pusher.trigger("my-channel", "my-event",newMessage);

    res.send();
   
});


app.listen(3000);