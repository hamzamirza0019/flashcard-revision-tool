import express, { Application } from "express"; 
import cors from "cors";
import { globalErrorHandler } from "./middlewares/error.middlewares";
import flashcardRoutes from "./routes/flashcard.routes";


const app:Application = express();

app.use(cors());
app.use(express.json());

app.use("/api", flashcardRoutes);

app.use(globalErrorHandler);


export default app;