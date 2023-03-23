import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
// import { number } from "joi";
import { Question } from "src/app/Interfaces";

export interface QuestionState{
    questions:Question[];
    questionId:string;
    error:string;
    status:'pending' | 'loading' | 'error' | 'success';                                             
    
}

