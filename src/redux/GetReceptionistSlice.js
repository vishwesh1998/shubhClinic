import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : "GetReception",
    initialState : {
        value : []
    },
    reducers : {
        GetRecep : (state,action) => {
            state.value = action.payload
            console.log(state.value)
        },
        DelRecep : (state,action) => {
            state.value = state.value.filter(ob=>ob.id!=action.payload)
        }
    }
})

export default slice.reducer
export const {GetRecep, DelRecep} = slice.actions