import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// Define user schema
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: { type: String, unique: true },
    phone: Number
});

// Initialize autoIncrement plugin
autoIncrement.initialize(mongoose.connection);

// Apply autoIncrement plugin to schema
userSchema.plugin(autoIncrement.plugin, { model: 'user', startAt: 1 });

// Create model
const User = mongoose.model('user', userSchema);

export default User;
