// test-mongo.js
require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
    try {
        console.log('Testing MongoDB connection...');
        console.log('Using URI:', process.env.MONGO_URL ? 'URI found' : 'URI missing');
        
        await mongoose.connect(process.env.MONGO_URL);
        console.log('✅ Connected successfully!');
        
        await mongoose.disconnect();
        console.log('Disconnected.');
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
    }
}

testConnection();