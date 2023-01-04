const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

const path = require('path');
app.unsubscribe(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

const router = express.Router();

router.get('/',function(req,res){
    res.render("index",{});
});
router.get('/about',function(req,res){
    res.render("about",{});
});
router.get('/sign-in',function(req,res){
    res.render("signin",{});
});

app.use('/',router);




app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});