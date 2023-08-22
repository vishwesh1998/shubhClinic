import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : 'recPat',
    initialState : {
        value : []
    },
    reducers : {
        AddRecepPatient : (state,action) => {
            state.value = action.payload
            console.log(state.value)
        },
        DelRecepPatient : (state,action) => {
            state.value = state.value.filter(ob=>ob.id!=action.payload)
        }
    }
})

export default slice.reducer
export const {AddRecepPatient, DelRecepPatient} = slice.actions