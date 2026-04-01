import express from "express";
import { createFlashcardController } from "../controllers/flashcard.controllers";

const  router = express.Router();

router.post("/", createFlashcardController);


export default router;