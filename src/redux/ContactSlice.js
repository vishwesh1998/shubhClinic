import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : 'contactus',
    initialState : {
        value : []
    },
    reducers : {
        ContactUsList : (state,action) => {
            state.value = [...state.value,action.payload]
            console.log(state.value)
        },
        DelList : (state,action) =>{
            state.value = state.value.filter(ob=>ob.id!=action.payload)
        }
    }
})

export default slice.reducer
export const {ContactUsList, DelList} = slice.actions