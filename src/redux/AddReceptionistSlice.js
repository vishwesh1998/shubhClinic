import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : "receptionList",
    initialState : {
        value : []
    },
    reducers : {
        AddRecp : (state, action) =>{
            state.value = [...state.value,action.payload]
            console.log(state.value)
        }
    }
})

export const {AddRecp} = slice.actions
export default slice.reducer