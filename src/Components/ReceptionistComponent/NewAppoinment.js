import {useRef} from 'react'
import ApiServer from '../../ApiServer'
import {urls} from '../../ApiServer'
import {useSelector, useDispatch} from 'react-redux'
import {AddNewPat} from '../../redux/NewPatientSlice'
import {useState} from 'react'

export default function NewApponitment()
{
const [msg, setMsg] = useState("")
const dispatch = useDispatch()
const data = useSelector(state=>state.Dlogin.value)
// console.log(data)
const token = data.token

const nameBox = useRef()
const phoneBox = useRef()
const genderBox = useRef()
const ageBox = useRef()
// const dateBox = useRef()
// const timeBox = useRef()

const date = new Date()
const strTime = date.toString()
// console.log(strTime)
const currentDate = strTime.slice(0,15)
// console.log(currentDate)
const time = strTime.slice(16,24)
// console.log(b)
// const time = date.getTime()

let save = async (event)=>{
    event.preventDefault()
    setMsg('')
    let status = window.confirm("Are You Sure ?")
    if(status)
    {
        let obj = {
            name : nameBox.current.value,
            sex : genderBox.current.value,
            age : ageBox.current.value,
            phoneNumber : phoneBox.current.value,
            appointmentdate : currentDate,
            time : time 
        }

        const response = await ApiServer.PostApiTokenCall(urls.NewPat,obj,token)
        console.log(response)
        if(response.data.status)
        {
            dispatch(AddNewPat(response.data.data))
            setMsg(response.data.msg)
            event.target.reset()
        }
        else{
            setMsg(response.data.msg)
        }
    }

}

    return <>
        {/* <!-- Contact Start --> */}
         <div className="container-xxl" id="new_appointment">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="text-primary-gradient fw-medium">Add Details</h5>
                    <h1 className="mb-5">New Apponitment!</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <form onSubmit={save}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" ref={nameBox} className="form-control" id="name" placeholder="Your Name" required/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="phone" ref={phoneBox} className="form-control" required id="phone" placeholder="Your Contact Number" />
                                            <label for="phone">Your Contact Number</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>    
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <select className='form-control' ref={genderBox} required>
                                                <option value=''>Choose Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                        <input type="number" min={1} ref={ageBox} className="form-control" required id="age" placeholder="Your Age" />
                                            <label for="age">Your Age</label>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <b>{msg}</b>
                                <div className='row mt-4 text-center'>
                                    <div className='col-12'>
                                    <button className='btn btn-success'>Make An Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/* <!-- Contact End --> */}
        
</>
}