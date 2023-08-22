import {useSelector, useDispatch} from 'react-redux'
import {DelList} from '../../redux/ContactSlice'

export default function ContactUs()
{
    const dispatch = useDispatch()
    const data = useSelector(state=>state.CntactUsList.value)
    console.log(data)

    let deleteData = (id) =>{
        let status = window.confirm("Are You Sure ?")
        if(status)
        dispatch(DelList(id))
    }
    return <div>
    <h1 className='text-primary-gradient fw-medium text-center'>Visiter's Contact Us Details !</h1>
    <div className="container">
        <div>
            <table className='table border mt-3'>
            <thead>
                <tr className='text-dark'>
                    <th>S. No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {data.map((ob,index)=><tr>
                    <td className='text-primary-gradient'><b>{index+1}</b></td>
                    <td className='text-primary-gradient'><b>{ob.name}</b></td>
                    <td className='text-primary-gradient'><b>{ob.email}</b></td>
                    <td className='text-primary-gradient'><b>{ob.phone}</b></td>
                    <td className='text-primary-gradient'><b>{ob.subject}</b></td>
                    <td className='text-primary-gradient'><b>{ob.text}</b></td>
                    <td>
                        <button className='btn-sm btn-danger' onClick={()=>deleteData(ob.id)}>Delete</button>
                    </td>
                </tr>)}
            </tbody>
            </table>
        </div>
    </div>
    </div>
}