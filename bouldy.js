const express = require('express');
const app = express();

// allows access to files that are public
app.use(express.static(__dirname + '/public'))

// basic mongo db setup
const { MongoClient } = require('mongodb');

let db;
const url = 'mongodb+srv://slee2238_db_user:0000@bongo.caukxyu.mongodb.net/?appName=Bongo';
new MongoClient(url).connect().then((client)=>{
    console.log('DB connected')
    db = client.db('time');
}).catch((err)=>{
    console.log(err)
})

// server port
app.listen(6974, function(){
    console.log('listening on 6974')
});

// get function to display message
app.get('/chipotle', function(request, response){
    response.send('bowl or burrito')
});

// get function to display link or html file
app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html')
})

// saving in db
app.get('/news', (request, response) => {
    db.collection('money').insertOne({title : 'yarr'})
    // response.send('took a shit')
})