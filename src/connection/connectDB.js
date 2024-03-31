const mongoose = require('mongoose');

const connectDB =async () => {
    try {
        const db = await mongoose.connect(process.env.DATA_BASE_URL)
        if (db.STATES.connected) { 
            console.log('Database connected successfully')
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB