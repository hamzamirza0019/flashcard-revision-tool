import express from "express";
import { createFlashcardController, 
    deleteFlashcrdByIdController, 
    getAllFlashcardsController, 
    getFlashcardByIdController, 
    updateFlashcardController } from "../controllers/flashcard.controllers";

const  router = express.Router();

router.post("/", createFlashcardController);
router.get("/", getAllFlashcardsController);
router.get("/:id", getFlashcardByIdController);
router.put("/:id", updateFlashcardController);
router.delete("/:id", deleteFlashcrdByIdController);

export default router;