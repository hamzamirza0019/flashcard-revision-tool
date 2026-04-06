import { Request, Response } from "express";
import { createFlashcard, updateFlashcard, getAllFlashcards, getFlashcardById, deleteFlashcard, getCardsByDeck } from "../services/flashcard.services";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiResponce } from "../utils/ApiResponce";
import { ApiError } from "../utils/ApiError";

const userId = "11111111-1111-1111-1111-111111111111";

export const createFlashcardController = asyncHandler(
    async ( req: Request, res:Response)=>{
        const {question, answer} = req.body;
        const {id: deckId} = req.params;
        const flashcard = await createFlashcard(userId, deckId as string, question, answer);
            res.status(201).json(
                ApiResponce(true, flashcard, "Flashcard created successfully...")
            )
    }
);


export const getAllFlashcardsController = asyncHandler(async (req:Request , res:Response)=>{

    const cards = await getAllFlashcards(userId);

    res.status(200).json(
        ApiResponce(true, cards, "Flashcards fetched successfully")
    )
});

export const getFlashcardByIdController = asyncHandler(
    async(req: Request, res: Response)=>{
        const id = req.params.id as string;
        const card = await getFlashcardById(id);

        res.status(200).json(
            ApiResponce(true, card, "Flashcard fetched successfully")
        );
    }
);

export const updateFlashcardController = asyncHandler(
    async(req: Request, res: Response)=>{
        const id = req.params.id as string;
        const { question, answer } = req.body;

        const update = await updateFlashcard(id , question, answer);

        res.status(200).json(
            ApiResponce(true, update, "Flashcard updated successfully")
        );
    }
);

export const deleteFlashcrdByIdController = asyncHandler(
    async(req:Request, res:Response)=>{
        const id = req.params.id as string;
        const deleted = await deleteFlashcard(id);

        res.status(200).json(
            ApiResponce(true, deleted, "Flashcard deleted successfully")
        );
    }
);

import { validate as isUUID } from "uuid";

export const getCardsByDeckController = asyncHandler(async (req, res) => {
  const { id: deckId } = req.params;

  if (!isUUID(deckId)) {
    throw new ApiError(400, "Invalid deck ID");
  }

  const cards = await getCardsByDeck(deckId as string);

  res.json(ApiResponce(true, cards, "Cards got"));
});