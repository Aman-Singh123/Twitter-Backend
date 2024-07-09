const mongoose = require('mongoose')

const connectDb = async (dburl) => {
    try {
        const DB_OPTIONS = {
            dbName: 'Twitter'
        }
        await mongoose.connect(dburl, DB_OPTIONS)
        console.log("Connection  Succesfully connected")
    } catch (err) {
        console.log("error in connect to mongoose")
    }
}

module.exports = connectDb