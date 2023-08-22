import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : "DocSlice",
    initialState : {
        value : {}
    },
    reducers : {
       DocLogin : (state,action) =>{
        state.value = action.payload
        // console.log(state.value)
       } 
    }
})

export default slice.reducer
export const {DocLogin} = slice.actions