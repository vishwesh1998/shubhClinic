import {useRef, useEffect} from 'react'
import {useSelector} from 'react-redux'
import ApiServer, {urls} from '../../ApiServer'
import {useNavigate} from 'react-router-dom'

export default function UpdateReceptionist()
{
    const navigate = useNavigate()
    const tokenD = useSelector(state=>state.Dlogin.value)
    console.log(tokenD)
    const token = tokenD.token
    const data = useSelector(state=>state.UpdatePat.value)
    // console.log(data)
    let nameBox = useRef()
    let dateBox = useRef()
    let phoneBox = useRef()

    useEffect(()=>{
        nameBox.current.value = data.name
        // dateBox.current.value = data.appointmentdate
        phoneBox.current.value = data.phoneNumber
    },[])

    let save = async (event) =>{
        event.preventDefault()
        let status = window.confirm("Are You Sure ?")
        if(status)
        {
        let id = data.id
        console.log(id)
        let obj = {
            name : nameBox.current.value,
            appointmentdate : dateBox.current.value,
            phoneNumber : phoneBox.current.value
        }
        
        const response = await ApiServer.PutApiCall(urls.UpdatePat+id,obj,token)
        console.log(response)
        if(response.data.status)
        {
            event.target.reset()
            {tokenD.type=='doctor'?navigate('/patientList'):navigate('/recpatientlist')}
        }
        }
    }
    return <>
    <div className="container-xxl" id="contact">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    {/* <h5 className="text-primary-gradient fw-medium">Add Receptionist!</h5> */}
                    <h1 className="mb-5">Update Patient!</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form onSubmit={save}>
                                <div className="row g-3">
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" ref={nameBox} required/>
                                            <label for="name">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input type="date" className="form-control" id="date" placeholder="Date"  ref={dateBox} required/>
                                            <label for="date">Appointment Date</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row g-3'>
                                    <div className="col-12">
                                        <div className="form-floating mt-3">
                                            <input type="number" className="form-control" id="number" placeholder="number"  ref={phoneBox} required/>
                                            <label for="number">Phone Number</label>
                                         </div>
                                    </div>
                                    </div>
                                    <br/>    
                                <div className="row g-3">
                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="form-floating mt-4">
                                            <button className='btn btn-success'>Update Patienet</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}