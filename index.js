import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user-routes.js";

dotenv.config();

const app = express(); 
const port = process.env.PORT || 5000 
const mongo_uri = process.env.MONGO_URI;

app.use(express.json()); 
app.use(cors());

app.use('/api/users', userRoutes)

const startServer = async () => {
    try {
      await mongoose.connect(mongo_uri);
      console.log("Connected to MongoDB");
  
      app.listen(port, () => {
        console.log(`Server started on port ${port}`);
      });
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    }
  };
  
  startServer();
