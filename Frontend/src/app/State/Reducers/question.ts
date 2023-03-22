import { createReducer, on } from '@ngrx/store';
import { Question } from 'src/app/Interfaces';
export interface QuestionInterface {
  questions: Question[]
  questionid: string
}

const initialState: QuestionInterface= {
  questions:[],
  questionid:''
};

// export const questionReducer = createReducer(
//   initialState,
//   on(QuestionActions.loadQuestion, (state) => ({
//     ...state,
//     loading: true,
//     error: null
//   })),
//   on(QuestionActions.setQuestion, (state, { question }) => ({
//     ...state,
//     question,
//     loading: false
//   })),
//   on(QuestionActions.loadQuestionError, (state, { error }) => ({
//     ...state,
//     error,
//     loading: false
//   }))
// );
