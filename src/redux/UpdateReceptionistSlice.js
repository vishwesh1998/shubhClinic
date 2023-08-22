import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : 'updateRec',
    initialState : {
        value : {name:"", phoneNumber:"", password:""}
    },
    reducers : {
        updRecep : (state,action) =>{
                    state.value = action.payload
                    console.log(state.value)
        }
    }
})

export default slice.reducer
export const {updRecep} = slice.actions