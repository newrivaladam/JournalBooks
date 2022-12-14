const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const comm = await mongoose.connect(process.env.MONGO_URI)
        console.log(comm.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
    
}

module.exports = connectDB