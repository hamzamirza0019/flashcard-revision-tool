import { Request, Response } from "express";
import { createFlashcard, updateFlashcard, getAllFlashcards, getFlashcardById, deleteFlashcard } from "../services/flashcard.services";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiResponce } from "../utils/ApiResponce";
import { join } from "node:path";

const userId = "temp-id";

export const createFlashcardController = asyncHandler(
    async ( req: Request, res:Response)=>{
        const {question, answer} = req.body;
        const flashcard = await createFlashcard(userId, question, answer);

        res.status(200).json(
            ApiResponce(true, flashcard, "Flashcard created successfully...")
        )
    }
);


export const getAllFlashcardsController = asyncHandler(async (req:Request , res:Response)=>{
    const cards = await getAllFlashcards(userId);

    res.status(201).json(
        ApiResponce(true, cards, "Flashcard fwtch successfully...")
    )
});

export const getFlashcardByIdController = asyncHandler(
    async(req: Request, res: Response)=>{
        const card = await getFlashcardById(userId);

        res.status(201).json(
            ApiResponce(true, card, "Flashcard fetch successfully...")
        );
    }
);

export const updateFlashcardController = asyncHandler(
    async(req: Request, res: Response)=>{
        const id = req.params.id as string;
        const { question, answer } = req.body;

        const update = await updateFlashcard(id , question, answer);

        res.status(202).json(
            ApiResponce(true, update, "Flashcards are updated...")
        );
    }
);

export const deleteFlashcrdByIdController = asyncHandler(
    async(req:Request, res:Response)=>{
        const id = req.params.id as string;
        const deleted = await deleteFlashcard(id);

        res.status(201).json(
            ApiResponce(true, deleted, "Flashcard has deleted successfully")
        );
    }
);

