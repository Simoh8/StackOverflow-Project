import { createReducer, on } from '@ngrx/store';
import { Question } from 'src/app/Interfaces';
import * as QuestionAction from '../Actions/questionActions'

  export interface QuestionsState {
    questions: Question[];
    loading: boolean;
    error: any;
}


export const initialState: QuestionsState = {
    questions: [],
    loading: false,
    error: null
};


export const questionsReducer = createReducer(
    initialState,
    on(QuestionAction.loadQuestions, (state) => {
        return {
            ...state,
            loading: true
        }
    }
    ),
    on(QuestionAction.loadQuestionsSuccess, (state, { questions }) => {
        return {
            ...state,
            loading: false,
            questions: [...questions]
        }
    }
    ),
    on(QuestionAction.loadQuestionsFailure, (state, { error }) => {
        return {
            ...state,
            loading: false,
            error
        }
    }
    ),
    on(QuestionAction.addQuestion, (state, { question }) => {
        return {
            ...state,
            loading: true
        }
    }
    ),

    on(QuestionAction.addQuestionSuccess, (state, { question }) => {
        return {
            ...state,
            questions: [...state.questions, question]
        }
    }
    ),

    on(QuestionAction.addQuestionFailure, (state, { error }) => {
        return {
            ...state,
            error
        }
    }
    )



)