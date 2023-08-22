import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : 'pData',
    initialState : {
        value : []
    },
    reducers : {
        GetPatient : (state,action) =>{
            state.value = action.payload
            console.log(state.value)
        },

        DelPatient : (state,action) =>{
            state.value = state.value.filter(ob=>ob.id!=action.payload)
        },
        
        PatientChck : (state,action) => {
            state.value = action.payload
        }

    }
})

export default slice.reducer
export const {GetPatient, DelPatient, PatientChck} = slice.actions