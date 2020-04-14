const express=require('express');
const mongoose=require('mongoose');
require('dotenv/config')

const app =express();

//Import Routes
const postsroute=require('./routes/posts');
//middleware to get 
app.use('/posts',postsroute)

//set up static files
app.use(express.static('public'));
// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/posts', require('./routes/posts'));

//connect to DB
mongoose.connect(
    process.env.DB_connection,
    { useNewUrlParser: true },
    ()=> console.log("Connection established")
)

app.get('/',(req,res) => {
    res.send('Home Page');
});

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); 
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 3000, function(){
    console.log('now listening for requests');
});