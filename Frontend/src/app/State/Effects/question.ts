import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuestionService } from 'src/app/Services/question.service';
import * as QuestionAction from '../Actions/questionActions'


@Injectable()
export class QuestionEffects {
  constructor(private actions$: Actions, private questionService: QuestionService
  ) { }


  loadQuestions$ = createEffect(() => this.actions$.pipe(
    ofType(QuestionAction.loadQuestions),
    // add page and pageSize to the action
    mergeMap((action) => this.questionService.getQuestions(action.page, action.pageSize).pipe(
        map(questions => QuestionAction.loadQuestionsSuccess({ questions })),
        catchError(error => of(QuestionAction.loadQuestionsFailure({ error })))
    )),
));

// addQuestion$ = createEffect(() => this.actions$.pipe(
//     ofType(QuestionAction.addQuestion),
//     mergeMap((action) => this.questionService.addQuestion(action.question).pipe(
//         map(question => QuestionAction.addQuestionSuccess(question )),
//         catchError(error => of(QuestionAction.addQuestionFailure({ error })))
//     )),
// ));

}
