import {configureStore} from '@reduxjs/toolkit'
import DocReducer from './DocSlice'
import AddReceptionist from './AddReceptionistSlice'
import GetRecepList from './GetReceptionistSlice'
import GetPatList from '../redux/GetPatientSlice'
import NewPatient from '../redux/NewPatientSlice'
import UpRecep from '../redux/UpdateReceptionistSlice'
import UpPat from '../redux/UpdatePatientSlice'
import ConList from '../redux/ContactSlice'
import RePatient from './RecepPatientListSlice'

const store = configureStore({
    reducer : {
        Dlogin : DocReducer,
        RecepList : AddReceptionist,
        GetRecep : GetRecepList,
        GetPatientList : GetPatList,
        NewPatientList : NewPatient,
        UpdateRecep : UpRecep,
        UpdatePat : UpPat,
        CntactUsList : ConList,
        ReceptionPatientList : RePatient   
    }
})

export default store