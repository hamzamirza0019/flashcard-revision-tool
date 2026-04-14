import { pool } from "../config/db";
import { Flashcard } from "../types/flashcard.types";
import { ApiError } from "../utils/ApiError";

export const createFlashcard = async(
    userId: string,
    deckId: string,
    question: string,
    answer: string
): Promise<Flashcard> =>{
    if(!question || !answer){
        throw new ApiError(400, "Question And Answers are required!")
    }

    const deckCheck = await pool.query( 'SELECT id FROM decks WHERE id = $1', [deckId] );

    if (deckCheck.rows.length=== 0){
         await pool.query(
    `INSERT INTO decks (id, user_id, name)
     VALUES ($1, $2, $3)`,
    [deckId, userId, "Auto Created Deck"]
  );
    }

    const result = await pool.query(
        `
        INSERT INTO flashcards (user_id, deck_id, question, answer)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
        `,
        [userId, deckId, question, answer]
    );

    if(result.rows.length === 0){
        throw new ApiError(500, "Failed to create Flashcard!" );
    }

    return result.rows[0];
}

export const getAllFlashcards = async (userId: string) =>{
    const result = await pool.query(
        `
        SELECT * FROM flashcards
        WHERE user_id = $1
        ORDER BY created_at DESC
        `,[userId]
    );

    return result.rows ;
}


export const getFlashcardById = async (id: string)=>{
    const result = await pool.query(
        `
        SELECT * FROM flashcards 
        WHERE id = $1
        `, [id]
    )

    if(result.rows.length=== 0){
        throw new ApiError(404, "Flashcard not found");
    }

    return result.rows[0];
};

export const updateFlashcard = async (
  id: string,
  cardId: string,
  question: string,
  answer: string
) => {
  const result = await pool.query(
    `
    UPDATE flashcards 
    SET question = $1,
        answer = $2,
        updated_at = NOW()
    WHERE id = $3 AND deck_id = $4
    RETURNING *
    `,
    [question, answer, cardId, id]
  );

  if (result.rows.length === 0) {
    throw new ApiError(404, "Flashcard not found in this deck!");
  }

  return result.rows[0];
};

export const deleteFlashcard = async (id: string, cardId: string) => {
  const result = await pool.query(
    `
    DELETE FROM flashcards
    WHERE id = $1 AND deck_id = $2
    RETURNING *
    `,
    [cardId, id]
  );

  if (result.rows.length === 0) {
    throw new ApiError(404, "Flashcard not found in this deck!");
  }

  return result.rows[0];
};

export const getCardsByDeck = async (deckId: string) => {
  const result = await pool.query(
    `SELECT * FROM flashcards WHERE deck_id = $1`,
    [deckId]
  );

  return result.rows;
};
