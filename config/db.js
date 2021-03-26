import mongoose from 'mongoose'

const MongoURI = process.env.MongoURI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.green.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB