
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"

const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("are you connected to mongoose server by ganesh");
    })
        
  
}
module.exports = connectToMongo