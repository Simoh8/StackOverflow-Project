import { createReducer, on } from '@ngrx/store';
import { Question } from 'src/app/Interfaces';
import * as QuestionActions  from '../Actions/question'

export interface QuestionState {
  question: Question | null;
  loading: boolean;
  error: any;
}

const initialState: QuestionState = {
  question: null,
  loading: false,
  error: null
};

export const questionReducer = createReducer(
  initialState,
  on(QuestionActions.loadQuestion, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(QuestionActions.setQuestion, (state, { question }) => ({
    ...state,
    question,
    loading: false
  })),
  on(QuestionActions.loadQuestionError, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
