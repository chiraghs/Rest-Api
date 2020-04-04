const express=require('express');
const mongoose=require('mongoose');
require('dotenv/config')

const app =express();

//Import Routes
const postsroute=require('./routes/posts');
//middleware to get 
app.use('/posts',postsroute)

app.get('/',(req,res) => {
    res.send('Home Page');
});

//connect to DB
mongoose.connect(
    process.env.DB_connection,
    { useNewUrlParser: true },
    ()=> console.log("Connection established")
)

app.listen(3000)