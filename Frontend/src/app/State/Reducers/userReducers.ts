import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/Interfaces';
import * as UserActions from '../Actions/userActions';

export interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export const initialUserState: UserState = {
  user: null,
  isLoading: false,
  error: null
};

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.loadUser, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(UserActions.setUser, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    error: null
  })),
  on(UserActions.loadUserError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error.message
  }))
);
