import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from 'src/app/Services/User.service';
import * as UserActions from '../Actions/userActions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      mergeMap(({ userId }) =>
        this.userService.getUserById(userId).pipe(
          map((user) =>
            UserActions.setUser({ user })
          ),
          catchError((error) =>
            of(UserActions.loadUserError({ error }))
          )
        )
      )
    )
  );
}
