import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// Initialize your MongoDB client
// Make sure you have MONGODB_URI in your .env.local file
const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db(); // You can pass your DB name here if needed, e.g. client.db("portfolio-blog")

export const auth = betterAuth({
    database: mongodbAdapter(db),
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    emailAndPassword: {
        enabled: true,
        // Optional: restrict registration to only your email so others can't create accounts
        // We'll handle full admin logic later, but this enables basic login
    },
});
