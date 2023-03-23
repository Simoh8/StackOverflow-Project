import { createAction, createReducer,on } from "@ngrx/store";

export  const votereducer= createReducer(
    {count:0},

    on(createAction('voteup') , state=>{
        return {
            ...state,
            count:state.count+1
        }
    }),
    on(createAction('votedown'), state=>{
        return {
            ...state,
            count:state.count+1
        }
    })
)