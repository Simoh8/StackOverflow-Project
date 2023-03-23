import { createAction, props } from "@ngrx/store";
import { Question } from "src/app/Interfaces";
export const loadQuestions = createAction(
    '[Questions] Load Questions',
    props<{ page: number, pageSize: number }>()
);


export const loadQuestionsSuccess = createAction(
    '[Questions] Load Questions Success',
    props<{ questions: Question[] }>()
);

export const loadQuestionsFailure = createAction(
    '[Questions] Load Questions Failure',
    (error: any) => ({ error })
);

export const addQuestion = createAction(
    '[Questions] Add Question',
    (question: Question) => ({ question })
);


export const addQuestionSuccess = createAction(
    '[Questions] Add Question Success',
    (question: Question) => ({ question })
);

export const addQuestionFailure = createAction(
    '[Questions] Add Question Failure',
    (error: any) => ({ error })
);

export const deleteQuestion = createAction(
    '[Questions] Delete Question',
    (question: Question) => ({ question })
);


export const deleteQuestionSuccess = createAction(
    '[Questions] Delete Question Success',
    (question: Question) => ({ question })
);

export const deleteQuestionFailure = createAction(
    '[Questions] Delete Question Failure',
    (error: any) => ({ error })
);

export const updateQuestion = createAction(
    '[Questions] Update Question',
    (question: Question) => ({ question })
);

export const updateQuestionSuccess = createAction(
    '[Questions] Update Question Success',
    (question: Question) => ({ question })
);

export const updateQuestionFailure = createAction(
    '[Questions] Update Question Failure',
    (error: any) => ({ error })
);