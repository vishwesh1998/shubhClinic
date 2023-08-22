import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : "newPat",
    initialState : {
        value : []
    },
    reducers : {
        AddNewPat : (state,action) =>{
            state.value = [...state.value,action.payload]
            console.log(state.value)
        }
    }
})

export default slice.reducer
export const {AddNewPat} = slice.actions