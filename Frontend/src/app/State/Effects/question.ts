import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuestionService } from 'src/app/Services/question.service';

import * as QuestionActions from '../Actions/question';

@Injectable()
export class QuestionEffects {
  constructor(
    private actions$: Actions,
    private questionService: QuestionService
  ) {}

  loadQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionActions.loadQuestion),
      mergeMap(({ questionId }) =>
        this.questionService.getQuestionById(questionId).pipe(
          map((question) =>
            QuestionActions.setQuestion({ question })
          ),
          catchError((error) =>
            of(QuestionActions.loadQuestionError({ error }))
          )
        )
      )
    )
  );
}
