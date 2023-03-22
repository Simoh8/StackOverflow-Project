import { createAction, props } from "@ngrx/store";
import { LoginSuccess, LoginUser, Message, User } from "src/app/Interfaces";



export const login = createAction('[login]-login-user', props<{user:LoginUser}>())
export const loginSuccess = createAction('[login]-login-Success', props<{res:LoginSuccess}>())
export const loginFailure = createAction('[login]-login-Failure', props<{errorMessage:string}>())



export const register = createAction('[register]-register-user', props<{user:User}>())
export const registerSuccess = createAction('[register]-register-Success', props<{res:Message}>())
export const registerFailure = createAction('[register]-register-Failure', props<{errorMessage:string}>())

// export function loadUser(loadUser: any, arg1: (state: import("../Reducers/userReducers").UserState) => { isLoading: true; error: null; user: User | null; }): import("@ngrx/store").ReducerTypes<import("../Reducers/userReducers").UserState, readonly import("@ngrx/store").ActionCreator<string, import("@ngrx/store").Creator<any[], object>>[]> {
// //     throw new Error('Function not implemented.');
// // }

// export function setUser(setUser: any, arg1: (state: import("../Reducers/userReducers").UserState, { user }: any) => { user: any; isLoading: false; error: null; }): import("@ngrx/store").ReducerTypes<import("../Reducers/userReducers").UserState, readonly import("@ngrx/store").ActionCreator<string, import("@ngrx/store").Creator<any[], object>>[]> {
//     throw new Error('Function not implemented.');
// }

// export function loadUserError(loadUserError: any, arg1: (state: import("../Reducers/userReducers").UserState, { error }: any) => { isLoading: false; error: any; user: User | null; }): import("@ngrx/store").ReducerTypes<import("../Reducers/userReducers").UserState, readonly import("@ngrx/store").ActionCreator<string, import("@ngrx/store").Creator<any[], object>>[]> {
//     throw new Error('Function not implemented.');
// }
