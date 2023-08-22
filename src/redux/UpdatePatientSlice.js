import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : "upPat",
    initialState : {
        value : {}
    },
    reducers : {
        UpdateP : (state,action) =>{
            state.value = action.payload
            console.log(state.value)
        }
    }
})

export default slice.reducer
export const {UpdateP} = slice.actions