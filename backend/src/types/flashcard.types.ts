export interface Flashcard{
    id: string,
    user_id: string,
    question: string,
    answer: string,
    difficulty: number,
    interval: number,
    repititions: number,
    next_review_date: Date,
    created_at: Date,
    updated_at: Date
}
