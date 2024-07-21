import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb+srv://Praveshini:praveshini@cluster0.kyaa5yq.mongodb.net/user-management?retryWrites=true&w=majority&appName=Cluster0';
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to the database", error);
    }
};

export default Connection;
