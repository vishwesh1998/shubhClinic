import Menu from './Components/Menu'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import DoctorHome from './Components/DoctorComponent/DoctorHome'
import AddReceptionist from './Components/DoctorComponent/AddReceptionist'
import ReceptionistList from './Components/DoctorComponent/ReceptionistList'
import {useSelector} from 'react-redux'
import WrongUrl from './Components/WrongUrl'
import GetPatientList from './Components/DoctorComponent/GetPatientsList'
import NewAppointment from './Components/ReceptionistComponent/NewAppoinment'
import UpdateReceptionist from  './Components/DoctorComponent/UpdateReceptionist'
import UpdatePatient from './Components/DoctorComponent/UpdatePatient'
import ContactUs from './Components/ReceptionistComponent/ContactUs'
import PatientList from './Components/ReceptionistComponent/PatientList'
  
export default function App()
{
    const data = useSelector(state=>state.Dlogin.value)
    return <>
    <Menu/>
    <Routes>
        {data.status?<>
        <Route path='/home' element={<DoctorHome/>} />
        <Route path='/addreceptionist' element={<AddReceptionist/>} />
        <Route path='/receptionistlist' element={<ReceptionistList/>} />
        <Route path='/patientlist' element={<GetPatientList/>} />
        <Route path='/recpatientlist' element={<PatientList/>} />
        <Route path='/newappointment' element={<NewAppointment/>} />
        <Route path='/updatereceptionist' element={<UpdateReceptionist/>} />
        <Route path='/updatepatient' element={<UpdatePatient/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        </>
        :
        <><Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        {/* <Route path='/services' element={<Services/>} /> */}
        <Route path='/contact' element={<Contact/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} /></>}

        <Route path='*' element={<WrongUrl/>} />

    </Routes>
    <Footer/>
    </>
}