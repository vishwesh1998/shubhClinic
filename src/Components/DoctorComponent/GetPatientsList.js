import {useSelector, useDispatch} from 'react-redux'
import ApiServer from '../../ApiServer'
import {urls} from '../../ApiServer'
import {useEffect, useState} from 'react'
import {GetPatient, DelPatient} from '../../redux/GetPatientSlice'
import {UpdateP} from '../../redux/UpdatePatientSlice'
import {useNavigate} from 'react-router-dom'
import {PatientChck} from '../../redux/GetPatientSlice'

export default function GetPatientsList()
{
    const [active, setActive] = useState(undefined)
    const navigate = useNavigate()
    const data = useSelector(state=>state.Dlogin.value)
    let token = data.token
    const patientData = useSelector(state=>state.GetPatientList.value)
    console.log(patientData)
    const dispatch = useDispatch()

    useEffect(()=>{
        show()
    },[])

    let show = async () =>{
        const response = await ApiServer.GetApiTokenCall(urls.GetPatient,token)
        // console.log(response)
        dispatch(GetPatient(response.data.data))
        
    } 

    let deletePatient = async (id)=>{
        let status = window.confirm("Arw You Sure ?")
        if(status)
        {
            const response = await ApiServer.DeleteApiTokenCall(urls.DeleteApi+id,token)
            // console.log(response)
            if(response.data.status)
            {
                dispatch(DelPatient(id))
            }
        }
    }

    let updateData = (obj) =>{
        // console.log(obj)
        dispatch(UpdateP(obj))
        navigate('/updatepatient')
    }

    let checkData = async (id) =>{
        // alert('hi')
        let a = window.confirm("Are You Sure ?")
        if(a)
        {
        let status = patientData.aciveStatus
        if(status)
        {
            const response = await ApiServer.PutApiCall(urls.PatDone+id,"",token)
            const checkResult = patientData.map(ob=>ob.id==id?{...ob,activeStatus:!ob.activeStatus}:ob)
            dispatch(PatientChck(checkResult))
        }
        else
        {
            const response  = await ApiServer.PutApiCall(urls.PatUndone+id,"",token)
            const CheckResult = patientData.map(ob=>ob.id==id?{...ob,activeStatus:!ob.activeStatus}:ob)
            dispatch(PatientChck(CheckResult))
        }
    }
    }

    return <>
        <h1 className='text-primary-gradient fw-medium text-center'>Patient List !</h1>
        <div className='container'>
            <div className="row mt-5">
            <div>
            <button className='btn-sm btn-success' onClick={()=>setActive(true)}>Active Patient</button> &nbsp;
            <button className='btn-sm btn-danger' onClick={()=>setActive(false)}>De-Active Patient</button> &nbsp;
            <button className='btn-sm btn-primary' onClick={()=>setActive(undefined)}>All Patient</button> &nbsp;
            {console.log(active)}
            </div>
            </div>
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
            {patientData.filter(ob=>(ob.activeStatus == active) || (active == undefined)).
            map((ob,index)=><tr>
                <td className='text-primary-gradient'><b>{index+1}</b></td>
                <td className='text-primary-gradient'><b>{ob.name}</b></td>
                <td className='text-primary-gradient'><b>{ob.time}</b></td>
                <td className='text-primary-gradient'><b>{ob.appointmentdate}</b></td>
                <td className='text-primary-gradient'><b>{ob.sex}</b></td>
                <td className='text-primary-gradient'><b>{ob.phoneNumber}</b></td>
                <td>
                    <button className='btn-sm alert-primary' onClick={()=>updateData(ob)}>Update</button>
                    &nbsp;||&nbsp;
                    <button className='btn-sm btn-danger' onClick={()=>deletePatient(ob.id)}>Delete</button>
                    &nbsp;||&nbsp;
                    {ob.activeStatus?<button className='btn-sm btn-success' onClick={()=>checkData(ob.id)}>CheckUp Done</button>:<button className='btn-sm btn-warning' onClick={()=>checkData(ob.id)}>CheckUp Not Done</button>}
                </td>
            </tr>)}
        </tbody>
        </table>
        </div>
    </>
}