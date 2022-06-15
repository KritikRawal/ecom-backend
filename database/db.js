const mongoose = require('mongoose');
import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/Furniture", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.underline.bold)
        process.exit(1)
    }
}
export default connectDB
mongoose.connect('mongodb://127.0.0.1:27017/finalnodedatabase_api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})



















