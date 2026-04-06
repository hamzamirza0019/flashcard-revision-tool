import express from "express";
import { Request, Response } from "express";
import { createFlashcardController, 
    deleteFlashcrdByIdController, 
    getAllFlashcardsController, 
    getFlashcardByIdController, 
    getCardsByDeckController,
    updateFlashcardController } from "../controllers/flashcard.controllers";

const  router = express.Router();

router.post("/decks/:id/cards", createFlashcardController);
router.get("/decks/:id/cards", getCardsByDeckController);

router.get("/decks/:id/cards/:cardId", getFlashcardByIdController);
router.put("/decks/:id/cards/:cardId", updateFlashcardController);
router.delete("/decks/:id/cards/:cardId", deleteFlashcrdByIdController);

// (Optional) If you had this earlier
// router.get("/cards", getAllFlashcardsController);

export default router;