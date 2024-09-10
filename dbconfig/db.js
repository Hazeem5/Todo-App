import mongoose from 'mongoose';

export async function connect() {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to DB');

        // Add event listeners for the connection
        mongoose.connection.on('error', (error) => {
            console.error('Error connecting to DB:', error);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Disconnected from DB');
        });
    } catch (error) {
        console.error('Failed to connect to DB:', error);
    }
}

// import mongoose from 'mongoose'

// export  async function connect()
// {
//     try {
//         mongoose.connect(process.env.MONGO_URI)
//         mongoose.connection("connected",()=>{
//         console.log("connected to DB")})
//     } catch (error) {
//         console.log("error to connect to DB",error)
//     }
// }