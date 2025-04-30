const mongoose = require('mongoose');

const connectToDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/ECOMZ");
        console.log("Database Connection Successful")
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}
module.exports = connectToDB;