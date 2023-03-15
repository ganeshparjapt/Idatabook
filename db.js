
const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:localhost:27017/"

const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("are you connected to mongoose server by ganesh");
    })
        
  
}
module.exports = connectToMongo
