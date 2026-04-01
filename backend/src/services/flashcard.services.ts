import { pool } from "../config/db";
import { Flashcard } from "../types/flashcard.types";
import { ApiError } from "../utils/ApiError";

export const createFlashcard = async(
    userId: string,
    question: string,
    answer: string
): Promise<Flashcard> =>{
    if(!question || !answer){
        throw new ApiError(400, "Question And Answers are required!")
    }
    const result = await pool.query(
        `
        INSERT INTO flashcards (user_id, question, answer)
        VALUE ($1, $2, $3)
        RETURNING *;
        `,
        [userId, question, answer]
    );

    if(result.rows.length === 0){
        throw new ApiError(500, "Failed to create Flashcard!" );
    }

    return result.rows[0];
}

