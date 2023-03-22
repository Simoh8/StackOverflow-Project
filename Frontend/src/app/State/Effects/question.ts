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

  loadQuestions = createEffect(() => {
    return this.actions$.pipe(
      // ofType(QuestionAction.getQuestions)
    )

  })

}
