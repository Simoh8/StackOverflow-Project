import { createAction, props } from '@ngrx/store';
import { Question } from 'src/app/Interfaces';

// Define an action to load a single question
export const loadQuestion = createAction(
  '[Question] Load Question',
  props<{ id: number }>()
);

// Define an action to set a loaded question
export const setQuestion = createAction(
  '[Question] Set Question',
  props<{ question: Question }>()
);

// Define an action to handle errors when loading a question
export const loadQuestionError = createAction(
  '[Question] Load Question Error',
  props<{ error: any }>()
);
