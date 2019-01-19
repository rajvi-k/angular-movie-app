var express = require('express')
var mongoose = require('mongoose')
var movieRoutes = require('./routes/movies')
var userRoutes = require('./routes/user')
var bodyParser = require('body-parser')

mongoose.connect("mongodb://localhost:27017/lntmovie", { useMongoClient: true })
mongoose.connection.on("connected", () => {
console.log("MongoDB connected on 27017")
})
mongoose.connection.on("error", (err) => {
console.log("Connection error is ", err)
})

var app = express();

app.set('port', 4000)

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE');
    next();
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', movieRoutes)
app.use('/api', userRoutes)

app.listen(app.get('port'), () => {
console.log('REST server running on ', app.get('port'))
})
