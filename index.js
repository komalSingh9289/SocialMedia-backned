import { dotenv } from "dotenv";
import express from "express";
dotenv.config();


const app = express.json();
const port = process.env.PORT;
