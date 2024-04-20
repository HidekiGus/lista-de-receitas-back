/* import { MongoClient } from 'mongodb';

const uri = process.env.DATABASE_URL; // Update with your MongoDB connection string
export const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB(); */

import mongoose from "mongoose";

export async function connectToDatabase() {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to MongoDB");
}

const kittySchema = new mongoose.Schema({
    name: String
});

export const Kitten = mongoose.model('Kitten', kittySchema);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

export const User = mongoose.model('User', userSchema);
