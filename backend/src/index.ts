import dotenv from "dotenv";
dotenv.config();
import app from "./app";
// import connectDB from "./config/db";
console.log("Database_url: ",process.env.DATABASE_URL);
const PORT = process.env.PORT || 8000;

// connectDB();

app.listen(PORT, () =>{
    console.log(`Server Running on port ${PORT}`);
    
});