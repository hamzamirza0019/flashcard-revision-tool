import { Request, Response } from "express";
import { createFlashcard } from "../services/flashcard.services";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiResponce } from "../utils/ApiResponce";
import { join } from "node:path";

export const createFlashcardController = asyncHandler(
    async ( req: Request, res:Response)=>{
        const {question, answer} = req.body;

        // Temp
        const userId = "temp-id";

        const flashcard = await createFlashcard(userId, question, answer);

        res.status(200).json(
            ApiResponce(true, flashcard, "Flashcard created successfully")
        )
    }
)