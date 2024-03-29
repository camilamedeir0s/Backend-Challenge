const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        mongoose.Promise = global.Promise;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;