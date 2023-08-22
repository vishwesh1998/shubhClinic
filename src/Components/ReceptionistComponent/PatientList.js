import {useDispatch, useSelector} from 'react-redux'
import ApiServer, {urls} from '../../ApiServer'
import {AddRecepPatient, DelRecepPatient} from '../../redux/RecepPatientListSlice'
import {useEffect} from 'react'
import {UpdateP} from '../../redux/UpdatePatientSlice' 
import{useNavigate} from 'react-router-dom'

export default function PatientList()
{
    const navigate = useNavigate()
    const patient = useSelector(state=>state.ReceptionPatientList.value)
    // console.log(patient)
    const data = useSelector(state=>state.Dlogin.value)
    const token = data.token
    // console.log(token)
    const dispatch = useDispatch()

    let deleteData = async (id) =>{
        let status = window.confirm('Are You Sure ?')
        if(status)
        {
            const response = await ApiServer.DeleteApiTokenCall(urls.DeleteApi+id,token)
            console.log(response)
            dispatch(DelRecepPatient(id))
        }
    }

    let show = async () =>{
        const response = await ApiServer.GetApiTokenCall(urls.GetRecPatient,token)
        if(response.data.status)
        dispatch(AddRecepPatient(response.data.data))
        // console.log(a)
    }

    let updateData = (obj) =>{
        dispatch(UpdateP(obj))
        navigate('/updatepatient')
    }

    useEffect(()=>{
        show()
    },[])

    return <div>
        <h1 className='text-primary-gradient fw-medium text-center'>Patient List !</h1>
        <div className='container'>
        <table className='table border mt-3'>
            <thead>
            <tr className='text-dark'>
                <th>S. No.</th>
                <th>Name</th>
                <th>Appointment Time</th>
                <th>Appointment Date</th>
                <th>Gender</th> 
                <th>Phone Number</th>
                <th>Operation</th>
            </tr>
            </thead>
            <tbody>
                {patient.map((ob,index)=><tr>
                    <td className='text-primary-gradient'><b>{index+1}</b></td>
                    <td className='text-primary-gradient'><b>{ob.name}</b></td>
                    <td className='text-primary-gradient'><b>{ob.time}</b></td>
                    <td className='text-primary-gradient'><b>{ob.appointmentdate}</b></td>
                    <td className='text-primary-gradient'><b>{ob.sex}</b></td>
                    <td className='text-primary-gradient'><b>{ob.phoneNumber}</b></td>
                    <td>
                        <button className='btn-sm btn-success' onClick={()=>updateData(ob)}>Update</button>
                        &nbsp; || &nbsp;
                        <button className='btn-sm btn-danger' onClick={()=>deleteData(ob.id)}>Delete</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
        </div>
    </div> 

}