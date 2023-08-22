import {useSelector, useDispatch} from 'react-redux'
import ApiServer from '../../ApiServer'
import {urls} from '../../ApiServer'
import {GetRecep, DelRecep} from '../../redux/GetReceptionistSlice'
import { useEffect } from 'react'
import {updRecep} from '../../redux/UpdateReceptionistSlice'
import {useNavigate} from 'react-router-dom' 


export default function ReceptionistList()
{
    const navigate = useNavigate()
    const data = useSelector(state=>state.Dlogin.value)
    const tok = data.token
    console.log(tok)
    const dispatch = useDispatch()
    const getData = useSelector(state=>state.GetRecep.value)
    useEffect(()=>{
        show()
    },[])    

    let show = async ()=>{
      const response = await ApiServer.GetApiTokenCall(urls.GetRecp,tok) 
      console.log(response)
      if(response.data.status)
      dispatch(GetRecep(response.data.data))
    }

    let delData = async (id) =>{
        const response  = await ApiServer.PutApiCall(urls.DelRecp+id,null,tok)
        if(response.data.data.status)
        dispatch(DelRecep(id))
    }

    let updateData = (obj) =>{
        dispatch(updRecep(obj))
        navigate('/updatereceptionist')
    }


    return <>
        <h1 className="text-primary-gradient fw-medium text-center">Receptionist List !</h1>
        <div className="container">
        <table className='table mt-3 border'>
        <thead>
            <tr>
                <th className='text-dark'>S. No.</th>
                <th className='text-dark'>Name</th>
                <th className='text-dark'>Phone Number</th>
                <th className='text-dark'>Email</th>
                <th className='text-dark'>Address</th>
                <th className='text-dark'>Operation</th>
            </tr>
        </thead>
        <tbody>
            {getData.map((ob,index)=><tr>
                <td className='text-primary-gradient'><b>{index+1}</b></td>
                <td className='text-primary-gradient'><b>{ob.name}</b></td>
                <td className='text-primary-gradient'><b>{ob.phoneNumber}</b></td>
                <td className='text-primary-gradient'><b>{ob.email}</b></td>
                <td className='text-primary-gradient'><b>{ob.raddress}</b></td>
                <td>
                <button className='btn-sm btn-success' onClick={()=>updateData(ob)}>Update</button>
                &nbsp;||&nbsp;
                <button className='btn-sm btn-danger' onClick={()=>delData(ob.id)}>Delete</button>
                </td>
            </tr>)}
        </tbody>
        </table>
        </div>
    </>
}